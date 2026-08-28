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
        <tr valign="top"><td width="30">1.1</td><td style="padding-bottom:8px;"><strong>"Kejadian Pemicu <em>(Trigger Event)</em></strong>" ertinya insiden Kematian atau Keilatan Kekal Menyeluruh (TPD) yang disahkan secara perubatan oleh pengamal perubatan berdaftar ke atas mana-mana Pemegang Saham.</td></tr>
        <tr valign="top"><td width="30">1.2</td><td style="padding-bottom:8px;"><strong>"Pemegang Saham Terjejas"</strong> ertinya Pemegang Saham yang telah mengalami Kejadian Pemicu tersebut.</td></tr>
        <tr valign="top"><td width="30">1.3</td><td style="padding-bottom:8px;"><strong>"Wasi/Pentadbir"</strong> ertinya pihak, waris, penama, atau institusi yang dilantik secara sah mengikut perundangan Syariah mahupun Sivil untuk mentadbir harta pusaka Pemegang Saham Terjejas.</td></tr>
    </table>

    
    <h3 style="font-weight:bold; margin-top:0px; margin-bottom:10px; color:#153638;">FASAL 2: KEWAJIPAN JUALAN DAN BELIAN SAHAM (MANDATORY BUY-SELL OBLIGATION)</h3>
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
    </table>

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>

</div>

<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:15px; line-height:1.6; text-align:justify; color:#222;">


    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 4: PEMBIAYAAN KORPORAT MELALUI TAKAFUL</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top"><td width="30">4.1</td><td style="padding-bottom:8px;">Bagi memastikan kelancaran dan ketersediaan dana untuk melaksanakan obligasi belian saham di bawah Fasal 2, Syarikat dan/atau Pihak-Pihak hendaklah mengambil, mencarum, dan mengekalkan <strong>Polisi Takaful (Keyman)</strong> ke atas hayat setiap Pemegang Saham, dengan jumlah perlindungan yang sekurang-kurangnya menyamai anggaran nilai pasaran pegangan saham masing-masing.</td></tr>
        <tr valign="top"><td width="30">4.2</td><td style="padding-bottom:8px;">Apabila berlakunya Kejadian Pemicu, apa-apa pampasan dan/atau hasil tuntutan yang dibayar di bawah Polisi Takaful tersebut hendaklah dipegang amanah semata-mata bagi tujuan melunaskan balasan belian saham kepada Wasi/Pentadbir Pemegang Saham Terjejas.</td></tr>
    </table>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 5: PEMATUHAN DOKUMEN WASIAT KORPORAT</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top"><td width="30">5.1</td><td style="padding-bottom:8px;">Sebagai balasan kepada kewajipan-kewajipan di bawah Perjanjian ini, setiap Pemegang Saham bersetuju dan berjanji untuk menyempurnakan suatu Deklarasi Wasiat Korporat yang selari dengan Perjanjian ini.</td></tr>
        <tr valign="top"><td width="30">5.2</td><td style="padding-bottom:8px;">Wasiat Korporat tersebut hendaklah memuatkan arahan mandatori yang jelas kepada Wasi/Pentadbir untuk menguatkuasakan pindah milik saham kepada Pemegang Saham yang Masih Hidup tanpa kelewatan dan tanpa membenarkan sebarang bantahan daripada waris-waris Faraid/benefisiari yang lain.</td></tr>
    </table>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 6: KESAN MENGIKAT & UNDANG-UNDANG GUNA PAKAI</h3>
    <table width="100%" style="margin-bottom:30px; border-collapse:collapse;">
        <tr valign="top"><td width="30">6.1</td><td style="padding-bottom:8px;">Perjanjian ini adalah mengikat ke atas waris, pentadbir, wasi, pewaris, dan wakil peribadi yang sah di sisi undang-undang bagi setiap Pihak di sini.</td></tr>
        <tr valign="top"><td width="30">6.2</td><td style="padding-bottom:8px;">Perjanjian ini hendaklah ditafsirkan, dikawal selia, dan dikuatkuasakan selaras dengan Undang-Undang Malaysia dan, tertakluk kepada bidang kuasa khusus, Hukum Syarak yang terpakai di Malaysia.</td></tr>
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
<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:14px; line-height:1.6; text-align:justify; color:#222;">

    <p style="margin-bottom:40px;">
        PADA MENYAKSIKAN HAL DI ATAS, Pihak-Pihak di sini telah menurunkan tandatangan masing-masing pada tarikh yang mula-mula tertulis di atas.
    </p>

    <!-- SIGNATURE 1: PEMEGANG SAHAM A -->
    <table style="width:100%; margin-bottom:40px; border-collapse:collapse;">
        <tr>
            <td width="45%" valign="top" style="height:45px;">
                <p style="font-weight:bold;">DITANDATANGANI OLEH PEMEGANG SAHAM A:</p>
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

    <!-- SIGNATURE 2: PEMEGANG SAHAM B -->
    <table style="width:100%; margin-bottom:40px; border-collapse:collapse;">
        <tr>
            <td width="45%" valign="top" style="height:45px;">
                <p style="font-weight:bold;">DITANDATANGANI OLEH PEMEGANG SAHAM B:</p>
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
                <p><strong>{{NAMA_PARTNER}}</strong></p>
                <p>No. K/P: {{NO_IC_PARTNER}}</p>
            </td>
            <td></td>
            <td valign="top">
                <p>Nama Saksi : </p>
                <p>No. K/P &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </p>
            </td>
        </tr>
    </table>

    <!-- SIGNATURE 3: SYARIKAT -->
    <table style="width:100%; margin-bottom:30px; border-collapse:collapse;">
        <tr>
            <td width="45%" valign="top" style="height:45px;">
                <p style="font-weight:bold;">DITANDATANGANI BAGI PIHAK SYARIKAT:</p>
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
                <p><strong>{{NAMA_WAKIL_SYARIKAT}}</strong></p>
                <p>Pengarah / Setiausaha Syarikat</p>
                <p style="margin-top:5px;">Untuk dan bagi pihak:</p>
                <p><strong>{{NAMA_SYARIKAT}}</strong></p>
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
