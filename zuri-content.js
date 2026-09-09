/* ============================================================================
   TEMPLAT GABUNGAN — WASIAT KORPORAT & PERJANJIAN BELI-JUAL SAHAM
   Digabungkan daripada templat asal (struktur & placeholder anda dikekalkan
   100%) + fasal tambahan patuh Syariah (had 1/3, hibah, zakat, ROFR,
   struktur belian, Ta'widh, timbang tara, force majeure, kebolehasingan).

   NOTA: Semua {{PLACEHOLDER}} sedia ada dikekalkan tanpa diubah supaya
   logik replace() / render dalam sistem eWasiat anda tidak terjejas.
   Fasal baharu diberi label "X A/B/C" supaya tidak menconflict dengan
   penomboran fasal dinamik sedia ada (Fasal 3 & 4 yang diisi oleh app anda).
   ============================================================================ */


/* ============================================================================
   1) WASIAT KORPORAT
   ============================================================================ */
const wasiatCorporateContent = `

<div class="a4-page p-[18mm]">

<h2
style="
font-family:'Times New Roman', serif;
font-size:30px;
font-weight:700;
margin-top:0;
margin-bottom:20px;
color:#153638;
text-align:center;
letter-spacing:1px;
">
DOKUMEN WASIAT KORPORAT
</h2>

<div
style="
text-align:center;
font-size:30px;
margin-bottom:10px;
font-family:'Amiri', serif;
">
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
</div>

<div
style="
font-family:'Times New Roman', serif;
font-size:15px;
line-height:1.6;
text-align:justify;
color:#222;
">

<p style="text-align:center; margin-bottom:20px;">
<strong>Dengan Nama Allah yang Maha Pemurah Lagi Mengasihani</strong>
</p>

<p>
Segala puji bagi Allah S.W.T yang kekal selamanya. Tiada tuhan melainkan Allah S.W.T, Nabi Muhammad S.A.W itu adalah pesuruh Allah. Kematian adalah benar, kebangkitan semula adalah benar, semua yang disampaikan oleh Rasulullah S.A.W (semoga kesejahteraan dan rahmat Allah S.W.T dilimpahkan terhadapnya, keluarganya, para sahabat dan pengikut-pengikut) adalah benar, tiada keraguan bahawa Hari Penghakiman akan tiba dan Allah S.W.T, akan membangkitkan semua yang di dalam kubur.
</p>

<p>
Ini adalah Dokumen Pewarisan Lengkap bagi diri saya <strong>{{NAMA_PEWASIAT}}</strong>, No. K/P <strong>{{NO_IC_PEWASIAT}}</strong> yang beralamat di <strong>{{ALAMAT_PEWASIAT}}</strong> yang dibuat dengan kerelaan hati tanpa sebarang paksaan daripada mana-mana pihak.
</p>

<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>PENGISYTIHARAN KEADAAN DIRI</strong>
</h3>

<p>
Dengan disaksikan oleh saksi-saksi yang bertandatangan dibawah, saya mengakui bahawa saya adalah seorang Islam yang cukup umur, berada di dalam keadaan sihat tubuh badan dan waras akal fikiran dengan tanpa sebarang paksaan. Saya juga mengakui bahawa saya memahami sepenuhnya bentuk dokumen ini serta akibat yang mungkin berbangkit darinya. Maka saya dengan ini menyempurnakan dokumen ini semata-mata kerana Allah SWT, semoga Allah SWT mengampuni saya.
</p>

<p>
Saya memahami sepenuhnya dokumen ini serta kesannya menurut hukum syarak dan undang-undang Malaysia.
</p>

<p>
Saya dengan ini membatalkan mana-mana wasiat yang telah saya buat sebelum ini, 
<strong>TETAPI HANYA</strong> setakat mana wasiat tersebut melibatkan pegangan saham perniagaan saya seperti yang ditakrifkan di bawah. 
Dokumen ini sama sekali tidak membatalkan wasiat peribadi saya ke atas aset-aset saya yang lain.
</p>

<div class="pdf-footer">
<span class="footer-docref"></span>
<span class="page-number"></span>
</div>

</div>

</div>

<div class="a4-page p-[18mm]">

<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 1: TAKRIFAN ASET</strong>
</h3>

<p>
Dokumen ini berkuatkuasa secara eksklusif ke atas kesemua pegangan unit saham biasa (ordinary shares) milik saya, 
sama ada yang wujud kini atau pada masa hadapan, di dalam syarikat:
</p>

<p>
•	Nama Syarikat: <strong>{{NAMA_SYARIKAT}}</strong><br>
•	No. Pendaftaran Syarikat (SSM): <strong>{{NO_SSM}}</strong> (selepas ini dirujuk sebagai "Saham Syarikat")
</p>

<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 2: PELANTIKAN WASI DAN PEMEGANG AMANAH (PIHAK KETIGA)</strong>
</h3>

<p>Maka saya dengan ini:</p>

<table width="100%" style="border-collapse:collapse;">
<tr valign="top">
<td width="30">1.</td>
<td style="padding-bottom:12px; text-align:justify;">
Saya dengan ini melantik <strong>{{NAMA_WASI1}}</strong> (No. K/P / Pendaftaran: <strong>{{NO_IC_WASI1}}</strong>), 
yang beralamat di <strong>{{ALAMAT_WASI1}}</strong>, 
sebagai Wasi dan Pemegang Amanah Tunggal (Sole Executor and Trustee) khusus bagi mentadbir Saham Syarikat saya.
</td>
</tr>
{{WASI_KEDUA_TEXT}}
<tr valign="top">
<td>{{NOMBOR_WASI_KUASA}}.</td>
<td style="padding-bottom:12px; text-align:justify;">
Wasi diberi kuasa mutlak untuk memohon Surat Kuasa Mentadbir Wasiat (Grant of Probate) dan menandatangani semua dokumen penyerahan hak, 
resolusi, dan pindah milik saham bagi pihak saya.
</td>
</tr>
</table>

<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 2A: HAD WASIAT MENURUT HUKUM SYARAK (KAEDAH 1/3)</strong>
</h3>

<table width="100%" style="border-collapse:collapse;">
<tr valign="top">
<td width="30">1.</td>
<td style="padding-bottom:12px; text-align:justify;">
Selaras hadis Rasulullah S.A.W riwayat Sa'ad bin Abi Waqqas, saya mengakui bahawa wasiat kepada bukan waris (<em>ghayr warith</em>) tidak boleh melebihi satu pertiga (1/3) daripada nilai bersih pusaka saya selepas ditolak perbelanjaan pengurusan jenazah, hutang, dan zakat yang wajib.
</td>
</tr>
<tr valign="top">
<td width="30">2.</td>
<td style="padding-bottom:12px; text-align:justify;">
Sekiranya mana-mana penerima wasiat yang dinamakan dalam dokumen ini adalah waris yang layak menerima Faraid, wasiat kepadanya adalah tidak sah melainkan mendapat persetujuan waris-waris lain selepas kematian saya, menurut prinsip <em>"la wasiyyata li-warith"</em> (tiada wasiat kepada waris).
</td>
</tr>
<tr valign="top">
<td width="30">3.</td>
<td style="padding-bottom:12px; text-align:justify;">
Baki dua pertiga (2/3) atau lebih Saham Syarikat saya (selepas ditolak 1/3 yang diwasiatkan, jika berkenaan) hendaklah dibahagikan mengikut Hukum Faraid melalui proses probet / perintah pembahagian pusaka oleh Mahkamah Syariah, Amanah Raya Berhad, atau Pihak Berkuasa Pentadbir Harta Pusaka yang berkenaan.
</td>
</tr>
</table>

<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 3: {{TAJUK_FASAL_3}}</strong>
</h3>

{{KANDUNGAN_FASAL_3}}

<div class="pdf-footer">
<span class="footer-docref"></span>
<span class="page-number"></span>
</div>

</div>

<div class="a4-page p-[18mm]">

<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 3A: HIBAH SEMASA HAYAT (JIKA BERKAITAN)</strong>
</h3>

<table width="100%" style="border-collapse:collapse;">
<tr valign="top">
<td width="30">1.</td>
<td style="padding-bottom:12px; text-align:justify;">
Sekiranya saya telah atau akan membuat hibah (pemberian semasa hayat) ke atas mana-mana bahagian Saham Syarikat kepada mana-mana individu, hibah tersebut adalah berasingan dan tidak tertakluk kepada had 1/3 wasiat di Fasal 2A, tertakluk kepada syarat sah hibah (ijab-qabul dan penyerahan/<em>qabd</em>) telah dipenuhi semasa saya hidup dan sedar.
</td>
</tr>
<tr valign="top">
<td width="30">2.</td>
<td style="padding-bottom:12px; text-align:justify;">
Sebarang hibah bersyarat (<em>"hibah ruqba"</em> atau hibah yang berkuat kuasa selepas kematian) adalah tertakluk kepada nasihat Peguam Syarie kerana ia berisiko dianggap sebagai wasiat dan tertakluk kepada had 1/3.
</td>
</tr>
</table>

{{FASAL_AMANAH_MINOR}}

<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 4: {{TAJUK_FASAL_4}}</strong>
</h3>

{{KANDUNGAN_FASAL_4}}

<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 4A: ZAKAT PERNIAGAAN & PENYELESAIAN HUTANG</strong>
</h3>

<table width="100%" style="border-collapse:collapse;">
<tr valign="top">
<td width="30">1.</td>
<td style="padding-bottom:12px; text-align:justify;">
Saya mengarahkan supaya zakat perniagaan (jika cukup <em>haul</em> dan <em>nisab</em>) yang tertunggak dikira dan dikeluarkan terlebih dahulu daripada Saham Syarikat/aset perniagaan sebelum sebarang pembahagian wasiat atau Faraid dibuat.
</td>
</tr>
<tr valign="top">
<td width="30">2.</td>
<td style="padding-bottom:12px; text-align:justify;">
Semua hutang perniagaan yang sah (termasuk pembiayaan patuh Syariah) hendaklah diselesaikan mengikut turutan keutamaan di bawah undang-undang Malaysia sebelum baki bersih ditentukan untuk tujuan wasiat dan Faraid.
</td>
</tr>
</table>

<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 4B: ARAHAN PENGURUSAN SEMASA TEMPOH PERALIHAN</strong>
</h3>

<table width="100%" style="border-collapse:collapse;">
<tr valign="top">
<td width="30">1.</td>
<td style="padding-bottom:12px; text-align:justify;">
Sementara menunggu penyelesaian probet dan pembahagian, saya mengarahkan supaya operasi harian Syarikat diteruskan tanpa gangguan, dan sebarang keputusan besar (penjualan aset utama, pengambilan hutang baharu, penamatan pekerja kanan) semasa tempoh peralihan hendaklah mendapat persetujuan bertulis Wasi.
</td>
</tr>
<tr valign="top">
<td width="30">2.</td>
<td style="padding-bottom:12px; text-align:justify;">
Sekiranya terdapat Perjanjian Beli-Jual Saham Patuh Syariah (<em>Corporate Buy-Sell and Succession Agreement</em>) yang berkuat kuasa antara saya dengan pemegang saham lain di Syarikat, Wasi hendaklah mematuhi dan menguatkuasakan terma perjanjian tersebut sepenuhnya, termasuk kewajipan menjual Saham Syarikat kepada pemegang saham yang masih hidup mengikut mekanisme penilaian dan pembiayaan Takaful yang dipersetujui di dalamnya.
</td>
</tr>
</table>

<div class="pdf-footer">
<span class="footer-docref"></span>
<span class="page-number"></span>
</div>

</div>

<div class="a4-page p-[18mm]">

<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 5: WASIAT PESANAN KEPADA WARIS</strong>
</h3>

{{PESANAN_WASIAT}}

<div class="pdf-footer">
<span class="footer-docref"></span>
<span class="page-number"></span>
</div>

</div>

<div class="a4-page p-[18mm]">

<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 6: PERSETUJUAN WARIS & PEMBAHAGIAN MENGIKUT HUKUM FARAID</strong>
</h3>

<p>
Saya dengan ini mengakui bahawa saya faham yang permintaan pembahagian saya seperti di atas adalah tertakluk kepada persetujuan waris-waris saya yang sah dan layak mengikut Hukum Faraid. Sekiranya ada di antara mereka yang tidak bersetuju, maka hak mereka seperti yang tertakluk di bawah Hukum Faraid hendaklah diserahkan kepada mereka. Bagi waris-waris yang sah dan layak yang lain yang bersetuju, maka pembahagian untuk mereka yang lain akan mengikut formula seperti yang saya minta.
</p>

<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 7: KEBOLEHASINGAN (SEVERABILITY)</strong>
</h3>

<p>
Sekiranya mana-mana fasal di dalam dokumen Wasiat Korporat ini didapati tidak sah, tidak berkuat kuasa, atau bercanggah dengan Hukum Syarak/undang-undang Malaysia oleh mana-mana pihak berkuasa yang berwibawa, fasal tersebut hendaklah diasingkan dan fasal-fasal lain yang selebihnya hendaklah kekal berkuat kuasa sepenuhnya.
</p>

<div style="margin-top:60px; border-top:1px solid #000; width:100%;"></div>

<p style="text-align:center; margin-top:10px; font-style:italic;">
(Ruangan ini sengaja dibiarkan kosong)
</p>

<div class="pdf-footer">
<span class="footer-docref"></span>
<span class="page-number"></span>
</div>

</div>

<div class="a4-page p-[18mm]">

<div class="mt-8">

<strong>PENGAKUAN PEWASIAT</strong>
<p>Saya dengan ini mengaku bahawa segala maklumat yang dinyatakan dalam dokumen Wasiat Korporat ini adalah benar dan tepat mengikut pengetahuan saya.</p>
<br>

<p>.......................................</p>
<p>(Tandatangan Pewasiat)</p>

<table style="margin-top:30px; font-size:14px;">
<tr>
<td width="100">Nama</td>
<td width="20">:</td>
<td><strong>{{NAMA_PEWASIAT}}</strong></td>
</tr>
<tr>
<td>No. K/P</td>
<td>:</td>
<td><strong>{{NO_IC_PEWASIAT}}</strong></td>
</tr>
<tr>
<td>Tarikh</td>
<td>:</td>
<td></td>
</tr>
</table>

</div>
<br>

<strong>PENGESAHAN SAKSI</strong>
<p>
Kami yang bertandatangan di bawah mengesahkan bahawa Pewasiat telah menandatangani dokumen ini di hadapan kami dan pada pemerhatian kami, 
Pewasiat berada dalam keadaan waras serta membuat Wasiat ini secara sukarela.
</p>

<table style="width:100%; margin-top:30px;">
    <!-- SAKSI 1 & 2 -->
    <tr valign="top">
        <td width="45%">
            <p>.......................................</p>
            <p>Tandatangan saksi 1</p>
            <table style="margin-top:15px;">
                <tr><td width="80">Nama</td><td width="20">:</td><td></td></tr>
                <tr><td>No. K/P</td><td>:</td><td></td></tr>
                <tr><td>Tarikh</td><td>:</td><td></td></tr>
            </table>
        </td>
        <td width="10%"></td>
        <td width="45%">
            <p>.......................................</p>
            <p>Tandatangan saksi 2</p>
            <table style="margin-top:15px;">
                <tr><td width="80">Nama</td><td width="20">:</td><td></td></tr>
                <tr><td>No. K/P</td><td>:</td><td></td></tr>
                <tr><td>Tarikh</td><td>:</td><td></td></tr>
            </table>
        </td>
    </tr>

    <!-- Jarak antara baris atas dan bawah -->
    <tr>
        <td colspan="3" height="40"></td>
    </tr>

    <!-- SAKSI 3 & 4 -->
    <tr valign="top">
        <td width="45%">
            <p>.......................................</p>
            <p>Tandatangan saksi 3</p>
            <table style="margin-top:15px;">
                <tr><td width="80">Nama</td><td width="20">:</td><td></td></tr>
                <tr><td>No. K/P</td><td>:</td><td></td></tr>
                <tr><td>Tarikh</td><td>:</td><td></td></tr>
            </table>
        </td>
        <td width="10%"></td>
        <td width="45%">
            <p>.......................................</p>
            <p>Tandatangan saksi 4</p>
            <table style="margin-top:15px;">
                <tr><td width="80">Nama</td><td width="20">:</td><td></td></tr>
                <tr><td>No. K/P</td><td>:</td><td></td></tr>
                <tr><td>Tarikh</td><td>:</td><td></td></tr>
            </table>
        </td>
    </tr>
</table>

<p style="margin-top:40px; font-size:12px; font-style:italic; color:#555;">
Dokumen ini dijana melalui sistem eWasiat berdasarkan maklumat yang dimasukkan oleh pengguna. Adalah dinasihatkan supaya dokumen ini disemak oleh Peguam Syarie bertauliah sebelum ditandatangani dan digunakan sebagai dokumen mengikat.
</p>

<div class="pdf-footer">
<span class="footer-docref"></span>
<span class="page-number"></span>
</div>

</div>

<div class="a4-page p-[18mm]">
<h2 style="font-family:'Times New Roman', serif; font-size:28px; margin-top:30px; margin-bottom:20px; color:#153638;">
LAMPIRAN : MAKLUMAT SYARIKAT & SAHAM
</h2>
<div id="lampiranKorporat">
{{LAMPIRAN_KORPORAT}}
</div>
<div class="pdf-footer">
<span class="footer-docref"></span>
<span class="page-number"></span>
</div>
</div>

<div class="a4-page p-[18mm]">

<h2
style="
font-family:'Times New Roman', serif;
font-size:28px;
margin-top:30px;
margin-bottom:20px;
color:#153638;
">
LAMPIRAN A : SENARAI WARIS
</h2>

<div id="lampiranWaris">
{{LAMPIRAN_WARIS}}
</div>

<div class="pdf-footer">

<span class="docRef"></span>

<span class="page-number"></span>

</div>

</div>

<div class="a4-page p-[18mm]">

<h2
style="
font-family:'Times New Roman', serif;
font-size:28px;
margin-top:30px;
margin-bottom:20px;
color:#153638;
">
LAMPIRAN B : PEMEGANG AMANAH
</h2>

<div>
{{LAMPIRAN_PEMEGANG_AMANAH}}
</div>

<div class="pdf-footer">

<span class="docRef"></span>

<span class="page-number"></span>

</div>

</div>

`;


/* ============================================================================
   2) PERJANJIAN JUAL BELI SAHAM & PEWARISAN KORPORAT
   ============================================================================ */
const buySellAgreementContent = `

<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:15px; line-height:1.6; text-align:justify; color:#222;">

    <h2 style="font-size:20px; font-weight:bold; text-align:center; margin-bottom:5px; color:#153638;">
        PERJANJIAN JUAL BELI SAHAM & PEWARISAN KORPORAT
    </h2>
    <p style="text-align:center; margin-bottom:30px; font-weight:bold; font-size:20px;">
        <em>(CORPORATE BUY-SELL AND SUCCESSION AGREEMENT)</em>
    </p>

    <p style="margin-bottom:20px;">
        <strong>PERJANJIAN INI</strong> diperbuat pada haribulan <strong>{{TARIKH_PERJANJIAN}}</strong>
    </p>

    <p style="font-weight:bold; margin-bottom:10px;">ANTARA:</p>

    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top">
            <td width="40">(1)</td>
            <td><strong>{{NAMA_PEWASIAT}}</strong> (No. K/P: <strong>{{NO_IC_PEWASIAT}}</strong>), warganegara Malaysia yang beralamat di <strong>{{ALAMAT_PEWASIAT}}</strong> (selepas ini secara berasingan dirujuk sebagai "Pemegang Saham A");</td>
        </tr>
    </table>

    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top">
            <td width="40">(2)</td>
            <td><strong>{{NAMA_PARTNER}}</strong> (No. K/P: <strong>{{NO_IC_PARTNER}}</strong>), warganegara Malaysia yang beralamat di <strong>{{ALAMAT_PARTNER}}</strong> (selepas ini secara berasingan dirujuk sebagai "Pemegang Saham B");</td>
        </tr>
    </table>

    <p style="margin-left:40px; margin-bottom:15px; font-style:italic;">
        (Pemegang Saham A dan Pemegang Saham B selepas ini boleh dirujuk secara bersama sebagai "Pihak-Pihak" atau secara berasingan sebagai "Pihak")
    </p>

    <p style="font-weight:bold; margin-bottom:10px;">DAN</p>

    <table width="100%" style="margin-bottom:30px; border-collapse:collapse;">
        <tr valign="top">
            <td width="40">(3)</td>
            <td><strong>{{NAMA_SYARIKAT}}</strong> (No. Pendaftaran Syarikat: <strong>{{NO_SSM}}</strong>), sebuah syarikat yang diperbadankan di bawah undang-undang Malaysia dan mempunyai alamat berdaftar di <strong>{{ALAMAT_SYARIKAT}}</strong> (selepas ini dirujuk sebagai "Syarikat").</td>
        </tr>
    </table>

    <p style="font-weight:bold; margin-bottom:10px;">BAHAWASANYA (RECITALS):</p>

    <table width="100%" style="margin-bottom:30px; border-collapse:collapse;">
        <tr valign="top">
            <td width="40">A.</td>
            <td style="padding-bottom:10px;">Syarikat merupakan sebuah entiti perniagaan yang sah yang mempunyai modal syer terbitan keseluruhan sebanyak <strong>{{JUMLAH_SAHAM}}</strong> unit saham biasa.</td>
        </tr>
        <tr valign="top">
            <td width="40">B.</td>
            <td style="padding-bottom:10px;">Pada tarikh Perjanjian ini, Pemegang Saham A merupakan pemilik benefisial dan berdaftar ke atas <strong>{{SAHAM_PEWASIAT}}</strong> unit saham, manakala Pemegang Saham B merupakan pemilik benefisial dan berdaftar ke atas <strong>{{SAHAM_PARTNER}}</strong> unit saham di dalam Syarikat (selepas ini dirujuk secara kolektif sebagai "Saham-Saham Tersebut").</td>
        </tr>
        <tr valign="top">
            <td width="40">C.</td>
            <td style="padding-bottom:10px;">Pihak-Pihak berhasrat untuk mengikat suatu perjanjian bagi mengatur kelangsungan perniagaan serta menetapkan suatu mekanisme mandatori bagi jualan dan pembelian Saham-Saham Tersebut sekiranya berlaku Kematian atau Keilatan Kekal Menyeluruh (TPD) ke atas mana-mana Pemegang Saham, yang disokong oleh pembiayaan tunai melalui Polisi Takaful Korporat (Keyman).</td>
        </tr>
        <tr valign="top">
            <td width="40">D.</td>
            <td style="padding-bottom:10px;">Pihak-Pihak juga berhasrat supaya kesemua urus niaga di bawah Perjanjian ini dilaksanakan mengikut prinsip Syariah, bebas daripada unsur riba (faedah), gharar (ketidakpastian melampau) dan maysir (perjudian/spekulasi).</td>
        </tr>
    </table>

<div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>
</div>

<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:15px; line-height:1.6; text-align:justify; color:#222;">

    <p style="font-weight:bold; margin-bottom:20px; text-align:left;">
        MAKA DENGAN INI, ADALAH DIPERSETUJUI SEPERTI BERIKUT:
    </p>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 1: TAFSIRAN & INTERPRETASI</h3>
    <p style="margin-bottom:10px;">Dalam Perjanjian ini, melainkan jika konteksnya menghendaki makna yang sebaliknya:</p>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top"><td width="30">1.1</td><td style="padding-bottom:8px;"><strong>"Kejadian Pemicu <em>(Trigger Event)</em></strong>" ertinya insiden Kematian, Keilatan Kekal Menyeluruh (TPD) yang disahkan secara perubatan, atau mana-mana peristiwa tambahan yang disenaraikan di Fasal 2A, yang berlaku ke atas mana-mana Pemegang Saham.</td></tr>
        <tr valign="top"><td width="30">1.2</td><td style="padding-bottom:8px;"><strong>"Pemegang Saham Terjejas"</strong> ertinya Pemegang Saham yang telah mengalami Kejadian Pemicu tersebut.</td></tr>
        <tr valign="top"><td width="30">1.3</td><td style="padding-bottom:8px;"><strong>"Wasi/Pentadbir"</strong> ertinya pihak, waris, penama, atau institusi yang dilantik secara sah mengikut perundangan Syariah mahupun Sivil untuk mentadbir harta pusaka Pemegang Saham Terjejas.</td></tr>
        <tr valign="top"><td width="30">1.4</td><td style="padding-bottom:8px;"><strong>"Nilai Saksama"</strong> ertinya nilai balasan bagi Saham-Saham Tersebut sebagaimana ditentukan mengikut Fasal 3.</td></tr>
    </table>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 1A: PRINSIP SYARIAH YANG TERPAKAI</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top"><td width="30">1A.1</td><td style="padding-bottom:8px;">Urus niaga jual beli Saham-Saham Tersebut di bawah Perjanjian ini adalah berasaskan akad <em>Bai' al-Musawamah</em> (jual beli tawar-menawar terbuka) di mana harga dipersetujui secara telus berdasarkan Nilai Saksama, dan bukan berasaskan riba atau anuiti tetap yang menyerupai faedah.</td></tr>
        <tr valign="top"><td width="30">1A.2</td><td style="padding-bottom:8px;">Sebarang pembiayaan bagi tujuan pembelian Saham-Saham Tersebut (termasuk melalui Polisi Takaful di Fasal 4 atau kemudahan pembiayaan lain) hendaklah menggunakan produk yang disahkan patuh Syariah oleh Jawatankuasa Syariah institusi berkenaan.</td></tr>
        <tr valign="top"><td width="30">1A.3</td><td style="padding-bottom:8px;">Sebarang ganti rugi lewat bayaran (jika ada) hendaklah berbentuk <em>Ta'widh</em> (ganti rugi kos sebenar) dan bukan faedah kompaun, selaras garis panduan Majlis Penasihat Syariah Bank Negara Malaysia.</td></tr>
    </table>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 2: KEWAJIPAN JUALAN DAN BELIAN SAHAM (MANDATORY BUY-SELL OBLIGATION)</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top">
            <td width="30">2.1</td>
            <td>Tertakluk kepada terma-terma di sini, apabila berlakunya Kejadian Pemicu ke atas mana-mana Pemegang Saham Terjejas:
                <ul style="margin-top:5px; padding-left:20px; list-style-type:lower-alpha;">
                    <li style="margin-bottom:8px;">Wasi/Pentadbir bagi pusaka Pemegang Saham Terjejas adalah <strong>TERIKAT SECARA MUTLAK</strong> untuk menjual, memindah milik, dan melepaskan kesemua hak ke atas pegangan saham Pemegang Saham Terjejas di dalam Syarikat.</li>
                    <li>Pemegang Saham yang Masih Hidup <em>(Surviving Shareholder)</em> adalah <strong>DIWAJIBKAN</strong> untuk membeli kesemua saham tersebut, yang mana bahagian pembelian tersebut hendaklah berkadar (pro-rata) mengikut nisbah pegangan saham semasa.</li>
                </ul>
            </td>
        </tr>
        <tr valign="top">
            <td width="30">2.2</td>
            <td style="padding-bottom:8px;">Wasi/Pentadbir Pemegang Saham Terjejas hendaklah memberi notis bertulis mengenai berlakunya Kejadian Pemicu kepada Syarikat dan Pemegang Saham yang lain dalam tempoh tiga puluh (30) hari daripada tarikh Kejadian Pemicu tersebut.</td>
        </tr>
    </table>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 2A: PERISTIWA PENCETUS TAMBAHAN & HAK PILIHAN PERTAMA</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top">
            <td width="30">2A.1</td>
            <td>Selain Kematian dan TPD, Pihak-Pihak juga bersetuju bahawa peristiwa-peristiwa berikut boleh mencetuskan hak/kewajipan jual-beli di bawah Perjanjian ini, tertakluk kepada terma yang dipersetujui berasingan:
                <ul style="margin-top:5px; padding-left:20px; list-style-type:lower-alpha;">
                    <li style="margin-bottom:6px;">Persaraan sukarela atau perletakan jawatan Pemegang Saham daripada Syarikat;</li>
                    <li style="margin-bottom:6px;">Kebankrapan/kemuflisan Pemegang Saham;</li>
                    <li style="margin-bottom:6px;">Pertikaian kekal <em>(deadlock)</em> antara Pemegang Saham yang tidak dapat diselesaikan melalui Fasal 6A dalam tempoh yang dipersetujui; dan/atau</li>
                    <li>Hasrat sukarela seseorang Pemegang Saham untuk menjual sebahagian atau kesemua sahamnya kepada pihak ketiga.</li>
                </ul>
            </td>
        </tr>
        <tr valign="top">
            <td width="30">2A.2</td>
            <td style="padding-bottom:8px;">Bagi peristiwa jualan sukarela kepada pihak ketiga di Fasal 2A.1(d), Pemegang Saham yang berhasrat menjual hendaklah terlebih dahulu menawarkan sahamnya kepada Pemegang Saham sedia ada pada Nilai Saksama atau harga yang ditawarkan pihak ketiga (mengikut mana yang lebih rendah) ("Hak Pilihan Pertama"), dan Pemegang Saham sedia ada mempunyai tempoh tiga puluh (30) hari untuk melaksanakan hak tersebut secara berkadar mengikut pegangan sedia ada sebelum saham boleh ditawarkan kepada pihak luar.</td>
        </tr>
    </table>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 3: MEKANISME PENILAIAN HARGA SAHAM</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top">
            <td width="30">3.1</td>
            <td>Pihak-Pihak dengan ini bersetuju bahawa nilai balasan bagi setiap unit saham Syarikat di bawah Perjanjian ini hendaklah ditentukan secara muktamad melalui salah satu kaedah berikut:
                <ul style="margin-top:5px; padding-left:20px; list-style-type:lower-alpha;">
                    <li style="margin-bottom:8px;">Formula Nilai Aset Bersih <em>(Net Asset Value - NAV)</em> sepertimana yang disahkan di dalam Laporan Kewangan Beraudit Syarikat bagi tahun kewangan yang terakhir sebelum berlakunya Kejadian Pemicu; ATAU</li>
                    <li>Harga persetujuan bersama <em>(Fixed Agreed Value)</em> yang ditetapkan secara bertulis dari semasa ke semasa. Jika tiada persetujuan bertulis baharu dikemaskini dalam tempoh dua belas (12) bulan sebelum Kejadian Pemicu, nilai di bawah Fasal 3.1(a) hendaklah diguna pakai.</li>
                </ul>
            </td>
        </tr>
        <tr valign="top">
            <td width="30">3.2</td>
            <td style="padding-bottom:8px;">Sekiranya Pihak-Pihak tidak dapat bersetuju dengan nilai di bawah Fasal 3.1, penilaian hendaklah dijalankan oleh juruaudit/penilai bebas bertauliah yang dilantik bersama, dengan kos ditanggung secara berkadar mengikut pegangan saham melainkan dipersetujui sebaliknya.</td>
        </tr>
    </table>

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>

</div>

<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:15px; line-height:1.6; text-align:justify; color:#222;">

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 3A: STRUKTUR PELAKSANAAN BELIAN</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top">
            <td width="30">3A.1</td>
            <td>Pembelian Saham-Saham Tersebut di bawah Perjanjian ini hendaklah dilaksanakan menggunakan salah satu struktur berikut, sebagaimana dipersetujui oleh Pihak-Pihak:
                <ul style="margin-top:5px; padding-left:20px; list-style-type:lower-alpha;">
                    <li style="margin-bottom:8px;"><strong>Cross-Purchase</strong> — Pemegang Saham yang Masih Hidup membeli terus saham Pemegang Saham Terjejas secara berkadar mengikut pegangan sedia ada; ATAU</li>
                    <li><strong>Entity/Redemption Purchase</strong> — Syarikat sendiri membeli balik <em>(redeem)</em> saham tersebut menggunakan dana Syarikat atau hasil Polisi Takaful di Fasal 4, tertakluk kepada Akta Syarikat 2016 dan Perlembagaan Syarikat berkaitan pembelian balik saham sendiri.</li>
                </ul>
            </td>
        </tr>
    </table>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 4: PEMBIAYAAN KORPORAT MELALUI TAKAFUL</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top"><td width="30">4.1</td><td style="padding-bottom:8px;">Bagi memastikan kelancaran dan ketersediaan dana untuk melaksanakan obligasi belian saham di bawah Fasal 2, Syarikat dan/atau Pihak-Pihak hendaklah mengambil, mencarum, dan mengekalkan <strong>Polisi Takaful (Keyman)</strong> ke atas hayat setiap Pemegang Saham, dengan jumlah perlindungan yang sekurang-kurangnya menyamai anggaran nilai pasaran pegangan saham masing-masing.</td></tr>
        <tr valign="top"><td width="30">4.2</td><td style="padding-bottom:8px;">Apabila berlakunya Kejadian Pemicu, apa-apa pampasan dan/atau hasil tuntutan yang dibayar di bawah Polisi Takaful tersebut hendaklah dipegang amanah semata-mata bagi tujuan melunaskan balasan belian saham kepada Wasi/Pentadbir Pemegang Saham Terjejas.</td></tr>
        <tr valign="top"><td width="30">4.3</td><td style="padding-bottom:8px;">Sekiranya hasil Polisi Takaful tidak mencukupi untuk melunaskan sepenuhnya Nilai Saksama, baki boleh dibayar secara ansuran munasabah tanpa faedah dalam tempoh tidak melebihi tiga puluh enam (36) bulan, dengan Ta'widh (jika berlaku lewat bayar) mengikut Fasal 1A.3.</td></tr>
    </table>

    {{FASAL_ESCROW_TAKAFUL}}

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 4A: PROSES PEMINDAHAN SAHAM & SETEM HASIL</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top"><td width="30">4A.1</td><td style="padding-bottom:8px;">Setelah harga dan struktur belian dipersetujui/ditentukan, Pihak-Pihak hendaklah melaksanakan Borang Pemindahan Saham dan mengemukakan dokumen berkaitan kepada Suruhanjaya Syarikat Malaysia (SSM) dalam tempoh tiga puluh (30) hari, termasuk kelulusan lembaga pengarah dan pematuhan Perlembagaan Syarikat.</td></tr>
        <tr valign="top"><td width="30">4A.2</td><td style="padding-bottom:8px;">Setem hasil <em>(stamp duty)</em> ke atas pemindahan saham hendaklah dijelaskan mengikut Akta Setem 1949 sebelum pendaftaran pemindahan diiktiraf sah di sisi undang-undang.</td></tr>
    </table>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 5: PEMATUHAN DOKUMEN WASIAT KORPORAT</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top"><td width="30">5.1</td><td style="padding-bottom:8px;">Sebagai balasan kepada kewajipan-kewajipan di bawah Perjanjian ini, setiap Pemegang Saham bersetuju dan berjanji untuk menyempurnakan suatu Deklarasi Wasiat Korporat yang selari dengan Perjanjian ini.</td></tr>
        <tr valign="top"><td width="30">5.2</td><td style="padding-bottom:8px;">Wasiat Korporat tersebut hendaklah memuatkan arahan mandatori yang jelas kepada Wasi/Pentadbir untuk menguatkuasakan pindah milik saham kepada Pemegang Saham yang Masih Hidup tanpa kelewatan dan tanpa membenarkan sebarang bantahan daripada waris-waris Faraid/benefisiari yang lain, tertakluk sepenuhnya kepada had 1/3 dan prinsip Faraid yang dinyatakan di dalam Wasiat Korporat tersebut.</td></tr>
    </table>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 5A: KERAHSIAAN DAN SEKATAN MUNASABAH</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top"><td width="30">5A.1</td><td style="padding-bottom:8px;">Setiap Pihak bersetuju menjaga kerahsiaan maklumat perniagaan sensitif Syarikat dan tidak boleh mendedahkannya kepada pihak ketiga tanpa kebenaran, kecuali dikehendaki oleh undang-undang.</td></tr>
        <tr valign="top"><td width="30">5A.2</td><td style="padding-bottom:8px;">Sekiranya dipersetujui, sekatan larangan bersaing <em>(non-compete)</em> ke atas Pemegang Saham Terjejas selepas jualan sahamnya hendaklah terhad dari segi tempoh (tidak melebihi dua (2) tahun), kawasan geografi dan skop perniagaan yang munasabah, bagi mengelakkan sekatan yang tidak sah di sisi undang-undang kontrak Malaysia.</td></tr>
    </table>

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>

</div>

<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:15px; line-height:1.6; text-align:justify; color:#222;">

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 6: KESAN MENGIKAT & UNDANG-UNDANG GUNA PAKAI</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top"><td width="30">6.1</td><td style="padding-bottom:8px;">Perjanjian ini adalah mengikat ke atas waris, pentadbir, wasi, pewaris, dan wakil peribadi yang sah di sisi undang-undang bagi setiap Pihak di sini.</td></tr>
        <tr valign="top"><td width="30">6.2</td><td style="padding-bottom:8px;">Perjanjian ini hendaklah ditafsirkan, dikawal selia, dan dikuatkuasakan selaras dengan Undang-Undang Malaysia, termasuk Akta Kontrak 1950 dan Akta Syarikat 2016, dan tertakluk kepada bidang kuasa khusus, Hukum Syarak yang terpakai di Malaysia.</td></tr>
    </table>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 6A: PENYELESAIAN PERTIKAIAN</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top"><td width="30">6A.1</td><td style="padding-bottom:8px;">Sebarang pertikaian yang berbangkit daripada atau berkaitan dengan Perjanjian ini hendaklah cuba diselesaikan terlebih dahulu secara <em>Sulh</em> (mediasi/rundingan baik) dalam tempoh tiga puluh (30) hari daripada notis pertikaian diberikan.</td></tr>
        <tr valign="top"><td width="30">6A.2</td><td style="padding-bottom:8px;">Sekiranya tidak berjaya diselesaikan melalui Sulh, pertikaian tersebut hendaklah dirujuk kepada dan diselesaikan secara muktamad melalui timbang tara mengikut Akta Timbang Tara 2005 dan/atau peraturan timbang tara patuh Syariah (i-Arbitration) Pusat Timbang Tara Antarabangsa Kuala Lumpur (AIAC), dan keputusan timbang tara tersebut adalah muktamad serta mengikat kesemua Pihak.</td></tr>
    </table>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 6B: FORCE MAJEURE</h3>
    <p style="margin-bottom:15px;">
        Mana-mana Pihak tidak dianggap mungkir kontrak di bawah Perjanjian ini sekiranya kegagalan melaksanakan kewajipannya adalah disebabkan oleh peristiwa di luar kawalan munasabah pihak tersebut (termasuk bencana alam, wabak, atau perubahan undang-undang), dengan syarat notis segera diberikan kepada Pihak yang lain sebaik sahaja praktik.
    </p>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 6C: KEBOLEHASINGAN</h3>
    <p style="margin-bottom:30px;">
        Sekiranya mana-mana fasal di dalam Perjanjian ini didapati tidak sah atau tidak berkuat kuasa oleh mana-mana pihak berkuasa yang berwibawa, fasal tersebut hendaklah diasingkan dan fasal-fasal lain yang selebihnya hendaklah kekal berkuat kuasa sepenuhnya.
    </p>

<div
style="
margin-top:60px;
border-top:1px solid #000;
width:100%;
">
</div>

<p
style="
text-align:center;
margin-top:10px;
font-style:italic;
">
(Ruangan ini sengaja dibiarkan kosong)
</p>

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>

</div>

<!-- ================= PAGE 4 ================= -->
<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:14px; line-height:1.6; text-align:justify; color:#222;">

    <p style="margin-bottom:40px;">
        PADA MENYAKSIKAN HAL DI ATAS, Pihak-Pihak di sini telah menurunkan tandatangan masing-masing pada tarikh yang mula-mula tertulis di atas.
    </p>

    <!-- SIGNATURE 1: PEMEGANG SAHAM A -->
    <table style="width:100%; margin-bottom:50px; border-collapse:collapse;">
        <tr valign="top">
            <td width="45%">
                <p style="font-weight:bold; margin-bottom:50px;">DITANDATANGANI OLEH PEMEGANG SAHAM A:</p>
                <p>..................................................</p>
                <p style="margin-top:5px;"><strong>{{NAMA_PEWASIAT}}</strong></p>
                <p>No. K/P: {{NO_IC_PEWASIAT}}</p>
            </td>
            <!-- Ruang Kosong (Spacer) -->
            <td width="10%"></td>
            <!-- Saksi 1 -->
            <td width="45%">
                <p style="font-weight:bold; margin-bottom:50px;">Di hadapan (Saksi):</p>
                <p>Tandatangan : ............................................</p>
                <p style="margin-top:5px;">Nama Saksi : </p>
                <p>No. K/P &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
            </td>
        </tr>
    </table>

    <!-- SIGNATURE 2: PEMEGANG SAHAM B -->
    <table style="width:100%; margin-bottom:50px; border-collapse:collapse;">
        <tr valign="top">
            <td width="45%">
                <p style="font-weight:bold; margin-bottom:50px;">DITANDATANGANI OLEH PEMEGANG SAHAM B:</p>
                <p>..................................................</p>
                <p style="margin-top:5px;"><strong>{{NAMA_PARTNER}}</strong></p>
                <p>No. K/P: {{NO_IC_PARTNER}}</p>
            </td>
            <!-- Ruang Kosong (Spacer) -->
            <td width="10%"></td>
            <!-- Saksi 2 -->
            <td width="45%">
                <p style="font-weight:bold; margin-bottom:50px;">Di hadapan (Saksi):</p>
                <p>Tandatangan : ............................................</p>
                <p style="margin-top:5px;">Nama Saksi : </p>
                <p>No. K/P &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
            </td>
        </tr>
    </table>

    <!-- SIGNATURE 3: SYARIKAT -->
    <table style="width:100%; margin-bottom:30px; border-collapse:collapse;">
        <tr valign="top">
            <td width="45%">
                <p style="font-weight:bold; margin-bottom:50px;">DITANDATANGANI BAGI PIHAK SYARIKAT:</p>
                <p>..................................................</p>
                <p style="margin-top:5px;"><strong>{{NAMA_WAKIL_SYARIKAT}}</strong></p>
                <p>Pengarah / Setiausaha Syarikat</p>
                <p>Untuk dan bagi pihak:</p>
                <p><strong>{{NAMA_SYARIKAT}}</strong></p>
            </td>
            <!-- Ruang Kosong (Spacer) -->
            <td width="10%"></td>
            <!-- Saksi 3 -->
            <td width="45%">
                <p style="font-weight:bold; margin-bottom:50px;">Di hadapan (Saksi):</p>
                <p>Tandatangan : ............................................</p>
                <p style="margin-top:5px;">Nama Saksi : </p>
                <p>No. K/P &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
            </td>
        </tr>
    </table>

    <p style="margin-top:20px; font-size:12px; font-style:italic; color:#555;">
        Dokumen ini dijana melalui sistem eWasiat berdasarkan maklumat yang dimasukkan oleh pengguna. Adalah dinasihatkan supaya dokumen ini disemak oleh Peguam Korporat dan Penasihat Syariah bertauliah sebelum ditandatangani dan digunakan sebagai perjanjian mengikat.
    </p>

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>

</div>`;


/* ============================================================================
   3) FASAL BERSYARAT (CONDITIONAL CLAUSES)
   ----------------------------------------------------------------------------
   Dua fasal ini TIDAK dipaparkan secara default — ia hanya "ditarik masuk"
   ke dalam dokumen jika data berkaitan wujud pada input pengguna:

   - FASAL AMANAH UNTUK MINOR  → ditarik jika ada data hibah/benefisiari
     yang berumur bawah 18 tahun (data.hibah / data.penerimaWasiat dgn umur<18)
   - FASAL ESCROW TAKAFUL      → ditarik jika ada data polisi Takaful
     Keyman/Buy-Sell (data.keyman / data.polisiTakaful)

   Kedua-dua fasal ini BEBAS ANTARA SATU SAMA LAIN (alternate / independent):
   boleh wujud kedua-duanya sekali, salah satu sahaja, atau tiada langsung —
   bergantung semata-mata kepada data yang dihantar, bukan kepada dokumen
   mana yang sedang dijana.
   ============================================================================ */

// Fasal 3B — Pelantikan Pemegang Amanah bagi Benefisiari Bawah Umur
// (disisipkan ke dalam wasiatCorporateContent selepas Fasal 3A - Hibah)
const amanahMinorClauseTemplate = `
<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 3B: PELANTIKAN PEMEGANG AMANAH BAGI BENEFISIARI BAWAH UMUR</strong>
</h3>

<table width="100%" style="border-collapse:collapse;">
<tr valign="top">
<td width="30">1.</td>
<td style="padding-bottom:12px; text-align:justify;">
Memandangkan sebahagian atau kesemua penerima hibah/wasiat Saham Syarikat saya adalah bawah umur lapan belas (18) tahun pada tarikh dokumen ini disempurnakan, saya dengan ini melantik <strong>{{NAMA_PEMEGANG_AMANAH_MINOR}}</strong> (No. K/P/Pendaftaran: <strong>{{NO_IC_PEMEGANG_AMANAH_MINOR}}</strong>), beralamat di <strong>{{ALAMAT_PEMEGANG_AMANAH_MINOR}}</strong>, sebagai Pemegang Amanah <em>(Trustee)</em> khusus bagi memegang dan mentadbir bahagian Saham Syarikat bagi pihak benefisiari berikut sehingga mereka mencapai umur matang:
</td>
</tr>
<tr valign="top">
<td width="30">2.</td>
<td style="padding-bottom:12px; text-align:justify;">
{{SENARAI_BENEFISIARI_MINOR}}
</td>
</tr>
<tr valign="top">
<td width="30">3.</td>
<td style="padding-bottom:12px; text-align:justify;">
Pemegang Amanah hendaklah memegang Saham Syarikat bagi pihak benefisiari tersebut secara amanah mutlak dan tidak boleh menjual, menggadai, atau melupuskannya melainkan bagi manfaat langsung benefisiari (contohnya perbelanjaan pendidikan atau kebajikan), dan tertakluk kepada perakaunan tahunan yang telus.
</td>
</tr>
<tr valign="top">
<td width="30">4.</td>
<td style="padding-bottom:12px; text-align:justify;">
Hak milik penuh serta kawalan ke atas Saham Syarikat hendaklah berpindah terus kepada benefisiari berkenaan sebaik sahaja beliau mencapai umur <strong>{{UMUR_MATANG}}</strong> tahun, atau pada umur lain yang saya nyatakan secara jelas berhubung benefisiari tersebut.
</td>
</tr>
<tr valign="top">
<td width="30">5.</td>
<td style="padding-bottom:12px; text-align:justify;">
Sehingga tempoh tersebut, Pemegang Amanah diberi kuasa untuk melaksanakan hak mengundi (voting rights) bagi Saham Syarikat tersebut semata-mata bagi kepentingan terbaik benefisiari, dan menerima sebarang dividen bagi pihak benefisiari untuk disimpan atau dibelanjakan mengikut Fasal 3 di atas.
</td>
</tr>
</table>
`;

// Fasal 4B — Ejen Escrow bagi Hasil Polisi Takaful
// (disisipkan ke dalam buySellAgreementContent selepas Fasal 4 - Pembiayaan Takaful)
const escrowTakafulClauseTemplate = `
<h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 4B: PELANTIKAN EJEN ESCROW BAGI HASIL TAKAFUL</h3>
<table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
    <tr valign="top">
        <td width="30">4B.1</td>
        <td style="padding-bottom:8px;">
        Pihak-Pihak dengan ini melantik <strong>{{NAMA_EJEN_ESCROW}}</strong> (No. K/P/Pendaftaran: <strong>{{NO_IC_EJEN_ESCROW}}</strong>), beralamat di <strong>{{ALAMAT_EJEN_ESCROW}}</strong>, sebagai Ejen Escrow neutral bagi Polisi Takaful (Keyman) No. <strong>{{NO_POLISI_TAKAFUL}}</strong> yang dinyatakan di Fasal 4.
        </td>
    </tr>
    <tr valign="top">
        <td width="30">4B.2</td>
        <td style="padding-bottom:8px;">
        Apabila berlakunya Kejadian Pemicu, hasil tuntutan Polisi Takaful hendaklah dibayar terus ke dalam akaun escrow yang dipegang oleh Ejen Escrow, dan BUKAN dibayar terus kepada Wasi/Pentadbir atau mana-mana Pemegang Saham yang Masih Hidup secara peribadi.
        </td>
    </tr>
    <tr valign="top">
        <td width="30">4B.3</td>
        <td style="padding-bottom:8px;">
        Ejen Escrow hendaklah melepaskan dana tersebut HANYA setelah menerima bukti (a) Nilai Saksama Saham-Saham Tersebut telah ditentukan mengikut Fasal 3, dan (b) Borang Pemindahan Saham telah disempurnakan dan sedia untuk diserahkan kepada Suruhanjaya Syarikat Malaysia (SSM) mengikut Fasal 4A.
        </td>
    </tr>
    <tr valign="top">
        <td width="30">4B.4</td>
        <td style="padding-bottom:8px;">
        Fi perkhidmatan Ejen Escrow (jika ada) hendaklah ditanggung bersama oleh Pihak-Pihak secara berkadar mengikut pegangan saham, melainkan dipersetujui sebaliknya secara bertulis.
        </td>
    </tr>
</table>
`;

/**
 * Jana kandungan Wasiat Korporat, dengan Fasal 3B (Amanah Minor) ditarik
 * masuk secara automatik HANYA jika data hibah/benefisiari bawah umur wujud.
 *
 * @param {Object} data
 * @param {Array}  [data.penerimaHibah] - senarai { nama, umur, ... }
 * @param {Object} [data.pemegangAmanahMinor] - { nama, noIc, alamat, umurMatang }
 * ...serta placeholder-placeholder lain seperti biasa (NAMA_PEWASIAT dll.)
 */
function generateWasiatKorporat(data = {}) {
  let output = wasiatCorporateContent;

  const adaMinor = Array.isArray(data.penerimaHibah)
    && data.penerimaHibah.some(p => Number(p.umur) < 18);

  if (adaMinor) {
    const senaraiMinorHtml = data.penerimaHibah
      .filter(p => Number(p.umur) < 18)
      .map(p => `${p.nama} (umur ${p.umur} tahun)`)
      .join('; ');

    let fasalAmanah = amanahMinorClauseTemplate
      .replace(/{{NAMA_PEMEGANG_AMANAH_MINOR}}/g, data.pemegangAmanahMinor?.nama || '________________')
      .replace(/{{NO_IC_PEMEGANG_AMANAH_MINOR}}/g, data.pemegangAmanahMinor?.noIc || '________________')
      .replace(/{{ALAMAT_PEMEGANG_AMANAH_MINOR}}/g, data.pemegangAmanahMinor?.alamat || '________________')
      .replace(/{{UMUR_MATANG}}/g, data.pemegangAmanahMinor?.umurMatang || '18')
      .replace(/{{SENARAI_BENEFISIARI_MINOR}}/g, senaraiMinorHtml);

    output = output.replace('{{FASAL_AMANAH_MINOR}}', fasalAmanah);
  } else {
    // Tiada data minor — fasal ditanggalkan terus, tiada tajuk fasal kosong dipaparkan
    output = output.replace('{{FASAL_AMANAH_MINOR}}', '');
  }

  return output;
}

/**
 * Jana kandungan Perjanjian Beli-Jual Saham, dengan Fasal 4B (Escrow) ditarik
 * masuk secara automatik HANYA jika data Polisi Takaful/Keyman wujud.
 *
 * @param {Object} data
 * @param {Object} [data.polisiTakaful] - { noPolisi }
 * @param {Object} [data.ejenEscrow]    - { nama, noIc, alamat }
 * ...serta placeholder-placeholder lain seperti biasa (NAMA_PEWASIAT dll.)
 */
function generateBuySellAgreement(data = {}) {
  let output = buySellAgreementContent;

  const adaKeyman = Boolean(data.polisiTakaful && data.polisiTakaful.noPolisi);

  if (adaKeyman) {
    let fasalEscrow = escrowTakafulClauseTemplate
      .replace(/{{NAMA_EJEN_ESCROW}}/g, data.ejenEscrow?.nama || '________________')
      .replace(/{{NO_IC_EJEN_ESCROW}}/g, data.ejenEscrow?.noIc || '________________')
      .replace(/{{ALAMAT_EJEN_ESCROW}}/g, data.ejenEscrow?.alamat || '________________')
      .replace(/{{NO_POLISI_TAKAFUL}}/g, data.polisiTakaful?.noPolisi || '________________');

    output = output.replace('{{FASAL_ESCROW_TAKAFUL}}', fasalEscrow);
  } else {
    // Tiada data Keyman/Takaful — fasal ditanggalkan terus
    output = output.replace('{{FASAL_ESCROW_TAKAFUL}}', '');
  }

  return output;
}

/* ============================================================================
   Eksport (sesuaikan mengikut struktur modul projek anda: CommonJS / ESM)
   ============================================================================ */
module.exports = {
  wasiatCorporateContent,
  buySellAgreementContent,
  generateWasiatKorporat,
  generateBuySellAgreement,
};
// atau: export { wasiatCorporateContent, buySellAgreementContent, generateWasiatKorporat, generateBuySellAgreement };


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

module.exports.wakafZurriContent = wakafZurriContent;
module.exports.wakafZurriOptionsMeta = wakafZurriOptionsMeta;
module.exports.generateWakafZurri = generateWakafZurri;
module.exports.semakKeserasianWakafBuySell = semakKeserasianWakafBuySell;
