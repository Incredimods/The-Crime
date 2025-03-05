self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      'asset-v1/splash/homescreen.jpg',
      'asset-v1/splash/homescreen-hd.jpg',
      'asset-v1/splash/big-homescreen.jpg',
      'asset-v1/splash/big-homescreen-hd.jpg',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '/The-Crime/index.html',
      '/The-Crime/app.html',
      '/The-Crime/asset-v1/app.js',
      '/The-Crime/js/index.min.js',
      '/The-Crime/js/main.min.js',
      '/The-Crime/css/style.min.css',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
