const CACHE='jurnal-learn-english-shell-v3';
const ASSETS=['./','./index.html','./css/style.css','./js/app.js','./js/clear-data.js','./manifest.webmanifest','./assets/icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  if(false && e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(async r=>{
      const text=await r.text();
      const patched=text.includes('clear-data.js')?text:text.replace('</body>','<script src="./js/clear-data.js?v=1" defer></script></body>');
      const response=new Response(patched,{status:r.status,statusText:r.statusText,headers:r.headers});
      caches.open(CACHE).then(c=>c.put(e.request,response.clone()));
      return response;
    }).catch(()=>caches.match(e.request)));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{
    const copy=r.clone();
    if(new URL(e.request.url).origin===location.origin)caches.open(CACHE).then(c=>c.put(e.request,copy));
    return r;
  }).catch(()=>cached)));
});