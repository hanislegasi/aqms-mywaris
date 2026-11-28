// =====================================================================
// AQM MOBILE — konfigurasi produk & komponen kongsi (dashboard.html, profil.html)
// Paparan ini hanya untuk skrin kecil (< 768px). Desktop tidak berubah.
// =====================================================================

export const PRODUK_M = [
  { kod: "WST", nama: "Wasiat", sub: "wasiat", bayarField: "wasiatPaymentStatus", hargaField: "wasiatPrice", page: "wasiat-page.html", borang: "wasiat.html", dokumen: "preview-wasiat.html", bayar: "payment-wasiat.html", card: "wasiatCard", icon: "wasiatIcon" },
  { kod: "HIB", nama: "Hibah", sub: "hibah", bayarField: "hibahPaymentStatus", hargaField: "hibahPrice", page: "hibah-page.html", borang: "hibah.html", dokumen: "preview-hibah.html", bayar: "payment-hibah.html", card: "hibahCard", icon: "hibahIcon" },
  { kod: "HSP", nama: "Harta Sepencarian", sub: "sepencarian", bayarField: "sepencarianPaymentStatus", hargaField: "sepencarianPrice", page: "sepencarian-page.html", borang: "sepencarian.html", dokumen: "preview-sepencarian.html", bayar: "payment-sepencarian.html", card: "sepencarianCard", icon: "sepencarianIcon" },
  { kod: "MAW", nama: "Mawaris", sub: "mawaris", bayarField: "mawarisPaymentStatus", hargaField: "mawarisPrice", page: "mawaris-page.html", borang: "mawaris.html", dokumen: "preview-mawaris.html", bayar: "payment-mawaris.html", card: "mawarisCard", icon: "mawarisIcon" },
  { kod: "MCO", nama: "Mawaris Korporat", sub: "corporate", bayarField: "corporatePaymentStatus", hargaField: "corporatePrice", page: "corporate-page.html", borang: "corporate.html", dokumen: "preview-corporate.html", bayar: "payment-corporate.html", card: "corporateCard", icon: "corporateIcon" },
  { kod: "MCT", nama: "Mawaris Korporat (Tunggal)", sub: "corporate_tunggal", bayarField: "corporateTunggalPaymentStatus", hargaField: "corporateTunggalPrice", page: "corporate-tunggal-page.html", borang: "corporate-tunggal.html", dokumen: "preview-corporate-tunggal.html", bayar: "payment-corporate-tunggal.html", card: "corporateTunggalCard", icon: "corporateTunggalIcon" },
  { kod: "MCK", nama: "Mawaris Korporat (Kongsi)", sub: "corporate_kongsi", bayarField: "corporateKongsiPaymentStatus", hargaField: "corporateKongsiPrice", page: "corporate-kongsi-page.html", borang: "corporate-kongsi.html", dokumen: "preview-corporate-kongsi.html", bayar: "payment-corporate-kongsi.html", card: "corporateKongsiCard", icon: "corporateKongsiIcon" },
  { kod: "MCZ", nama: "Mawaris Korporat (Wakaf Zurri)", sub: "corporate_zurri", bayarField: "corporateZurriPaymentStatus", hargaField: "corporateZurriPrice", page: "corporate-zurri-page.html", borang: "corporate-zurri.html", dokumen: "preview-corporate-zurri.html", bayar: "payment-corporate-zurri.html", card: "corporateZurriCard", icon: "corporateZurriIcon" }
];

export const LABEL_STATUS = {
  DRAFT: "Draf", DRAFTING: "Draf", UNDER_REVIEW: "Dalam Semakan", PENDING_APPROVAL: "Menunggu Kelulusan",
  PAID: "Telah Dibayar", REJECTED: "Ditolak", APPROVED: "Diluluskan", VERIFIED: "Disahkan Pelanggan",
  PRINTED: "Dicetak", SENT: "Dihantar Kurier", AKAD: "Selesai Akad", STAMPING: "Dalam Pengesahan Mahkamah",
  HANDOVER: "Diserah kepada AQM", RECEIVED: "Selesai (AQM Terima)", COMPLETED: "Selesai"
};
export const labelStatus = (s) => LABEL_STATUS[s] || s || "Draf";
export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const SELEPAS_LULUS = ["APPROVED", "VERIFIED", "PRINTED", "SENT", "AKAD", "STAMPING", "HANDOVER", "RECEIVED", "COMPLETED"];
export const dokumenBoleh = (status) => SELEPAS_LULUS.includes(status);

export function bakiHari(d) {
  if (!d || !d.expiryDate) return null;
  return Math.ceil((new Date(d.expiryDate) - new Date()) / 86400000);
}

// Tindakan yang pelanggan perlu buat untuk satu produk ("" = tiada)
export function tindakanUntuk(d, dibayar) {
  if (!dibayar) return "";
  const baki = bakiHari(d);
  if (baki !== null && baki <= 0) return "Perbaharui keahlian";
  const s = (d.status || "DRAFT").toUpperCase();
  if (s === "DRAFT" || s === "DRAFTING") return "Isi & hantar borang";
  if (s === "REJECTED") return "Betulkan borang (ditolak)";
  if (s === "APPROVED") return "Semak & sahkan dokumen";
  if (s === "SENT" && !d.kurierDiterimaDate) return "Sah terima kurier";
  if (s === "HANDOVER") return "Sah terima dokumen";
  const selepasAkad = ["AKAD", "HANDOVER", "RECEIVED", "COMPLETED"].includes(s);
  if (selepasAkad && d.pengesahanStatus !== "PAID") {
    if (!d.pengesahanMahkamah) return "Pilih pengesahan mahkamah";
    if (d.pengesahanMahkamah === "YA") return "Bayar pengesahan mahkamah";
  }
  if (baki !== null && baki <= 30) return `Keahlian tamat dalam ${baki} hari`;
  return "";
}

const IKON_NAV = {
  utama: "M3 10l9-7 9 7v9a2 2 0 01-2 2h-4v-6H9v6H5a2 2 0 01-2-2v-9z",
  borang: "M15.232 5.232l3.536 3.536M4 20h4L19.5 8.5a2.5 2.5 0 00-3.536-3.536L4.5 16.5 4 20z",
  dokumen: "M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z",
  resit: "M6 3h12v18l-3-2-3 2-3-2-3 2V3zm3 5h6m-6 4h6",
  profil: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
};

// Navigasi bawah (5 tab). pautan.borang / pautan.dokumen = null -> kelabu (tidak aktif)
export function navMobile(aktif, pautan) {
  const tab = [
    { id: "utama", label: "Utama", href: "dashboard.html" },
    { id: "borang", label: "Borang", href: pautan.borang },
    { id: "dokumen", label: "Dokumen", href: pautan.dokumen },
    { id: "resit", label: "Resit", href: "payment-aqm-receipts.html" },
    { id: "profil", label: "Profil", href: "profil.html" }
  ];
  return `
  <nav aria-label="Navigasi utama" class="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 grid grid-cols-5 px-1 pt-1.5" style="padding-bottom: max(10px, env(safe-area-inset-bottom))">
    ${tab.map(t => {
      const svg = `<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${IKON_NAV[t.id]}"></path></svg>`;
      const isi = `${svg}<span class="text-[11px] font-semibold">${t.label}</span>`;
      if (!t.href) {
        return `<span aria-disabled="true" class="flex flex-col items-center gap-1 py-1.5 min-h-[52px] text-gray-300">${isi}</span>`;
      }
      const warna = t.id === aktif ? "text-[#153638]" : "text-gray-500";
      return `<a href="${t.href}" ${t.id === aktif ? 'aria-current="page"' : ""} class="flex flex-col items-center gap-1 py-1.5 min-h-[52px] ${warna}">${isi}</a>`;
    }).join("")}
  </nav>`;
}

// Pautan Borang/Dokumen untuk produk yang dipilih (disimpan supaya halaman Profil guna yang sama)
export function simpanPautanDipilih(pautan) {
  try { localStorage.setItem("aqmPautanMobile", JSON.stringify(pautan)); } catch (e) {}
}
export function bacaPautanDipilih() {
  try { return JSON.parse(localStorage.getItem("aqmPautanMobile")) || { borang: null, dokumen: null }; }
  catch (e) { return { borang: null, dokumen: null }; }
}
