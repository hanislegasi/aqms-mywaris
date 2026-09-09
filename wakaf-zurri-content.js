/* ============================================================================
   4) WAKAF ZURRI — DOKUMEN BERASINGAN (SURAT IKATAN WAKAF ZURRI)
   ----------------------------------------------------------------------------
   Dokumen ini SENGAJA dipisahkan daripada Wasiat Korporat & Buy-Sell
   Agreement sebab sifat wakaf berbeza dari segi hukum (ta'bid — kekal
   selama-lamanya, tak boleh ditarik balik/dijual seperti wasiat/buy-sell).

   Customer PILIH SATU sahaja bagi setiap soalan berikut (bukan gabungan):

   A) JENIS KUAT KUASA (data.jenisWakaf)
      - "munjiz"  → berkuat kuasa serta-merta semasa hayat, TIDAK tertakluk
                     had 1/3, TIDAK boleh ditarik balik.
      - "muallaq" → berkuat kuasa selepas kematian, dianggap wasiat dari segi
                     hukum, MAKA tertakluk had 1/3 & persetujuan waris.

   B) JENIS HARTA WAKAF (data.jenisHartaWakaf)
      - "ain"     → saham itu sendiri diwakafkan (beku selama-lamanya, MAIN
                     jadi pemegang amanah rasmi saham).
      - "manfaah" → hanya hasil/dividen saham diwakafkan; saham itu sendiri
                     kekal boleh diurus/dijual seperti biasa (contoh: masih
                     boleh gunakan Buy-Sell Agreement di atas saham yang sama).

   Penamaan Nazir (Fasal 3) dipaparkan SENTIASA — tidak bergantung kepada A/B.
   ============================================================================ */

// ----------------------------------------------------------------------------
// 4.1) Metadata penerangan untuk paparan UI semasa customer membuat pilihan
//      (papar terus dalam borang/app anda — bukan sebahagian dokumen sah)
// ----------------------------------------------------------------------------
const wakafZurriOptionsMeta = {
    jenisWakaf: [
        {
            value: 'munjiz',
            label: 'Wakaf Serta-Merta (Munjiz)',
            penerangan:
                'Wakaf berkuat kuasa sebaik sahaja dokumen ini ditandatangani, semasa anda masih hidup. ' +
                'Harta terus keluar daripada milik peribadi anda dari tarikh itu. TIDAK tertakluk had 1/3 pusaka ' +
                '(sebab bukan wasiat) dan TIDAK boleh ditarik balik. Sesuai jika anda mahu kepastian penuh ' +
                'sekarang dan tidak perlukan persetujuan waris kelak.',
        },
        {
            value: 'muallaq',
            label: 'Wakaf Selepas Kematian (Mu\u2019allaq)',
            penerangan:
                'Wakaf hanya berkuat kuasa selepas anda meninggal dunia. Dari segi hukum ia dianggap sebagai ' +
                'wasiat, maka TERTAKLUK had satu pertiga (1/3) nilai bersih pusaka anda dan memerlukan ' +
                'persetujuan waris-waris yang sah jika penerima manfaat turut layak menerima Faraid. Sesuai jika ' +
                'anda mahu terus mengawal/menikmati harta tersebut semasa hayat.',
        },
    ],
    jenisHartaWakaf: [
        {
            value: 'ain',
            label: 'Wakaf Saham Penuh (\u2018Ain)',
            penerangan:
                'Saham syarikat itu sendiri menjadi harta wakaf dan dibekukan selama-lamanya — tidak boleh dijual, ' +
                'digadai atau dilupuskan (melainkan proses istibdal diluluskan MAIN). Majlis Agama Islam Negeri ' +
                'menjadi pemegang amanah rasmi ke atas saham tersebut. PERHATIAN: jika syarikat anda turut ada ' +
                'Perjanjian Beli-Jual Saham (Buy-Sell Agreement) ke atas saham yang SAMA, pilihan ini akan ' +
                'bercanggah dengan kewajipan jual-beli dalam perjanjian tersebut.',
        },
        {
            value: 'manfaah',
            label: 'Wakaf Hasil/Dividen Sahaja (Manfaah)',
            penerangan:
                'Saham syarikat KEKAL boleh diurus, dipindah milik atau dijual seperti biasa (termasuk di bawah ' +
                'Perjanjian Beli-Jual Saham jika ada). Hanya hasil/dividen yang terjana daripada saham tersebut ' +
                'disalurkan kepada zurriah anda selama-lamanya sebagai wakaf. Pilihan ini serasi sepenuhnya dengan ' +
                'Buy-Sell Agreement dan disyorkan bagi syarikat yang mempunyai lebih daripada seorang pemegang saham.',
        },
    ],
};

// ----------------------------------------------------------------------------
// 4.2) Templat induk — placeholder {{FASAL_JENIS_WAKAF}} & {{FASAL_JENIS_HARTA}}
//      diisi secara bersyarat oleh generateWakafZurri() mengikut pilihan customer
// ----------------------------------------------------------------------------
const wakafZurriContent = `

<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:15px; line-height:1.6; text-align:justify; color:#222;">

<h2 style="font-size:26px; font-weight:bold; text-align:center; margin-bottom:5px; color:#153638;">
SURAT IKATAN WAKAF ZURRI
</h2>
<p style="text-align:center; margin-bottom:20px; font-style:italic; font-size:16px;">
(Corporate Family Waqf Deed)
</p>

<div style="text-align:center; font-size:26px; margin-bottom:20px; font-family:'Amiri', serif;">
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
</div>


// --- (Sambung terus dengan sisa kod template awak di bawah ini) ---

<p>
Dengan ini saya, <strong>{{NAMA_WAQIF}}</strong> (No. K/P: <strong>{{NO_IC_WAQIF}}</strong>), beralamat di <strong>{{ALAMAT_WAQIF}}</strong>, selepas ini dirujuk sebagai "Waqif", dengan penuh kerelaan, akal yang waras dan tanpa sebarang paksaan, mengikrarkan wakaf ini (<em>sighah</em>) ke atas harta yang dinyatakan di bawah, bagi manfaat zurriah (keturunan) saya, semata-mata kerana Allah S.W.T.
</p>

<h3 style="margin-top:30px; margin-bottom:12px; font-weight:bold;">FASAL 1: HARTA YANG DIWAKAFKAN (MAWQUF)</h3>
<p style="margin-bottom:8px;">
•&nbsp;&nbsp;Nama Syarikat: <strong>{{NAMA_SYARIKAT}}</strong><br>
•&nbsp;&nbsp;No. Pendaftaran Syarikat (SSM): <strong>{{NO_SSM}}</strong>
</p>

{{FASAL_JENIS_HARTA}}

<h3 style="margin-top:30px; margin-bottom:12px; font-weight:bold;">FASAL 2: SIFAT DAN KUAT KUASA WAKAF</h3>

{{FASAL_JENIS_WAKAF}}

<div class="pdf-footer"><span class="footer-docref"></span><span class="page-number"></span></div>
</div>

<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:15px; line-height:1.6; text-align:justify; color:#222;">

<h3 style="margin-top:20px; margin-bottom:12px; font-weight:bold;">FASAL 3: CADANGAN NAZIR (PENGURUS HARIAN MAWQUF)</h3>
<table width="100%" style="border-collapse:collapse;">
<tr valign="top">
<td width="30">3.1</td>
<td style="padding-bottom:10px;">
Saya mencadangkan <strong>{{NAMA_NAZIR}}</strong> (No. K/P: <strong>{{NO_IC_NAZIR}}</strong>), beralamat di <strong>{{ALAMAT_NAZIR}}</strong>, sebagai Nazir/Pengurus Harian bagi mawquf ini, bertanggungjawab menguruskan hal ehwal harian (termasuk mewakili dalam mesyuarat syarikat, jika berkaitan) dan memastikan hasil/manfaat wakaf disalurkan kepada zurriah yang layak.
</td>
</tr>
<tr valign="top">
<td width="30">3.2</td>
<td style="padding-bottom:10px;">
Pelantikan Nazir ini adalah <strong>cadangan sahaja</strong> dan tertakluk sepenuhnya kepada kelulusan bertulis Majlis Agama Islam Negeri <strong>{{NEGERI_MAIN}}</strong> ("Majlis") sebagai pemegang amanah tunggal yang sah di sisi undang-undang. Majlis berhak menolak, mengganti, atau melantik Nazir lain mengikut budi bicara dan enakmen yang terpakai.
</td>
</tr>
<tr valign="top">
<td width="30">3.3</td>
<td style="padding-bottom:10px;">
Nazir hendaklah menyediakan penyata akaun tahunan berkaitan hasil/manfaat mawquf kepada Majlis dan zurriah yang berkenaan, bagi memastikan ketelusan pentadbiran.
</td>
</tr>
</table>

<h3 style="margin-top:30px; margin-bottom:12px; font-weight:bold;">FASAL 4: SENARAI ZURRIAH (PENERIMA MANFAAT)</h3>
<p style="margin-bottom:10px;">Manfaat wakaf ini hendaklah disalurkan kepada zurriah saya seperti berikut, dan seterusnya secara turun-temurun mengikut generasi:</p>
{{JADUAL_ZURRIAH}}

<h3 style="margin-top:30px; margin-bottom:12px; font-weight:bold;">FASAL 5: PERUNTUKAN SEKIRANYA ZURRIAH PUPUS</h3>
<p style="margin-bottom:15px;">
Sekiranya pada suatu masa zurriah yang dinamakan dan keturunan mereka pupus sepenuhnya (tiada lagi zuriat yang hidup), manfaat wakaf ini hendaklah beralih sepenuhnya kepada wakaf khairi (kebajikan am) di bawah pentadbiran Majlis Agama Islam Negeri {{NEGERI_MAIN}}, untuk disalurkan mengikut budi bicara Majlis bagi maslahah ummah.
</p>

<h3 style="margin-top:30px; margin-bottom:12px; font-weight:bold;">FASAL 6: PENGAKUAN TERTAKLUK KEPADA MAJLIS AGAMA ISLAM NEGERI</h3>
<table width="100%" style="border-collapse:collapse;">
<tr valign="top">
<td width="30">6.1</td>
<td style="padding-bottom:10px;">
Saya mengakui bahawa wakaf ini, sebaik sahaja didaftarkan, adalah tertakluk sepenuhnya kepada pentadbiran Majlis Agama Islam Negeri {{NEGERI_MAIN}} sebagai pemegang amanah tunggal yang sah di sisi Enakmen Wakaf/Enakmen Pentadbiran Agama Islam Negeri {{NEGERI_MAIN}} yang terpakai.
</td>
</tr>
<tr valign="top">
<td width="30">6.2</td>
<td style="padding-bottom:10px;">
Permohonan pendaftaran rasmi Surat Ikatan Wakaf ini hendaklah dikemukakan oleh Nazir dan/atau waris kepada Majlis dalam tempoh munasabah selepas penyempurnaan dokumen ini, dan wakaf ini hanya lengkap serta boleh dikuatkuasakan sepenuhnya selepas pendaftaran rasmi oleh Majlis.
</td>
</tr>
<tr valign="top">
<td width="30">6.3</td>
<td style="padding-bottom:10px;">
Wakaf ini adalah <em>ta'bid</em> (kekal selama-lamanya) dan tidak boleh ditarik balik, dijual, digadai atau dilupuskan kecuali melalui proses istibdal yang diluluskan secara bertulis oleh Majlis mengikut undang-undang yang terpakai.
</td>
</tr>
</table>

<h3 style="margin-top:30px; margin-bottom:12px; font-weight:bold;">FASAL 7: KEBOLEHASINGAN</h3>
<p style="margin-bottom:30px;">
Sekiranya mana-mana fasal di dalam Surat Ikatan ini didapati tidak sah atau tidak berkuat kuasa oleh mana-mana pihak berkuasa yang berwibawa, fasal tersebut hendaklah diasingkan dan fasal-fasal lain yang selebihnya hendaklah kekal berkuat kuasa sepenuhnya.
</p>

<div class="pdf-footer"><span class="footer-docref"></span><span class="page-number"></span></div>
</div>

<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:15px; line-height:1.6; text-align:justify; color:#222;">

<p style="margin-bottom:30px;">PADA MENYAKSIKAN HAL DI ATAS, saya telah menurunkan tandatangan pada tarikh yang tertulis di bawah.</p>

<table style="width:100%; margin-bottom:50px; border-collapse:collapse;">
<tr valign="top">
<td width="45%">
<p style="font-weight:bold; margin-bottom:50px;">DITANDATANGANI OLEH WAQIF:</p>
<p>..................................................</p>
<p style="margin-top:5px;"><strong>{{NAMA_WAQIF}}</strong></p>
<p>No. K/P: {{NO_IC_WAQIF}}</p>
<p>Tarikh: ______________</p>
</td>
<td width="10%"></td>
<td width="45%">
<p style="font-weight:bold; margin-bottom:50px;">Di hadapan (Saksi 1):</p>
<p>Tandatangan : ............................................</p>
<p style="margin-top:5px;">Nama Saksi : </p>
<p>No. K/P &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
</td>
</tr>
</table>

<table style="width:100%; margin-bottom:30px; border-collapse:collapse;">
<tr valign="top">
<td width="45%">
<p style="font-weight:bold; margin-bottom:50px;">Nazir Dicadangkan (Pengesahan Terima):</p>
<p>..................................................</p>
<p style="margin-top:5px;"><strong>{{NAMA_NAZIR}}</strong></p>
<p>No. K/P: {{NO_IC_NAZIR}}</p>
</td>
<td width="10%"></td>
<td width="45%">
<p style="font-weight:bold; margin-bottom:50px;">Di hadapan (Saksi 2):</p>
<p>Tandatangan : ............................................</p>
<p style="margin-top:5px;">Nama Saksi : </p>
<p>No. K/P &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
</td>
</tr>
</table>

<p style="margin-top:20px; font-size:12px; font-style:italic; color:#555;">
Dokumen ini dijana melalui sistem eWasiat/AQMS berdasarkan maklumat yang dimasukkan oleh pengguna. Surat Ikatan ini WAJIB dikemukakan kepada Majlis Agama Islam Negeri {{NEGERI_MAIN}} untuk pendaftaran rasmi, dan dinasihatkan supaya disemak oleh Peguam Syarie bertauliah sebelum diserahkan.
</p>

<div class="pdf-footer"><span class="footer-docref"></span><span class="page-number"></span></div>
</div>
`;

// ----------------------------------------------------------------------------
// 4.3) Sub-klausa bersyarat: JENIS HARTA WAKAF ('ain / manfaah)
// ----------------------------------------------------------------------------
const hartaAinClauseTemplate = `
<table width="100%" style="border-collapse:collapse;">
<tr valign="top">
<td width="30">1.1</td>
<td style="padding-bottom:10px;">
Wakaf ini adalah <strong>Wakaf 'Ain</strong> — iaitu <strong>{{BILANGAN_SAHAM_WAKAF}} unit saham</strong> (daripada jumlah keseluruhan {{JUMLAH_SAHAM}} unit) di dalam Syarikat itu sendiri menjadi harta wakaf (<em>mawquf</em>), dibekukan selama-lamanya dan TIDAK boleh dijual, digadai, dipindah milik atau dilupuskan melainkan melalui proses istibdal yang diluluskan secara bertulis oleh Majlis Agama Islam Negeri {{NEGERI_MAIN}}.
</td>
</tr>
<tr valign="top">
<td width="30">1.2</td>
<td style="padding-bottom:10px;">
Saya mengakui bahawa saham yang diwakafkan di bawah Fasal ini adalah TERKECUALI dan tidak boleh menjadi subjek mana-mana Perjanjian Beli-Jual Saham (Buy-Sell Agreement) yang sedia ada atau akan wujud di dalam Syarikat, kecuali dinyatakan secara jelas sebaliknya.
</td>
</tr>
</table>
`;

const hartaManfaahClauseTemplate = `
<table width="100%" style="border-collapse:collapse;">
<tr valign="top">
<td width="30">1.1</td>
<td style="padding-bottom:10px;">
Wakaf ini adalah <strong>Wakaf Manfaah</strong> — iaitu BUKAN saham itu sendiri, tetapi <strong>hasil/dividen</strong> yang terjana daripada <strong>{{BILANGAN_SAHAM_WAKAF}} unit saham</strong> (daripada jumlah keseluruhan {{JUMLAH_SAHAM}} unit) di dalam Syarikat, yang menjadi harta wakaf.
</td>
</tr>
<tr valign="top">
<td width="30">1.2</td>
<td style="padding-bottom:10px;">
Saham itu sendiri KEKAL boleh diurus, dipindah milik atau dijual seperti biasa mengikut Perlembagaan Syarikat dan/atau mana-mana Perjanjian Beli-Jual Saham yang berkuat kuasa di dalam Syarikat. Kewajipan wakaf di bawah dokumen ini hanya terpakai ke atas dividen/hasil yang benar-benar diisytiharkan dan dibayar berkaitan saham tersebut, dari semasa ke semasa.
</td>
</tr>
<tr valign="top">
<td width="30">1.3</td>
<td style="padding-bottom:10px;">
Sekiranya saham tersebut dijual/dipindah milik di bawah mana-mana Perjanjian Beli-Jual Saham, kewajipan wakaf manfaah ini hendaklah berterusan ke atas hasil pelaburan semula (jika ada) daripada hasil jualan tersebut, tertakluk kepada arahan lanjut Nazir dan kelulusan Majlis.
</td>
</tr>
</table>
`;

// ----------------------------------------------------------------------------
// 4.4) Sub-klausa bersyarat: JENIS KUAT KUASA (munjiz / mu'allaq)
// ----------------------------------------------------------------------------
const wakafMunjizClauseTemplate = `
<table width="100%" style="border-collapse:collapse;">
<tr valign="top">
<td width="30">2.1</td>
<td style="padding-bottom:10px;">
Wakaf ini adalah <strong>Wakaf Munjiz</strong> (serta-merta) dan berkuat kuasa <strong>SEBAIK SAHAJA</strong> dokumen ini ditandatangani dan disempurnakan (<em>sighah</em> dan <em>qabd</em> dipenuhi), semasa saya masih hidup dan sedar.
</td>
</tr>
<tr valign="top">
<td width="30">2.2</td>
<td style="padding-bottom:10px;">
Oleh sebab wakaf ini adalah pemberian semasa hayat dan bukan wasiat, ia <strong>TIDAK tertakluk</strong> kepada had satu pertiga (1/3) pusaka dan <strong>TIDAK memerlukan</strong> persetujuan waris-waris saya.
</td>
</tr>
<tr valign="top">
<td width="30">2.3</td>
<td style="padding-bottom:10px;">
Wakaf ini adalah <strong>muktamad dan tidak boleh ditarik balik</strong> oleh saya atau mana-mana pihak selepas disempurnakan.
</td>
</tr>
</table>
`;

const wakafMuallaqClauseTemplate = `
<table width="100%" style="border-collapse:collapse;">
<tr valign="top">
<td width="30">2.1</td>
<td style="padding-bottom:10px;">
Wakaf ini adalah <strong>Wakaf Mu'allaq bi al-Maut</strong> (bersyarat kematian) dan hanya berkuat kuasa <strong>SELEPAS SAYA MENINGGAL DUNIA</strong>. Semasa hayat saya, harta yang dinyatakan di Fasal 1 kekal di bawah kawalan dan hak milik saya sepenuhnya.
</td>
</tr>
<tr valign="top">
<td width="30">2.2</td>
<td style="padding-bottom:10px;">
Oleh sebab wakaf ini berkuat kuasa selepas kematian, ia dianggap sebagai wasiat dari segi hukum, maka <strong>TERTAKLUK</strong> kepada had satu pertiga (1/3) daripada nilai bersih pusaka saya, dan sekiranya penerima manfaat adalah waris yang layak Faraid, tertakluk kepada persetujuan waris-waris lain selepas kematian saya, selaras prinsip <em>"la wasiyyata li-warith"</em>.
</td>
</tr>
<tr valign="top">
<td width="30">2.3</td>
<td style="padding-bottom:10px;">
Fasal ini hendaklah dibaca bersama-sama peruntukan had wasiat dan Faraid di dalam Wasiat Korporat saya (jika ada), dan Wasi/Pentadbir saya hendaklah menguatkuasakan wakaf ini tertakluk kepada peruntukan tersebut.
</td>
</tr>
</table>
`;

// ----------------------------------------------------------------------------
// 4.5) Fungsi bina jadual zurriah (HTML table) daripada senarai data
// ----------------------------------------------------------------------------
function buildJadualZurriah(senaraiZurriah = []) {
  if (!senaraiZurriah.length) {
    return '<p style="font-style:italic;">(Senarai zurriah belum diisi — sila lengkapkan sebelum pendaftaran.)</p>';
  }
  const rows = senaraiZurriah.map((z, i) => `
    <tr>
      <td style="border:1px solid #999; padding:6px;">${i + 1}</td>
      <td style="border:1px solid #999; padding:6px;">${z.nama || ''}</td>
      <td style="border:1px solid #999; padding:6px;">${z.hubungan || ''}</td>
      <td style="border:1px solid #999; padding:6px;">${z.generasi || ''}</td>
    </tr>`).join('');

  return `
  <table width="100%" style="border-collapse:collapse; margin-bottom:15px;">
    <tr>
      <th style="border:1px solid #999; padding:6px; background:#1F4E5F; color:#fff;">Bil.</th>
      <th style="border:1px solid #999; padding:6px; background:#1F4E5F; color:#fff;">Nama</th>
      <th style="border:1px solid #999; padding:6px; background:#1F4E5F; color:#fff;">Hubungan dengan Waqif</th>
      <th style="border:1px solid #999; padding:6px; background:#1F4E5F; color:#fff;">Generasi</th>
    </tr>
    ${rows}
  </table>`;
}

// ----------------------------------------------------------------------------
// 4.6) Generator utama
// ----------------------------------------------------------------------------
/**
 * Jana Surat Ikatan Wakaf Zurri lengkap mengikut pilihan customer.
 *
 * @param {Object} data
 * @param {'munjiz'|'muallaq'} data.jenisWakaf          - WAJIB
 * @param {'ain'|'manfaah'}    data.jenisHartaWakaf      - WAJIB
 * @param {string} data.namaWaqif, data.noIcWaqif, data.alamatWaqif
 * @param {string} data.namaSyarikat, data.noSsm
 * @param {number} data.bilanganSahamWakaf, data.jumlahSaham
 * @param {string} data.negeriMAIN                       - cth "Perak"
 * @param {Object} data.nazir - { nama, noIc, alamat }
 * @param {Array}  data.senaraiZurriah - [{ nama, hubungan, generasi }]
 */
function generateWakafZurri(data = {}) {
  if (!data.jenisWakaf || !['munjiz', 'muallaq'].includes(data.jenisWakaf)) {
    throw new Error('generateWakafZurri: data.jenisWakaf wajib "munjiz" atau "muallaq"');
  }
  if (!data.jenisHartaWakaf || !['ain', 'manfaah'].includes(data.jenisHartaWakaf)) {
    throw new Error('generateWakafZurri: data.jenisHartaWakaf wajib "ain" atau "manfaah"');
  }

  let output = wakafZurriContent;

  // -- Fasal jenis harta (ain / manfaah) --
  const hartaTemplate = data.jenisHartaWakaf === 'ain' ? hartaAinClauseTemplate : hartaManfaahClauseTemplate;
  const fasalHarta = hartaTemplate
    .replace(/{{BILANGAN_SAHAM_WAKAF}}/g, data.bilanganSahamWakaf || '________')
    .replace(/{{JUMLAH_SAHAM}}/g, data.jumlahSaham || '________')
    .replace(/{{NEGERI_MAIN}}/g, data.negeriMAIN || '________________');
  output = output.replace('{{FASAL_JENIS_HARTA}}', fasalHarta);

  // -- Fasal jenis kuat kuasa (munjiz / mu'allaq) --
  const jenisTemplate = data.jenisWakaf === 'munjiz' ? wakafMunjizClauseTemplate : wakafMuallaqClauseTemplate;
  output = output.replace('{{FASAL_JENIS_WAKAF}}', jenisTemplate);

  // -- Jadual zurriah --
  output = output.replace('{{JADUAL_ZURRIAH}}', buildJadualZurriah(data.senaraiZurriah));

  // -- Placeholder am --
  output = output
    .replace(/{{NAMA_WAQIF}}/g, data.namaWaqif || '________________')
    .replace(/{{NO_IC_WAQIF}}/g, data.noIcWaqif || '________________')
    .replace(/{{ALAMAT_WAQIF}}/g, data.alamatWaqif || '________________')
    .replace(/{{NAMA_SYARIKAT}}/g, data.namaSyarikat || '________________')
    .replace(/{{NO_SSM}}/g, data.noSsm || '________________')
    .replace(/{{NEGERI_MAIN}}/g, data.negeriMAIN || '________________')
    .replace(/{{NAMA_NAZIR}}/g, data.nazir?.nama || '________________')
    .replace(/{{NO_IC_NAZIR}}/g, data.nazir?.noIc || '________________')
    .replace(/{{ALAMAT_NAZIR}}/g, data.nazir?.alamat || '________________');

  return output;
}

// ----------------------------------------------------------------------------
// 4.7) Semakan keserasian silang-dokumen (Wakaf 'Ain vs Buy-Sell Agreement)
// ----------------------------------------------------------------------------
/**
 * Panggil fungsi ini di peringkat aplikasi (bukan dalam dokumen) SEBELUM
 * membenarkan customer generate kedua-dua dokumen atas syarikat yang sama.
 *
 * @param {Object} profil
 * @param {boolean} profil.adaBuySellAgreement
 * @param {'ain'|'manfaah'|null} profil.jenisHartaWakafZurri
 * @returns {{ ok: boolean, mesej: string|null }}
 */
function semakKeserasianWakafBuySell(profil = {}) {
  if (profil.adaBuySellAgreement && profil.jenisHartaWakafZurri === 'ain') {
    return {
      ok: false,
      mesej:
        'Wakaf \u2018Ain (saham penuh) tidak boleh wujud bersama Perjanjian Beli-Jual Saham ke atas saham yang ' +
        'sama, kerana saham yang diwakafkan dibekukan selama-lamanya dan tidak boleh dijual. Sila pilih ' +
        'Wakaf Manfaah (hasil/dividen sahaja), atau asingkan peratusan saham yang terlibat dalam setiap ' +
        'instrumen sebelum meneruskan.',
    };
  }
  return { ok: true, mesej: null };
}

// EXPORT UNTUK KEGUNAAN BROWSER FRONTEND
if (typeof window !== 'undefined') {
    window.wakafZurriContent = wakafZurriContent;
    window.wakafZurriOptionsMeta = wakafZurriOptionsMeta;
    window.generateWakafZurri = generateWakafZurri;
    window.semakKeserasianWakafBuySell = semakKeserasianWakafBuySell;
}

// EXPORT UNTUK KEGUNAAN NODE.JS BACKEND (Sekiranya diperlukan kelak)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        wakafZurriContent,
        wakafZurriOptionsMeta,
        generateWakafZurri,
        semakKeserasianWakafBuySell
    };
}
