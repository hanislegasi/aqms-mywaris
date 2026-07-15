const hibahContent = `

<div class="a4-page p-[18mm]">

<h2
style="
font-family:'Times New Roman', serif;
font-size:42px;
font-weight:700;
letter-spacing:1px;
text-align:center;
color:#153638;
margin-bottom:30px;
">

DOKUMEN AKAD HIBAH

</h2>

<div style="
text-align:center;
font-size:30px;
margin-top:25px;
margin-bottom:15px;
font-family:'Amiri',serif;
">
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
</div>

<p style="
font-family:'Times New Roman', serif;
font-size:15px;
line-height:1.6;
text-align:justify;
">

Dengan nama Allah Yang Maha Pemurah lagi Maha Mengasihani.

Dokumen Akad Hibah ini disediakan sebagai rekod bertulis mengenai akad hibah yang dibuat secara sukarela oleh Pemberi Hibah kepada Penerima Hibah. Dokumen ini merekodkan butiran pihak-pihak, harta yang dihibahkan, kadar bahagian hibah serta syarat-syarat yang berkaitan sebagai dokumen sokongan dan pembuktian menurut Hukum Syarak serta undang-undang yang berkuat kuasa di Malaysia.

</p>

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

window.hibahContent = hibahContent;
