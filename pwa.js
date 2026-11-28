// =====================================================================
// PWA: daftar service worker & sokongan butang "Pasang App"
// Elemen dengan atribut data-pasang-app akan dipaparkan bila boleh dipasang.
// =====================================================================
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((e) => console.warn("Service worker gagal:", e));
  });
}

let promptPasang = null;
const sudahDipasang = () =>
  window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
const iOS = /iphone|ipad|ipod/i.test(navigator.userAgent);

function paparButang() {
  document.querySelectorAll("[data-pasang-app]").forEach((el) => {
    const boleh = !sudahDipasang() && (promptPasang || iOS);
    el.classList.toggle("hidden", !boleh);
    if (boleh && !el.classList.contains("block")) el.classList.add("flex");
  });
}

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  promptPasang = e;
  paparButang();
});
window.addEventListener("appinstalled", () => { promptPasang = null; paparButang(); });

document.addEventListener("click", async (e) => {
  const butang = e.target.closest("[data-pasang-app]");
  if (!butang) return;
  e.preventDefault();
  if (promptPasang) {
    promptPasang.prompt();
    await promptPasang.userChoice;
    promptPasang = null;
    paparButang();
  } else if (iOS) {
    alert('Untuk pasang di iPhone/iPad: tekan butang Kongsi (kotak dengan anak panah ke atas) di Safari, kemudian pilih "Tambah ke Skrin Utama".');
  }
});

document.addEventListener("DOMContentLoaded", paparButang);
