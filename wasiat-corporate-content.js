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
 
<div class="a4-page p-[18mm] dynamic-page">
   <h3 style="margin-top:30px; margin-bottom:15px; font-weight:bold; font-size: 16px;">
        FASAL 1: TAKRIFAN ASET
    </h3>

    <p style="margin-bottom: 15px;">
        Bagi maksud penguatkuasaan instrumen ini, melainkan konteks ayat menghendaki makna yang lain, terma <strong>"Saham Syarikat"</strong> hendaklah ditafsirkan sebagai merangkumi kesemua pegangan unit saham biasa (<i>ordinary shares</i>), hak milik, kepentingan, dan dividen yang belum dijelaskan, sama ada yang wujud pada tarikh dokumen ini atau yang terakru pada masa hadapan, milik saya di dalam entiti korporat berikut:
    </p>

    <div style="margin-bottom:20px;">
        {{SENARAI_SYARIKAT_FASAL_1}}
    </div>

    <h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold; font-size: 16px;">
        FASAL 2: PELANTIKAN WASI DAN PEMEGANG AMANAH (PIHAK KETIGA)
    </h3>

    <table width="100%" style="border-collapse:collapse;">
        <tr valign="top">
            <td width="30">2.1</td>
            <td style="padding-bottom:12px; text-align:justify;">
                Saya dengan ini melantik <strong>{{NAMA_WASI1}}</strong> (No. K/P / Pendaftaran: <strong>{{NO_IC_WASI1}}</strong>), yang beralamat di <strong>{{ALAMAT_WASI1}}</strong>, sebagai Wasi dan Pemegang Amanah Tunggal (<i>Sole Executor and Trustee</i>) khusus bagi mentadbir Saham Syarikat saya.
            </td>
        </tr>
        {{WASI_KEDUA_TEXT}}
        <tr valign="top">
            <td>2.{{NOMBOR_WASI_KUASA}}</td>
            <td style="padding-bottom:12px; text-align:justify;">
                Wasi diberi kuasa mutlak untuk memohon <strong>Surat Kuasa Mentadbir Wasiat (<i>Grant of Probate</i>)</strong>, menandatangani dokumen penyerahan hak, resolusi lembaga pengarah, dan instrumen pindah milik saham bagi pihak saya untuk menguatkuasakan arahan di dalam dokumen ini.
            </td>
        </tr>
    </table>

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>
</div>

<div class="a4-page p-[18mm] dynamic-page">
    <h3 style="margin-top:30px; margin-bottom:15px; font-weight:bold; font-size: 16px;">
        FASAL 3: {{TAJUK_FASAL_3}}
    </h3>
    
    {{KANDUNGAN_FASAL_3}}

<div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>
</div>

<div class="a4-page p-[18mm] dynamic-page">
    <h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold; font-size: 16px;">
        FASAL 4: {{TAJUK_FASAL_4}}
    </h3>
    
    {{KANDUNGAN_FASAL_4}}

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>
</div>

<div class="a4-page p-[18mm]">
    <h3 style="margin-top:30px; margin-bottom:15px; font-weight:bold; font-size: 16px;">
        FASAL 5: KEUTAMAAN ZAKAT, HUTANG DAN HAD WASIAT
    </h3>

    <table width="100%" style="border-collapse:collapse;">
        <tr valign="top">
            <td width="30">5.1</td>
            <td style="padding-bottom:12px; text-align:justify;">
                <strong>Zakat dan Hutang:</strong> Zakat perniagaan yang tertunggak (jika memenuhi syarat) dan hutang perniagaan yang sah yang mengikat diri saya hendaklah diselesaikan mengikut turutan keutamaan undang-undang sebelum baki nilai Saham Syarikat diagihkan.
            </td>
        </tr>
        <tr valign="top">
            <td width="30">5.2</td>
            <td style="padding-bottom:12px; text-align:justify;">
                <strong>Had Kadar Wasiat (Kaedah 1/3):</strong> Sebarang pemberian wasiat kepada bukan waris (<i>ghayr warith</i>) tidak boleh melebihi satu pertiga (1/3) daripada jumlah bersih Harta Pusaka. Sekiranya melebihi kadar ini, atau sekiranya wasiat dibuat kepada waris yang sah, perlaksanaannya terbatal melainkan mendapat persetujuan bertulis waris-waris lain.
            </td>
        </tr>
        <tr valign="top">
            <td width="30">5.3</td>
            <td style="padding-bottom:12px; text-align:justify;">
                <strong>Pengasingan Hibah Semasa Hayat:</strong> Sekiranya mana-mana Saham Syarikat telah tertakluk kepada instrumen Hibah yang sah semasa hayat saya, instrumen tersebut beroperasi secara berasingan dan tidak tertakluk kepada prosedur pentadbiran pusaka ini.
            </td>
        </tr>
    </table>
    
    <h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold; font-size: 16px;">
        FASAL 6: ARAHAN PENGURUSAN SEMASA TEMPOH PERALIHAN
    </h3>

    <table width="100%" style="border-collapse:collapse;">
        <tr valign="top">
            <td width="30">6.1</td>
            <td style="padding-bottom:12px; text-align:justify;">
                Sementara menunggu penyelesaian pentadbiran pusaka, operasi Syarikat hendaklah diteruskan tanpa gangguan bagi memelihara nilai perniagaan.
            </td>
        </tr>
        <tr valign="top">
            <td width="30">6.2</td>
            <td style="padding-bottom:12px; text-align:justify;">
                Sebarang keputusan eksekutif yang mengubah struktur perniagaan (seperti pencairan ekuiti, penjualan aset majoriti, atau liabiliti baharu) dalam tempoh peralihan memerlukan pemantauan dan persetujuan bertulis Wasi.
            </td>
        </tr>
    </table>

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>
</div>

<div class="a4-page p-[18mm]">
    <h3 style="margin-top:30px; margin-bottom:15px; font-weight:bold; font-size: 16px;">
        FASAL 7: PESANAN KEPADA WARIS
    </h3>
    
    {{PESANAN_WASIAT}}
 
<div class="pdf-footer">
<span class="footer-docref"></span>
<span class="page-number"></span>
</div>
 
</div>
 
<div class="a4-page p-[18mm]">
 
<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 8: PERSETUJUAN WARIS & PEMBAHAGIAN MENGIKUT HUKUM FARAID</strong>
</h3>
 
<p>
Saya dengan ini mengakui bahawa saya faham yang permintaan pembahagian saya seperti di atas adalah tertakluk kepada persetujuan waris-waris saya yang sah dan layak mengikut Hukum Faraid. Sekiranya ada di antara mereka yang tidak bersetuju, maka hak mereka seperti yang tertakluk di bawah Hukum Faraid hendaklah diserahkan kepada mereka. Bagi waris-waris yang sah dan layak yang lain yang bersetuju, maka pembahagian untuk mereka yang lain akan mengikut formula seperti yang saya minta.
</p>
 
<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>FASAL 9: KEBOLEHASINGAN (SEVERABILITY)</strong>
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
 

 
<div class="pdf-footer">
<span class="footer-docref"></span>
<span class="page-number"></span>
</div>
 
</div>
 
<div class="a4-page p-[18mm]">
<h2 style="font-family:'Times New Roman', serif; font-size:28px; margin-top:30px; margin-bottom:20px; color:#153638;">
LAMPIRAN : MAKLUMAT SYARIKAT & SAHAM
</h2>

{{LAMPIRAN_KORPORAT}}

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
 

{{LAMPIRAN_WARIS}}

 
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
 

{{LAMPIRAN_PEMEGANG_AMANAH}}

 
<div class="pdf-footer">
 
<span class="docRef"></span>
 
<span class="page-number"></span>
 
</div>
 
</div>
 
`;
