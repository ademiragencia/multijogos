/* Service Worker — Explorador 3D (PWA) */
const CACHE = 'explorador3d-v5';
const ASSETS = [
  './', './index.html', './manifest.webmanifest',
  './vendor/three.min.js',
  './icon-192.png', './icon-512.png', './icon-512-maskable.png',
];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); return r; }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(c => c || fetch(req).then(r => {
    if (r && r.status === 200 && req.url.startsWith(self.location.origin)) { const cp = r.clone(); caches.open(CACHE).then(x => x.put(req, cp)); }
    return r;
  }).catch(() => c)));
});
