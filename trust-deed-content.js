const trustDeedContent = `

<!-- ================= PAGE 1 ================= -->
<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:15px; line-height:1.6; text-align:justify; color:#222;">

    <h2 style="font-size:20px; font-weight:bold; text-align:center; margin-bottom:5px; color:#153638;">
        SURAT IKATAN AMANAH KORPORAT
    </h2>
    <p style="text-align:center; margin-bottom:30px; font-weight:bold; font-size:20px;">
        (CORPORATE TRUST DEED)
    </p>

    <p style="margin-bottom:20px;">
        <strong>SURAT IKATAN AMANAH INI</strong> diperbuat pada haribulan <strong>{{TARIKH_PERJANJIAN}}</strong>
    </p>

    <p style="font-weight:bold; margin-bottom:10px;">ANTARA:</p>

    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top">
            <td width="40">(1)</td>
            <td><strong>{{NAMA_PEWASIAT}}</strong> (No. K/P: <strong>{{NO_IC_PEWASIAT}}</strong>), warganegara Malaysia yang beralamat di <strong>{{ALAMAT_PEWASIAT}}</strong> (selepas ini dirujuk sebagai <strong>"Pembuat Amanah / Settlor"</strong>);</td>
        </tr>
    </table>

    <p style="font-weight:bold; margin-bottom:10px;">DAN</p>

    <table width="100%" style="margin-bottom:30px; border-collapse:collapse;">
        <tr valign="top">
            <td width="40">(2)</td>
            <td><strong>{{NAMA_WASI1}}</strong> (No. Pendaftaran/K/P: <strong>{{NO_IC_WASI1}}</strong>), yang beralamat di <strong>{{ALAMAT_WASI1}}</strong> (selepas ini dirujuk sebagai <strong>"Pemegang Amanah / Trustee"</strong>).</td>
        </tr>
    </table>

    <p style="font-weight:bold; margin-bottom:10px;">BAHAWASANYA (RECITALS):</p>

    <table width="100%" style="margin-bottom:30px; border-collapse:collapse;">
        <tr valign="top">
            <td width="40">A.</td>
            <td style="padding-bottom:10px;">Pembuat Amanah merupakan pemilik sah dan pemilik benefisial ke atas <strong>{{SAHAM_PEWASIAT}}</strong> unit saham biasa di dalam <strong>{{NAMA_SYARIKAT}}</strong> (No. SSM: <strong>{{NO_SSM}}</strong>) (selepas ini dirujuk sebagai "Saham Amanah").</td>
        </tr>
        <tr valign="top">
            <td width="40">B.</td>
            <td style="padding-bottom:10px;">Bagi memastikan kelangsungan perniagaan dan melindungi kepentingan legasi pewarisan, Pembuat Amanah berhasrat untuk mewujudkan satu ikatan amanah ke atas Saham Amanah tersebut berserta apa-apa hasil, dividen, atau pampasan kewangan <strong>(Takaful Keyman)</strong> yang terbit daripadanya, untuk diuruskan oleh Pemegang Amanah tertakluk kepada terma-terma di bawah.</td>
        </tr>
        <tr valign="top">
            <td width="40">C.</td>
            <td style="padding-bottom:10px;">Pemegang Amanah dengan ini bersetuju untuk menerima pelantikan tersebut dan bertindak sebagai pemegang amanah yang sah mengikut peruntukan <strong>Akta Pemegang Amanah 1949</strong> dan/atau prinsip Syariah yang terpakai.</td>
        </tr>
    </table>

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>
</div>

<!-- ================= PAGE 2 ================= -->
<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:15px; line-height:1.6; text-align:justify; color:#222;">

    <p style="font-weight:bold; margin-bottom:20px; padding:10px;">
        MAKA DENGAN INI ADALAH DIPERSETUJUI SEPERTI BERIKUT:
    </p>

    <h3 style="font-size:16px; font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 1: PENGISYTIHARAN AMANAH</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top">
            <td width="30">1.1</td>
            <td style="padding-bottom:8px; text-align:justify;">Pembuat Amanah dengan ini mengisytiharkan secara mutlak bahawa bermula dari tarikh Surat Ikatan ini, Saham Amanah hendaklah dipegang di bawah suatu <strong>Amanah (Trust)</strong> oleh Pemegang Amanah, dan Pembuat Amanah melepaskan semua hak milik benefisial ke atas saham tersebut untuk manfaat Penerima Manfaat yang dinamakan, melainkan Pembuat Amanah masih hidup dan mengekalkan hak mengundi dan dividen semasa hayatnya.</td>
        </tr>
    </table>

    <h3 style="font-size:16px; font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 2: MEKANISME PELAKSANAAN DAN PENGAGIHAN AMANAH</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top">
            <td width="30">2.1</td>
            <td style="padding-bottom:8px; text-align:justify;">Sekiranya berlaku kematian atau Keilatan Kekal Menyeluruh (TPD) ke atas Pembuat Amanah, Pemegang Amanah hendaklah mentadbir Saham Amanah berpandukan arahan mandatori berikut:</td>
        </tr>
    </table>
    
    <!-- BAHAGIAN DINAMIK: HIBAH / BUY-SELL -->
    <div style="margin-left:30px; margin-bottom:20px; padding:15px; border-left:3px solid #153638; background-color:#fafafa;">
        {{KLAUSA_MEKANISME_AMANAH}}
    </div>

    <h3 style="font-size:16px; font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 3: KUASA-KUASA PEMEGANG AMANAH</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top">
            <td width="30">3.1</td>
            <td style="padding-bottom:8px; text-align:justify;">Tertakluk kepada <strong>Akta Pemegang Amanah 1949</strong>, Pemegang Amanah diberi kuasa mutlak untuk memindah milik saham, menandatangani resolusi syarikat mewakili saham amanah, memfailkan tuntutan pampasan Takaful, dan mencairkan aset (jika diarahkan melalui Fasal 2) tanpa perlu merujuk kepada Mahkamah atau waris Faraid.</td>
        </tr>
        <tr valign="top">
            <td width="30">3.2</td>
            <td style="padding-bottom:8px; text-align:justify;">Sekiranya Penerima Manfaat adalah kanak-kanak di bawah umur lapan belas (18) tahun atau Orang Kurang Upaya (OKU), Pemegang Amanah berhak untuk memegang saham/wang tunai tersebut dalam satu akaun amanah berasingan dan menggunakan hasilnya bagi tujuan penyelenggaraan, pendidikan, dan kebajikan mereka.</td>
        </tr>
    </table>

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>
</div>

<!-- ================= PAGE 3 ================= -->
<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:15px; line-height:1.6; text-align:justify; color:#222;">

    <h3 style="font-size:16px; font-weight:bold; margin-top:0px; margin-bottom:10px; color:#153638;">FASAL 4: PERLINDUNGAN & IMBUHAN PEMEGANG AMANAH</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top">
            <td width="30">4.1</td>
            <td style="padding-bottom:8px; text-align:justify;">Pemegang Amanah (terutamanya jika Syarikat Amanah) berhak untuk menuntut dan dibayar fi pentadbiran yang munasabah daripada dana atau hasil jualan Saham Amanah mengikut jadual fi <em>(fee schedule)</em> rasmi mereka pada waktu pentadbiran.</td>
        </tr>
        <tr valign="top">
            <td width="30">4.2</td>
            <td style="padding-bottom:8px; text-align:justify;">Pemegang Amanah tidak boleh dipertanggungjawabkan atas sebarang kerugian modal ke atas Saham Amanah melainkan kerugian tersebut berpunca daripada penipuan (fraud) atau kecuaian kasar (gross negligence) Pemegang Amanah.</td>
        </tr>
    </table>

    <h3 style="font-size:16px; font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 5: UNDANG-UNDANG TERPAKAI</h3>
    <table width="100%" style="margin-bottom:30px; border-collapse:collapse;">
        <tr valign="top">
            <td width="30">5.1</td>
            <td style="padding-bottom:8px; text-align:justify;">Surat Ikatan Amanah ini hendaklah ditafsir mengikut peruntukan undang-undang Malaysia dan prinsip-prinsip Syariah (jika berkaitan). Sebarang pertikaian tidak membatalkan niat asal pewarisan korporat yang terkandung di sini.</td>
        </tr>
    </table>


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
<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:15px; line-height:1.6; text-align:justify; color:#222;">


    <p style="margin-bottom:40px;">
        PADA MENYAKSIKAN HAL DI ATAS, pihak-pihak dengan ini bersetuju mengikat diri mereka terhadap terma-terma di dalam Surat Ikatan Amanah ini pada tarikh ia ditandatangani.
    </p>

    <!-- SIGNATURE 1: PEMBUAT AMANAH -->
    <table style="width:100%; margin-bottom:40px; border-collapse:collapse;">
        <tr>
            <td width="45%" valign="top" style="height:45px;">
                <p style="font-weight:bold;">DITANDATANGANI OLEH PEMBUAT AMANAH / SETTLOR:</p>
            </td>
            <td width="10%"></td>
            <td width="45%" valign="top">
                <p style="font-weight:bold;">Di hadapan (Saksi):</p>
            </td>
        </tr>
        <tr>
            <td valign="bottom" style="padding-bottom:5px;">
                <p>..................................................</p>
            </td>
            <td></td>
            <td valign="bottom" style="padding-bottom:5px;">
                <p>..................................................</p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p><strong>{{NAMA_PEWASIAT}}</strong></p>
                <p>No. K/P: {{NO_IC_PEWASIAT}}</p>
            </td>
            <td></td>
            <td valign="top">
                <p>Nama Saksi : </p>
                <p>No. K/P &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
            </td>
        </tr>
    </table>

    <!-- SIGNATURE 2: PEMEGANG AMANAH -->
    <table style="width:100%; margin-bottom:30px; border-collapse:collapse;">
        <tr>
            <td width="45%" valign="top" style="height:45px;">
                <p style="font-weight:bold;">DITERIMA OLEH PEMEGANG AMANAH / TRUSTEE:</p>
            </td>
            <td width="10%"></td>
            <td width="45%" valign="top">
                <p style="font-weight:bold;">Di hadapan (Saksi):</p>
            </td>
        </tr>
        <tr>
            <td valign="bottom" style="padding-bottom:5px;">
                <p>..................................................</p>
            </td>
            <td></td>
            <td valign="bottom" style="padding-bottom:5px;">
                <p>..................................................</p>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <p><strong>{{NAMA_WASI1}}</strong></p>
                <p>No. Pendaftaran/K/P: {{NO_IC_WASI1}}</p>
            </td>
            <td></td>
            <td valign="top">
                <p>Nama Saksi : </p>
                <p>No. K/P &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
            </td>
        </tr>
    </table>

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>

</div>

`;
