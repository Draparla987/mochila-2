// Guarda la app en el dispositivo para que funcione sin conexión.
// Varias apps Mochi comparten dirección (draparla987.github.io): cada una solo toca sus cachés (mochila-…).
const CACHE='mochila-02fa1463b0', FONTS='mochila-fonts';
const CORE=["./", "index.html", "manifest.webmanifest", "fonts/LICENCIAS.txt", "fonts/andika-latin-704929.woff2", "fonts/andika-latin-c30478.woff2", "fonts/andika-latin-ext-752b9e.woff2", "fonts/andika-latin-ext-edfd9d.woff2", "fonts/baloo2-latin-983902.woff2", "fonts/baloo2-latin-ext-b5a7e4.woff2", "img/arte-happy.png", "img/arte-think.png", "img/arte-wave.png", "img/av-abeja.png", "img/av-ballena.png", "img/av-buho.png", "img/av-caballo.png", "img/av-cebra.png", "img/av-cocodrilo.png", "img/av-conejo.png", "img/av-delfin.png", "img/av-dinosaurio.png", "img/av-elefante.png", "img/av-erizo.png", "img/av-gato.png", "img/av-gorila.png", "img/av-jirafa.png", "img/av-koala.png", "img/av-leon.png", "img/av-lince.png", "img/av-loro.png", "img/av-mariposa.png", "img/av-mariquita.png", "img/av-mono.png", "img/av-oso.png", "img/av-panda.png", "img/av-perro.png", "img/av-pinguino.png", "img/av-pulpo.png", "img/av-rana.png", "img/av-tiburon.png", "img/av-tigre.png", "img/av-tortuga.png", "img/av-unicornio.png", "img/av-zorro.png", "img/ciguena.png", "img/explora-happy.png", "img/explora-look.png", "img/explora-wave.png", "img/i-acordeon.png", "img/i-armonica.png", "img/i-arpa.png", "img/i-banjo.png", "img/i-bongos.png", "img/i-cajon.png", "img/i-cascabeles.png", "img/i-castanuelas.png", "img/i-clarinete.png", "img/i-contrabajo.png", "img/i-electrica.png", "img/i-flauta.png", "img/i-gaita.png", "img/i-gong.png", "img/i-guitarra.png", "img/i-maracas.png", "img/i-organo.png", "img/i-pandereta.png", "img/i-piano.png", "img/i-platillos.png", "img/i-saxofon.png", "img/i-tambor.png", "img/i-triangulo.png", "img/i-trombon.png", "img/i-trompeta.png", "img/i-tuba.png", "img/i-ukelele.png", "img/i-violin.png", "img/i-violonchelo.png", "img/i-xilofono.png", "img/ingles.png", "img/lectura.png", "img/lengua.png", "img/lince.png", "img/mapa.jpg", "img/mates.png", "img/mochi-happy.png", "img/mochi-read.png", "img/mochi-think.png", "img/mochi-wave.png", "img/puzzles.png", "img/pz-bomberos.webp", "img/pz-castillo.webp", "img/pz-cocodrilo.webp", "img/pz-dinosaurios.webp", "img/pz-espacio.webp", "img/pz-granja.webp", "img/pz-mar.webp", "img/pz-mochi.webp", "img/pz-picnic.webp", "img/pz-piratas.webp", "img/pz-selva.webp", "img/pz-tren.webp", "img/z-armadillo.webp", "img/z-avestruz.webp", "img/z-babosa.webp", "img/z-caballito.webp", "img/z-camaleon.webp", "img/z-capibara.webp", "img/z-chimpance.webp", "img/z-ciempies.webp", "img/z-coral.webp", "img/z-demonio.webp", "img/z-emu.webp", "img/z-erizo-mar.webp", "img/z-estrella.webp", "img/z-hiena.webp", "img/z-jabali.webp", "img/z-jaguar.webp", "img/z-libelula.webp", "img/z-liebre.webp", "img/z-luciernaga.webp", "img/z-mantis.webp", "img/z-mejillon.webp", "img/z-morsa.webp", "img/z-narval.webp", "img/z-ornitorrinco.webp", "img/z-oso-hormiguero.webp", "img/z-paloma.webp", "img/z-panda-rojo.webp", "img/z-rinoceronte.webp", "img/z-salamandra.webp", "img/z-suricata.webp", "img/z-tucan.webp", "img/z-yak.webp", "snd/n-do.mp4", "snd/n-la.mp4", "snd/n-mi.mp4", "snd/n-re.mp4", "snd/n-sol.mp4", "snd/sfx-ko.mp4", "snd/sfx-ok.mp4", "snd/sfx-pop.mp4", "snd/sfx-star.mp4", "snd/sfx-tap.mp4", "snd/sfx-win.mp4", "voz/animales.mp4", "voz/animales2.mp4", "voz/animales3.mp4", "voz/animales4.mp4", "voz/arte.mp4", "voz/arte3.mp4", "voz/cuentos.mp4", "voz/cuentos2.mp4", "voz/cuentos3.mp4", "voz/efectos2.mp4", "voz/en.mp4", "voz/en2.mp4", "voz/en3.mp4", "voz/fra.mp4", "voz/instrumentos.mp4", "voz/instrumentos2.mp4", "voz/lengin.mp4", "voz/niveles.mp4", "voz/num.mp4", "voz/pal.mp4", "voz/palabras2.mp4", "voz/pre.mp4", "voz/pro.mp4", "voz/puzzles.mp4", "voz/recuerda.mp4", "voz/revision.mp4", "voz/sonidos.mp4", "voz/tablas.mp4", "voz/trofeos.mp4", "voz/ui.mp4", "img/icon-180.png", "img/icon-192.png", "img/icon-512.png", "img/icon-maskable-512.png", "vid/premio-arte.jpg", "vid/premio-cohete.jpg", "vid/premio-cono.jpg", "vid/premio-fuego.jpg", "vid/premio-galaxia.jpg", "vid/premio-ingles.jpg", "vid/premio-lectura.jpg", "vid/premio-lengua.jpg", "vid/premio-mates.jpg", "vid/premio-puzzles.jpg"];
// al instalar se pide cada archivo al servidor (no a la caché del navegador, que podría dar uno de la versión anterior)
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE.map(u=>new Request(u,{cache:'no-cache'})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('mochila-')&&k!==CACHE&&k!==FONTS).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
// Safari pide los audios por trozos (Range): se sirven desde la caché con respuesta 206.
// Los últimos archivos leídos se guardan en memoria para que cada trozo salga al momento.
const MEM=new Map();
const bytes=(req,r)=>{
  const k=new URL(req.url).pathname;
  if(!MEM.has(k)){MEM.set(k,r.arrayBuffer().catch(e=>{MEM.delete(k);throw e;}));if(MEM.size>16) MEM.delete(MEM.keys().next().value);}
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
      // primero la red (para tener la última versión), pero si la wifi va mal se abre la guardada a los 3,5 s
      // solo la página de la app se sirve desde «index.html» guardado (no un archivo suelto que alguien abra en el navegador)
      const esApp=/\/(index\.html)?$/.test(url.pathname);
      // la página que llega de la red NO se guarda en la caché de esta versión: si fuera de una versión más nueva quedaría
      // mezclada con los dibujos y las voces de la anterior; cada versión trae su página al instalarse (CORE)
      const net=fetch(req);
      if(!esApp){e.respondWith(net.catch(()=>caches.match(req,{ignoreSearch:true,ignoreVary:true}).then(r=>r||Response.error())));return;}
      const cached=()=>caches.match('index.html',{ignoreSearch:true,ignoreVary:true});
      e.respondWith(Promise.race([net.catch(()=>null),new Promise(r=>setTimeout(r,3500,null))]).then(r=>r&&r.ok?r:cached().then(c=>c||r||net)));
      return;
    }
    e.respondWith(caches.match(req,{ignoreSearch:true,ignoreVary:true}).then(r=>r?ranged(req,r):fetch(req).then(res=>{if(res.status===200){const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp));}return res;})));
  } else if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(caches.open(FONTS).then(c=>c.match(req).then(r=>{const f=fetch(req).then(res=>{c.put(req,res.clone());return res;}).catch(()=>r);return r||f;})));
  }
});
