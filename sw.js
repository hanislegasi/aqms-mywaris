// =====================================================================
// Service worker AQMS (PWA)
// - Halaman sentiasa diambil dari rangkaian (data & kod terkini).
// - Hanya bila tiada internet: papar offline.html.
// - Panggilan Firebase/Billplz tidak disentuh langsung.
// =====================================================================
const CACHE = "aqms-v1";
const SIMPAN = ["/offline.html", "/icons/icon-192.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SIMPAN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((kunci) => Promise.all(kunci.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  // Navigasi halaman: rangkaian dahulu, offline.html bila tiada internet
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).catch(() => caches.match("/offline.html")));
    return;
  }
  // Fail kecil untuk halaman luar talian (ikon): rangkaian dahulu, simpanan bila gagal
  const url = new URL(e.request.url);
  if (url.origin === self.location.origin && SIMPAN.includes(url.pathname)) {
    e.respondWith(fetch(e.request).catch(() => caches.match(url.pathname)));
  }
  // Selain itu (Firebase, Billplz, skrip, gambar lain): tidak disentuh
});
