const hibahContent = `

<div class="a4-page p-[18mm]">



<h2
style="
font-family:'Times New Roman', serif;
font-size:42px;
font-weight:700;
margin-top:0;
margin-bottom:20px;
color:#153638;
text-align:center;
letter-spacing:1px;
">
DOKUMEN AKAD HIBAH
</h2>

<div
style="
text-align:center;
font-size:30px;
margin-bottom:10;
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
Dokumen ini merupakan Akad Hibah bagi penerima hibah yang dinamakan di bawah.

    </p>

    <br>

    <table
    style="
    width:100%;
    border-collapse:collapse;
    font-size:15px;
    ">

        <tr>

            <td
            style="
            border:1px solid #000;
            padding:10px;
            width:35%;
            font-weight:bold;
            ">

                Nama Penerima

            </td>

            <td
            style="
            border:1px solid #000;
            padding:10px;
            ">

                {{NAMA_PENERIMA}}

            </td>

        </tr>

    </table>

    <br><br>

    <h3>HARTA ALIH</h3>

    {{TABLE_ALIH}}

    <br><br>

    <h3>HARTA TAK ALIH</h3>

    {{TABLE_TAK_ALIH}}

    <br><br>

    <div class="pdf-footer">

        <span class="docRef"></span>

        <span class="page-number"></span>

    </div>

</div>

`;

<div class="pdf-footer">

<span class="docRef"></span>

<span class="page-number"></span>

</div>

</div>

<div class="a4-page p-[18mm]">

<h3 style="margin-top:40px; margin-bottom:15px; font-weight:bold;">
<strong>7. PEMBATALAN DOKUMEN SEBELUM INI</strong>
</h3>
<p>
Seperti di dalam ikrar permulaan Dokumen ini, saya dengan ini memaklumkan bahawa apa-apa sahaja dokumen wasiat saya yang terdahulu yang telah saya buat sebelum ini dan sebelum Dokumen Wasiat ini dibuat adalah terbatal sendirinya.
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

<span class="docRef"></span>

<span class="page-number"></span>

</div>

</div>

</div>



   
<div class="a4-page p-[18mm]">

<div class="mt-8">

<strong>PENGAKUAN PEWASIAT</strong>
<p>
Saya dengan ini mengaku bahawa segala maklumat yang dinyatakan dalam dokumen Wasiat ini adalah benar dan tepat mengikut pengetahuan saya.
</p>
<br>


<p>.......................................</p>

<p>
(Tandatangan Pewasiat)
</p>

<table
style="
margin-top:30px;
font-size:14px;
">

<tr>
<td width="100">
Nama
</td>

<td width="20">
:
</td>

<td>
<strong>{{NAMA_PEWASIAT}}</strong>
</td>
</tr>

<tr>
<td>
No. K/P
</td>

<td>
:
</td>

<td>
<strong>{{NO_IC_PEWASIAT}}</strong>
</td>
</tr>

<tr>
<td>
Tarikh
</td>

<td>
:
</td>

<td>
</td>
</tr>

</table>

</div>
<br>
<strong>PENGESAHAN SAKSI</strong>
<p>
Kami yang bertandatangan di bawah mengesahkan bahawa Pewasiat telah menandatangani dokumen ini di hadapan kami dan pada pemerhatian kami, 
Pewasiat berada dalam keadaan waras serta membuat Wasiat ini secara sukarela.
</p>

<table
style="
width:100%;
margin-top:50px;
">

<tr valign="top">

<td width="45%">

<p>.......................................</p>

<p>Tandatangan saksi 1</p>

<table style="margin-top:15px;">

<tr>
<td width="80">Nama</td>
<td width="20">:</td>
<td></td>
</tr>

<tr>
<td>No. K/P</td>
<td>:</td>
<td></td>
</tr>

<tr>
<td>Tarikh</td>
<td>:</td>
<td></td>
</tr>

</table>

</td>

<td width="10%"></td>

<td width="45%">

<p>.......................................</p>

<p>Tandatangan saksi 2</p>

<table style="margin-top:15px;">

<tr>
<td width="80">Nama</td>
<td width="20">:</td>
<td></td>
</tr>

<tr>
<td>No. K/P</td>
<td>:</td>
<td></td>
</tr>

<tr>
<td>Tarikh</td>
<td>:</td>
<td></td>
</tr>

</table>

</td>

</tr>

<tr>
<td colspan="3" height="60"></td>
</tr>

<tr valign="top">

<td>

<p>.......................................</p>

<p>Tandatangan saksi 3</p>

<table style="margin-top:15px;">

<tr>
<td width="80">Nama</td>
<td width="20">:</td>
<td></td>
</tr>

<tr>
<td>No. K/P</td>
<td>:</td>
<td></td>
</tr>

<tr>
<td>Tarikh</td>
<td>:</td>
<td></td>
</tr>

</table>

</td>

<td></td>

<td>

<p>.......................................</p>

<p>Tandatangan saksi 4</p>

<table style="margin-top:15px;">

<tr>
<td width="80">Nama</td>
<td width="20">:</td>
<td></td>
</tr>

<tr>
<td>No. K/P</td>
<td>:</td>
<td></td>
</tr>

<tr>
<td>Tarikh</td>
<td>:</td>
<td></td>
</tr>

</table>

</td>

</tr>

</table>

<div class="pdf-footer">

<span class="docRef"></span>

<span class="page-number"></span>

</div>

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

<div class="a4-page p-[18mm]">

<h2
style="
font-family:'Times New Roman', serif;
font-size:28px;
margin-top:30px;
margin-bottom:20px;
color:#153638;
">
LAMPIRAN C : HARTA ALIH
</h2>

<div>
{{LAMPIRAN_HARTA_ALIH}}
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
LAMPIRAN D : HARTA TAK ALIH
</h2>

<div>
{{LAMPIRAN_HARTA_TAK_ALIH}}
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
LAMPIRAN E : HARTA BERPENAMA
</h2>

<div>
{{LAMPIRAN_BERPENAMA}}
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
LAMPIRAN F : TAKAFUL
</h2>

<div>
{{LAMPIRAN_TAKAFUL}}
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
LAMPIRAN G : PEMIUTANG
</h2>

<div>
{{LAMPIRAN_PEMIUTANG}}
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
LAMPIRAN H : PENGHUTANG
</h2>

<div>
{{LAMPIRAN_PENGHUTANG}}
</div>

<div class="pdf-footer">

<span class="docRef"></span>

<span class="page-number"></span>

</div>

</div>

`;
