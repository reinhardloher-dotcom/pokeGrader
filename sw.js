const CACHE = 'pokeGrader-v10';
const ASSETS = ['./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys=>
    Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
  ).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e => {
  // Always network for API and HTML (ensures updates are always fresh)
  if(e.request.url.includes('anthropic.com')||e.request.url.includes('ebay')||
     e.request.url.includes('fonts.googleapis')||e.request.url.includes('fonts.gstatic')||
     e.request.mode==='navigate') {
    e.respondWith(fetch(e.request).catch(()=>
      caches.match(e.request).then(c=>c||new Response('Offline',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}}))
    ));
    return;
  }
  // Cache-first for icons/manifest
  e.respondWith(caches.match(e.request).then(cached=>{
    if(cached) return cached;
    return fetch(e.request).then(resp=>{
      if(resp&&resp.status===200&&resp.type==='basic'){
        const clone=resp.clone();
        caches.open(CACHE).then(c=>c.put(e.request,clone));
      }
      return resp;
    }).catch(()=>cached||new Response('Offline',{status:503}));
  }));
});
