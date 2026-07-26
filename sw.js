// Service worker minimal - necesar ca Chrome/Edge sa ofere optiunea
// "Instaleaza aplicatia". Nu face caching agresiv, ca datele din
// PocketBase sa fie mereu proaspete; doar activeaza modul "aplicatie".

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Handler minimal, obligatoriu ca sa fie considerat un service worker
// "valid" de catre browser (nu intercepteaza si nu cacheaza nimic).
self.addEventListener("fetch", (event) => {
  // las cererea sa mearga normal la retea, fara caching
});
