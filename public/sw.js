self.addEventListener('install', e => {
    e.waitUntil(
      caches.open("gravitalia").then(cache => {
        return cache.addAll([
            '/favicon.webp',
            '/sw.js'
        ])
      .then(() => self.skipWaiting());
      })
    );
  });
  
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});
  
self.addEventListener('fetch', event => {
    event.respondWith(
      caches.open("gravitalia")
        .then(cache => cache.match(event.request, {ignoreSearch: true}))
        .then(response => {
        return response || fetch(event.request);
      })
    );
});