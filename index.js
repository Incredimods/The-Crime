if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/The-Crime/sw.js')
    .then(() => { console.log('Service Worker Registered'); });
