// Guarda la app en el dispositivo para que funcione sin conexión.
const CACHE='mochila-d58c54e418', FONTS='mochila-fonts';
const CORE=["./", "index.html", "manifest.webmanifest", "img/arte-happy.png", "img/arte-think.png", "img/arte-wave.png", "img/ciguena.png", "img/explora-happy.png", "img/explora-look.png", "img/explora-wave.png", "img/i-arpa.png", "img/i-castanuelas.png", "img/i-clarinete.png", "img/i-flauta.png", "img/i-guitarra.png", "img/i-maracas.png", "img/i-pandereta.png", "img/i-saxofon.png", "img/i-tambor.png", "img/i-triangulo.png", "img/i-trompeta.png", "img/i-violin.png", "img/ingles.png", "img/lectura.png", "img/lengua.png", "img/lince.png", "img/mapa.jpg", "img/mates.png", "img/mochi-happy.png", "img/mochi-read.png", "img/mochi-think.png", "img/mochi-wave.png", "voz/animales.mp4", "voz/arte.mp4", "voz/cuentos.mp4", "voz/en.mp4", "voz/fra.mp4", "voz/num.mp4", "voz/pal.mp4", "voz/pre.mp4", "voz/pro.mp4", "voz/sonidos.mp4", "voz/ui.mp4", "img/icon-180.png", "img/icon-192.png", "img/icon-512.png", "img/icon-maskable-512.png", "vid/premio-arte.jpg", "vid/premio-cono.jpg", "vid/premio-ingles.jpg", "vid/premio-lectura.jpg", "vid/premio-lengua.jpg", "vid/premio-mates.jpg"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!==FONTS).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin===location.origin){
    if(url.pathname.endsWith('.mp4')&&url.pathname.includes('/vid/')) return;
    if(req.mode==='navigate'){
      e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put('index.html',cp));return r;}).catch(()=>caches.match('index.html',{ignoreSearch:true})));
      return;
    }
    e.respondWith(caches.match(req,{ignoreSearch:true}).then(r=>r||fetch(req).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp));}return res;})));
  } else if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(caches.open(FONTS).then(c=>c.match(req).then(r=>{const f=fetch(req).then(res=>{c.put(req,res.clone());return res;}).catch(()=>r);return r||f;})));
  }
});
