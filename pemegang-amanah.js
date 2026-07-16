function generatePemegangAmanah(item, data){
    if(
        item.status !== "bawah18" &&
        item.status !== "oku"
    ){
        return "";
    }

    const p = item.pemegangAmanah;

    if(
        !p ||
        p.pilihan !== "ya"
    ){
        return "";
    }

return `

<div class="a4-page p-[18mm]">

<h2
style="
font-family:'Times New Roman',serif;
font-size:42px;
font-weight:bold;
text-align:center;
color:#153638;
margin-bottom:20px;
">
DOKUMEN PELANTIKAN PEMEGANG AMANAH
</h2>

<div
style="
text-align:center;
font-family:'Amiri',serif;
font-size:28px;
margin-bottom:15px;
">
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
</div>

<p style="text-align:center;">
<strong>
Dengan Nama Allah Yang Maha Pemurah Lagi Maha Mengasihani
</strong>
</p>

<p>
Saya naik saksi bahawa tiada Tuhan yang disembah melainkan Allah S.W.T. dan Nabi Muhammad S.A.W. ialah Pesuruh Allah. Segala puji bagi Allah Tuhan sekalian alam. Selawat dan salam ke atas junjungan besar Nabi Muhammad S.A.W.
</p>

<p>

Saya,

<strong>{{NAMA_PEMBERI}}</strong>

(No. Kad Pengenalan

<strong>{{IC_PEMBERI}}</strong>)

yang beralamat di

<strong>{{ALAMAT_PEMBERI}}</strong>

dengan ini mengaku bahawa saya seorang Islam, cukup umur, sempurna akal fikiran serta bertindak secara sukarela tanpa sebarang paksaan.

</p>

<p>

Dengan ini saya melantik

<strong>${p.nama}</strong>

(No. Kad Pengenalan

<strong>${p.ic}</strong>)

selaku

<strong>Pemegang Amanah</strong>

bagi mengurus dan menjaga kepentingan Penerima Hibah berikut:

</p>

<table
style="
width:100%;
border-collapse:collapse;
font-family:'Times New Roman',serif;
font-size:14px;
margin-top:15px;
margin-bottom:20px;
">

<tr>

<th style="border:1px solid #000;padding:8px;">
Nama Penerima Hibah
</th>

<th style="border:1px solid #000;padding:8px;">
No. Kad Pengenalan
</th>

<th style="border:1px solid #000;padding:8px;">
Hubungan
</th>

<th style="border:1px solid #000;padding:8px;">
Status
</th>

</tr>

<tr>

<td style="border:1px solid #000;padding:8px;">
${item.nama}
</td>

<td style="border:1px solid #000;padding:8px;">
${item.ic}
</td>

<td style="border:1px solid #000;padding:8px;">
${item.hubungan}
</td>

<td style="border:1px solid #000;padding:8px;">
${
item.status=="bawah18"
?"Bawah 18 Tahun"
:item.status=="oku"
?"OKU"
:"Dewasa"
}
</td>

</tr>

</table>

<p>

Penerima Hibah tersebut merupakan

<strong>
kanak-kanak di bawah umur lapan belas (18) tahun
</strong>

dan oleh itu segala hak, kepentingan serta manfaat daripada harta yang dihibahkan hendaklah diuruskan oleh Pemegang Amanah sehingga Penerima Hibah mencapai umur yang dibenarkan atau mengikut Hukum Syarak serta undang-undang yang berkuat kuasa.

</p>

<p>
Pemegang Amanah hendaklah menjalankan tanggungjawab dengan jujur, ikhlas dan amanah bagi menjaga kepentingan Penerima-Penerima Harta seperti yang termaktub di dalam Hukum Syarak.</p>

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

<strong>PENGAKUAN PEMBERI HIBAH</strong>
<p>
Saya dengan ini mengaku bahawa segala maklumat yang dinyatakan dalam dokumen Wasiat ini adalah benar dan tepat mengikut pengetahuan saya.
</p>
<br>


<p>.......................................</p>

<p>
(Tandatangan Pemberi Hibah)
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
<strong>{{NAMA_PEMBERI}}</strong>
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
<strong>{{IC_PEMBERI}}</strong>
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



`;

}

window.generatePemegangAmanah = generatePemegangAmanah;
