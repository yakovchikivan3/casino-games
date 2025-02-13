self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pwa-cache").then((cache) => {
      return cache.addAll([
        "/index.html",
        "/css/f1c1b11210d202b4.css",
        "/js/3565-1c7f0e52fdb2039f.js",
        "/images/favicon.ico"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// 🔹 Добавляем редирект при запуске PWA с рабочего стола
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(Response.redirect("https://tds.favbet.partners/7016/274?l=106&creative_type=link&creative_id=106"));
  }
});
