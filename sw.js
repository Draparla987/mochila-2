// Guarda la app en el dispositivo para que funcione sin conexión.
const CACHE='mochila-6d8903ab46', FONTS='mochila-fonts';
const CORE=["./", "index.html", "manifest.webmanifest", "img/arte-happy.png", "img/arte-think.png", "img/arte-wave.png", "img/av-abeja.png", "img/av-ballena.png", "img/av-buho.png", "img/av-caballo.png", "img/av-cebra.png", "img/av-cocodrilo.png", "img/av-conejo.png", "img/av-delfin.png", "img/av-dinosaurio.png", "img/av-elefante.png", "img/av-erizo.png", "img/av-gato.png", "img/av-gorila.png", "img/av-jirafa.png", "img/av-koala.png", "img/av-leon.png", "img/av-lince.png", "img/av-loro.png", "img/av-mariposa.png", "img/av-mariquita.png", "img/av-mono.png", "img/av-oso.png", "img/av-panda.png", "img/av-perro.png", "img/av-pinguino.png", "img/av-pulpo.png", "img/av-rana.png", "img/av-tiburon.png", "img/av-tigre.png", "img/av-tortuga.png", "img/av-unicornio.png", "img/av-zorro.png", "img/ciguena.png", "img/explora-happy.png", "img/explora-look.png", "img/explora-wave.png", "img/i-arpa.png", "img/i-castanuelas.png", "img/i-clarinete.png", "img/i-flauta.png", "img/i-guitarra.png", "img/i-maracas.png", "img/i-pandereta.png", "img/i-saxofon.png", "img/i-tambor.png", "img/i-triangulo.png", "img/i-trompeta.png", "img/i-violin.png", "img/ingles.png", "img/lectura.png", "img/lengua.png", "img/lince.png", "img/mapa.jpg", "img/mates.png", "img/mochi-happy.png", "img/mochi-read.png", "img/mochi-think.png", "img/mochi-wave.png", "voz/animales.mp4", "voz/arte.mp4", "voz/cuentos.mp4", "voz/efectos.mp4", "voz/en.mp4", "voz/fra.mp4", "voz/lengin.mp4", "voz/niveles.mp4", "voz/num.mp4", "voz/pal.mp4", "voz/pre.mp4", "voz/pro.mp4", "voz/sonidos.mp4", "voz/trofeos.mp4", "voz/ui.mp4", "img/icon-180.png", "img/icon-192.png", "img/icon-512.png", "img/icon-maskable-512.png", "vid/premio-arte.jpg", "vid/premio-cono.jpg", "vid/premio-fuego.jpg", "vid/premio-galaxia.jpg", "vid/premio-ingles.jpg", "vid/premio-lectura.jpg", "vid/premio-lengua.jpg", "vid/premio-mates.jpg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!==FONTS).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
// Safari pide los audios por trozos (Range): se sirven desde la caché con respuesta 206.
// Los últimos archivos leídos se guardan en memoria para que cada trozo salga al momento.
const MEM=new Map();
const bytes=(req,r)=>{
  const k=new URL(req.url).pathname;
  if(!MEM.has(k)){MEM.set(k,r.arrayBuffer().catch(e=>{MEM.delete(k);throw e;}));if(MEM.size>4) MEM.delete(MEM.keys().next().value);}
  return MEM.get(k);
};
const ranged=(req,r)=>{
  const m=/bytes=(\d*)-(\d*)/.exec(req.headers.get('range')||'');
  if(!m||r.status!==200) return r;
  return bytes(req,r).then(b=>{
    const n=b.byteLength, s=m[1]===''?Math.max(0,n-(+m[2]||0)):+m[1], e=(m[1]===''||m[2]==='')?n-1:Math.min(+m[2],n-1);
    if(s>=n) return new Response(null,{status:416,headers:{'Content-Range':'bytes */'+n}});
    return new Response(b.slice(s,e+1),{status:206,headers:{'Content-Type':r.headers.get('Content-Type')||'audio/mp4','Content-Range':'bytes '+s+'-'+e+'/'+n,'Content-Length':String(e-s+1),'Accept-Ranges':'bytes'}});
  });
};
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin===location.origin){
    if(url.pathname.endsWith('.mp4')&&url.pathname.includes('/vid/')) return;
    if(req.mode==='navigate'){
      e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put('index.html',cp));return r;}).catch(()=>caches.match('index.html',{ignoreSearch:true})));
      return;
    }
    e.respondWith(caches.match(req,{ignoreSearch:true}).then(r=>r?ranged(req,r):fetch(req).then(res=>{if(res.status===200){const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp));}return res;})));
  } else if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(caches.open(FONTS).then(c=>c.match(req).then(r=>{const f=fetch(req).then(res=>{c.put(req,res.clone());return res;}).catch(()=>r);return r||f;})));
  }
});
