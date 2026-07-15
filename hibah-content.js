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
DOKUMEN HIBAH
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



<p style="text-align:center; margin-bottom:20px;">
<strong>Dengan Nama Allah yang Maha Pemurah Lagi Mengasihani</strong>
</p>

<p>
Dokumen Akad Hibah ini disediakan sebagai rekod bertulis mengenai akad hibah yang dibuat secara sukarela oleh Pemberi Hibah kepada Penerima Hibah. Dokumen ini merekodkan butiran pihak-pihak, harta yang dihibahkan, kadar bahagian hibah serta syarat-syarat yang berkaitan sebagai dokumen sokongan dan pembuktian menurut Hukum Syarak serta undang-undang yang berkuat kuasa di Malaysia.
</p>

<p>
Sesungguhnya Harta adalah amanah Allah kepada hambanya, maka adalah atas setiap hamba itu tanggungjawab sebagai Pemegang Amanah untuk mengurus harta dengan sempurna agar sentiasa dimanfaat menurut peraturan yang digariskan oleh Allah S.W.T.
</p>

<p>
Saya, <strong>{{NAMA_PEMBERI}}</strong>, No. K/P <strong>{{IC_PEMBERI}}</strong> (selepas ini disebut Pemegang Amanah) yang beralamat di <strong>{{ALAMAT_PEMBERI}}</strong> adalah seorang warga Malaysia yang mukallaf, sihat tubuh badan dan waras fikiran semasa membuat PENGISYTIHARAN HIBAH ini. 
(Sesalinan Kad Pengenalan Pemegang Amanah dilampirkan dan ditandakan dilampiran A).
</p>

<p>
Matlamat saya menulis SURAT IKATAN HIBAH DAN AMANAH ini adalah sebagai pernyataan bertulis yang menjelaskan kedudukan harta yang telah dihibahkan kepada Benefisiari semasa hayat Pemegang Amanah, dengan harapan agar memudahkan proses penyelesaian pusaka mana-mana pihak sama ada Pemegang Amanah mahupun Benefisiari tanpa wujudnya apa-apa kekeliruan terhadap status harta yang telah dihibahkan tersebut selepas kematian mana-mana pihak.
</p>

<p>
Oleh yang demikian, SURAT IKATAN HIBAH DAN AMANAH ini diyakini berfungsi sebagai dokumen yang menyumbang kepada penyelesaian pusaka yang sempurna, adil dan saksama secara SULH dikalangan ahli waris mana-mana pihak yang meninggal dunia.  
Walaupun begitu, sekiranya wujud keperluan di mana suatu Perintah Pengesahan Hibah akan dituntut dari mana-mana Mahkamah Syariah yang berbidangkuasa, hendaklah SURAT IKATAN HIBAH DAN AMANAH ini menjadi bahan pembuktian penting dan sumber utama yang harus mendapat pertimbangan Mahkamah.
</p>

<p>
Bahawasanya SURAT IKATAN HIBAH DAN AMANAH ini adalah pengisytiharan terakhir dan mana-mana pengisytiharan hibah yang telah dinyatakan terdahulu ke atas harta hibah ini adalah terbatal.
</p>


<div class="pdf-footer">

<span class="footer-docref"></span>

<span class="page-number"></span>

</div>

</div>

<div class="a4-page p-[18mm]">

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

