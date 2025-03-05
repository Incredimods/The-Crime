self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/The-Crime/index.html/',
      '/The-Crime/app.html',
      '/The-Crime/asset-v1/app.js',
      '/pwa-examples/a2hs/style.css',
      '/pwa-examples/a2hs/images/fox1.jpg',
      '/pwa-examples/a2hs/images/fox2.jpg',
      '/pwa-examples/a2hs/images/fox3.jpg',
      '/pwa-examples/a2hs/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
