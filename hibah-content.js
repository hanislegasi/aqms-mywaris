const hibahContent = `

<div class="a4-page p-[18mm]">

<h2
style="
font-family:'Times New Roman', serif;
font-size:48px;
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
font-family:Inter,sans-serif;
font-size:14px;
line-height:1.8;
text-align:justify;
">

Dengan nama Allah Yang Maha Pemurah lagi Maha Mengasihani.

Dokumen Akad Hibah ini dibuat secara sukarela oleh Pemberi Hibah sebagai bukti nyata hasrat untuk menghibahkan harta kepada Penerima Hibah sebagaimana yang diperincikan dalam dokumen ini. Dokumen ini turut merekodkan butiran harta, kadar bahagian hibah, serta persetujuan pihak-pihak yang terlibat sebagai rekod bertulis bagi tujuan pembuktian sekiranya diperlukan menurut undang-undang dan Hukum Syarak.

</p>

<h3 style="
margin-top:30px;
margin-bottom:15px;
font-family:Inter,sans-serif;
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
font-family:Inter,sans-serif;
font-size:13px;
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
font-family:Inter,sans-serif;
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
font-family:Inter,sans-serif;
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

</strong>

</p>

<br>

<h3>HARTA ALIH</h3>

{{TABLE_ALIH}}

<br><br>

<h3>HARTA TAK ALIH</h3>

{{TABLE_TAK_ALIH}}

<div class="pdf-footer">

<span class="docRef"></span>

<span class="page-number"></span>

</div>

</div>

`;

window.hibahContent = hibahContent;
