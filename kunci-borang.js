// =====================================================================
// Kunci butang borang ikut status permohonan (selaras dengan Firestore rules 6C)
// Guna: <script type="module" src="kunci-borang.js?produk=mawaris&mode=borang"></script>
//   mode=borang : butang Simpan/Hantar borang
//   mode=hantar : butang "Hantar Permohonan" di halaman pratonton draf
// =====================================================================
import { db, auth } from './firebase.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const param = new URL(import.meta.url).searchParams;
const produk = param.get("produk");
const mode = param.get("mode") || "borang";

// Status yang membenarkan pelanggan edit borang / hantar permohonan
const BOLEH_EDIT = ["", "DRAFT", "DRAFTING", "REJECTED", "APPROVED", "HANDOVER", "RECEIVED"];
const BOLEH_HANTAR = ["", "DRAFT", "DRAFTING", "REJECTED"];

function mesejStatus(status) {
    if (["UNDER_REVIEW", "PENDING_APPROVAL", "PAID"].includes(status))
        return "Permohonan anda sedang disemak oleh admin. Borang tidak boleh diubah atau dihantar semula buat masa ini.";
    if (status === "APPROVED")
        return "Dokumen anda telah diluluskan. Sila semak dan sahkan dokumen di halaman dokumen anda (tidak perlu hantar semula).";
    if (["HANDOVER", "RECEIVED"].includes(status))
        return "Dokumen telah diserahkan kepada anda. Anda boleh kemas kini borang dan mencetak sendiri; tidak perlu hantar semula.";
    return `Dokumen anda sedang diproses (status: ${status}). Borang dikunci sehingga proses selesai.`;
}

function papar(teks, sebelumEl) {
    const kotak = document.createElement("div");
    kotak.className = "mb-4 p-4 rounded-xl border border-amber-300 bg-amber-50 text-amber-800 text-sm font-semibold";
    kotak.textContent = teks;
    if (sebelumEl && sebelumEl.parentNode) sebelumEl.parentNode.insertBefore(kotak, sebelumEl);
    else document.body.prepend(kotak);
}

function lumpuhkan(btn) {
    if (!btn) return;
    btn.disabled = true;
    btn.classList.add("opacity-50", "cursor-not-allowed");
    btn.title = "Dikunci ikut status permohonan";
}

onAuthStateChanged(auth, async (user) => {
    if (!user || !produk) return;
    let status = "";
    try {
        const snap = await getDoc(doc(db, "users", user.uid, produk, "maklumat"));
        status = snap.exists() ? String(snap.data().status || "").toUpperCase() : "";
    } catch (e) { return; }

    if (mode === "hantar") {
        if (BOLEH_HANTAR.includes(status)) return;
        const btn = document.getElementById("submitBtn");
        lumpuhkan(btn);
        papar(mesejStatus(status), btn);
        return;
    }

    // mode borang
    if (BOLEH_EDIT.includes(status)) return;
    const form = document.querySelector("form");
    if (!form) return;
    form.querySelectorAll('button[type="submit"], #submitBtn, #uploadBtn').forEach(lumpuhkan);
    // Halang hantar melalui kekunci Enter
    form.addEventListener("submit", (e) => { e.preventDefault(); e.stopImmediatePropagation(); }, true);
    papar(mesejStatus(status), form);
});
