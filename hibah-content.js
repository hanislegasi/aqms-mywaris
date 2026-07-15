const hibahContent = `

<div class="a4-page p-[18mm]">

<h2
style="
font-family:'Times New Roman', serif;
font-size:42px;
font-weight:bold;
text-align:center;
color:#153638;
margin-bottom:30px;
">

DOKUMEN AKAD HIBAH

</h2>

<p>

Nama Penerima :

<strong>

{{NAMA_PENERIMA}}

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
