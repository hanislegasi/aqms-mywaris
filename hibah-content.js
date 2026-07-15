const hibahContent = `

<div class="a4-page p-[18mm]">

<h2 style="
font-family:'Times New Roman',serif;
font-size:42px;
font-weight:bold;
text-align:center;
color:#153638;
margin-bottom:18px;
">
DOKUMEN AKAD HIBAH
</h2>

<div style="
text-align:center;
font-family:'Amiri',serif;
font-size:30px;
margin-bottom:8px;
">
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
</div>

<p style="text-align:center;">
<strong>Dengan Nama Allah Yang Maha Pemurah Lagi Maha Mengasihani</strong>
</p>

<p>
Dokumen Akad Hibah ini disediakan sebagai suatu rekod bertulis berhubung akad hibah yang dibuat secara sukarela oleh <strong>Pemberi Hibah</strong> kepada <strong>Penerima Hibah</strong>. Dokumen ini merekodkan identiti pihak-pihak yang terlibat, butiran harta yang dihibahkan, kadar bahagian hibah serta syarat-syarat yang dipersetujui sebagai dokumen sokongan dan pembuktian menurut Hukum Syarak serta undang-undang yang berkuat kuasa di Malaysia.
</p>

<p>
Sesungguhnya segala harta adalah amanah Allah SWT kepada hamba-Nya. Setiap pemilik harta bertanggungjawab mengurus dan memanfaatkan harta tersebut dengan sebaik-baiknya menurut syariat Islam serta tidak menzalimi hak mana-mana pihak.
</p>

<p>
Saya, <strong>{{NAMA_PEMBERI}}</strong>, No. Kad Pengenalan
<strong>{{IC_PEMBERI}}</strong>, yang beralamat di
<strong>{{ALAMAT_PEMBERI}}</strong>, dengan ini secara sukarela, tanpa sebarang paksaan, tekanan atau pengaruh mana-mana pihak, mengisytiharkan bahawa saya berhasrat menghibahkan harta-harta yang dinyatakan di dalam dokumen ini kepada Penerima Hibah sebagaimana yang diperincikan di dalam Jadual 1.
</p>

<p>
Dokumen ini disediakan sebagai bukti nyata hasrat dan niat Pemberi Hibah semasa hayatnya serta bertujuan mengelakkan sebarang kekeliruan, pertikaian atau pertindihan tuntutan terhadap harta yang dihibahkan selepas kematian Pemberi Hibah.
</p>

<p>
Dokumen Akad Hibah ini hendaklah dibaca bersama semua jadual, lampiran dan pengesahan yang terkandung di dalamnya dan menjadi rujukan utama berhubung pengisytiharan hibah ini.
</p>

<div class="pdf-footer">
<span class="footer-docref"></span>
<span class="page-number"></span>
</div>

</div>
<div class="a4-page p-[18mm]">

SURAT IKATAN HIBAH DAN AMANAH ini diperbuat pada 	 

ANTARA

<strong>{{NAMA_PEMBERI}}</strong> (NO. K/P:<strong>{{IC_PEMBERI}}</strong>)(selepas ini disebut Pemberi Hibah) yang beralamat di <strong>{{ALAMAT_PEMBERI}}</strong> (selepas ini disebut sebagai "Pemberi Hibah") bagi Harta Amanah seperti yang dinyatakan di dalam Jadual 1.

DENGAN

{{NAMA_PENERIMA}} (K/P :{{IC_PENERIMA}})

(selepas ini disebut sebagai "Penerima Hibah") bagi Harta Amanah seperti yang dinyatakan di dalam Jadual 1.


<h3 style="
margin-bottom:15px;
font-family:Times New Roman, serif;
font-size:16px;
font-weight:600;
color:#153638;
">

MAKLUMAT PEMBERI HIBAH

</h3>

<table
style="
width:100%;
border-collapse:collapse;
font-family:'Times New Roman', serif;
font-size:14px;
margin-top:15px;
margin-bottom:25px;
">

<tr>

<td width="30%"><strong>Nama</strong></td>

<td>{{NAMA_PEMBERI}}</td>

</tr>

<tr>

<td><strong>No. Kad Pengenalan</strong></td>

<td>{{IC_PEMBERI}}</td>

</tr>

<tr>

<td><strong>Alamat</strong></td>

<td>{{ALAMAT_PEMBERI}}</td>

</tr>

<tr>

<td><strong>No. Telefon</strong></td>

<td>{{TELEFON_PEMBERI}}</td>

</tr>

</table>

<h3 style="
margin-bottom:15px;
font-family:Times New Roman, serif;
font-size:16px;
font-weight:600;
color:#153638;
">

MAKLUMAT PENERIMA HIBAH

</h3>

<table
style="
width:100%;
border-collapse:collapse;
font-family:Times New Roman, serif;
font-size:13px;
margin-bottom:25px;
">

<tr>

<td width="30%"><strong>Nama Penerima</strong></td>

<td>{{NAMA_PENERIMA}}</td>

</tr>

<tr>

<td><strong>No. Kad Pengenalan</strong></td>

<td>{{IC_PENERIMA}}</td>

</tr>

<tr>

<td><strong>Hubungan</strong></td>

<td>{{HUBUNGAN}}</td>

</tr>

<tr>

<td><strong>Bahagian Hibah</strong></td>

<td>{{PERATUS}}%</td>

</tr>

</table>



<br>

<h3
style="
font-family:'Times New Roman', serif;
font-size:18px;
font-weight:bold;
color:#153638;
margin-top:25px;
margin-bottom:12px;
">
SENARAI HARTA ALIH YANG DIHIBAHKAN
</h3>

{{TABLE_ALIH}}

<div class="pdf-footer">

<span class="footer-docref"></span>

<span class="page-number"></span>

</div>

</div>

<div class="a4-page p-[18mm]">

<br><br>

<h3
style="
font-family:'Times New Roman', serif;
font-size:18px;
font-weight:bold;
color:#153638;
margin-top:25px;
margin-bottom:12px;
">
SENARAI HARTA TAK ALIH YANG DIHIBAHKAN
</h3>

{{TABLE_TAK_ALIH}}

<div class="pdf-footer">

<span class="footer-docref"></span>

<span class="page-number"></span>

</div>

</div>

`;

