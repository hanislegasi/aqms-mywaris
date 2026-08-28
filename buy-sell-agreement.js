const buySellAgreementContent = `

<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:14px; line-height:1.6; text-align:justify; color:#222;">

    <h2 style="font-size:20px; font-weight:bold; text-align:center; margin-bottom:5px; color:#153638;">
        PERJANJIAN JUAL BELI SAHAM & PEWARISAN KORPORAT
    </h2>
    <p style="text-align:center; margin-bottom:30px; font-weight:bold; font-size:16px;">
        (CORPORATE BUY-SELL AND SUCCESSION AGREEMENT)
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

<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:14px; line-height:1.6; text-align:justify; color:#222;">

    <p style="font-weight:bold; margin-bottom:20px; text-align:right; background-color:#f3f4f6; padding:10px;">
        MAKA DENGAN INI, ADALAH DIPERSETUJUI SEPERTI BERIKUT:
    </p>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 1: TAFSIRAN & INTERPRETASI</h3>
    <p style="margin-bottom:10px;">Dalam Perjanjian ini, melainkan jika konteksnya menghendaki makna yang sebaliknya:</p>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top"><td width="30">1.1</td><td style="padding-bottom:8px;">"Kejadian Pemicu (Trigger Event)" ertinya insiden Kematian atau Keilatan Kekal Menyeluruh (TPD) yang disahkan secara perubatan oleh pengamal perubatan berdaftar ke atas mana-mana Pemegang Saham.</td></tr>
        <tr valign="top"><td width="30">1.2</td><td style="padding-bottom:8px;">"Pemegang Saham Terjejas" ertinya Pemegang Saham yang telah mengalami Kejadian Pemicu tersebut.</td></tr>
        <tr valign="top"><td width="30">1.3</td><td style="padding-bottom:8px;">"Wasi / Pentadbir" ertinya pihak, waris, penama, atau institusi yang dilantik secara sah mengikut perundangan Syariah mahupun Sivil untuk mentadbir harta pusaka Pemegang Saham Terjejas.</td></tr>
    </table>

    
    <h3 style="font-weight:bold; margin-top:0px; margin-bottom:10px; color:#153638;">FASAL 2: KEWAJIPAN JUALAN DAN BELIAN SAHAM (MANDATORY BUY-SELL OBLIGATION)</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top">
            <td width="30">2.1</td>
            <td>Tertakluk kepada terma-terma di sini, apabila berlakunya Kejadian Pemicu ke atas mana-mana Pemegang Saham Terjejas:
                <ul style="margin-top:5px; padding-left:20px; list-style-type:lower-alpha;">
                    <li style="margin-bottom:8px;">Wasi / Pentadbir bagi pusaka Pemegang Saham Terjejas adalah TERIKAT SECARA MUTLAK untuk menjual, memindah milik, dan melepaskan kesemua hak ke atas pegangan saham Pemegang Saham Terjejas di dalam Syarikat.</li>
                    <li>Pemegang Saham yang Masih Hidup (Surviving Shareholder) adalah DIWAJIBKAN untuk membeli kesemua saham tersebut, yang mana bahagian pembelian tersebut hendaklah berkadar (pro-rata) mengikut nisbah pegangan saham semasa.</li>
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
                    <li style="margin-bottom:8px;">Formula Nilai Aset Bersih (Net Asset Value - NAV) sepertimana yang disahkan di dalam Laporan Kewangan Beraudit Syarikat bagi tahun kewangan yang terakhir sebelum berlakunya Kejadian Pemicu; ATAU</li>
                    <li>Harga persetujuan bersama (Fixed Agreed Value) yang ditetapkan secara bertulis dari semasa ke semasa. Jika tiada persetujuan bertulis baharu dikemaskini dalam tempoh dua belas (12) bulan sebelum Kejadian Pemicu, nilai di bawah Fasal 3.1(a) hendaklah diguna pakai.</li>
                </ul>
            </td>
        </tr>
    </table>

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>

</div>

<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:14px; line-height:1.6; text-align:justify; color:#222;">


    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 4: PEMBIAYAAN KORPORAT MELALUI TAKAFUL</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top"><td width="30">4.1</td><td style="padding-bottom:8px;">Bagi memastikan kelancaran dan ketersediaan dana untuk melaksanakan obligasi belian saham di bawah Fasal 2, Syarikat dan/atau Pihak-Pihak hendaklah mengambil, mencarum, dan mengekalkan Polisi Takaful (Keyman) ke atas hayat setiap Pemegang Saham, dengan jumlah perlindungan yang sekurang-kurangnya menyamai anggaran nilai pasaran pegangan saham masing-masing.</td></tr>
        <tr valign="top"><td width="30">4.2</td><td style="padding-bottom:8px;">Apabila berlakunya Kejadian Pemicu, apa-apa pampasan dan/atau hasil tuntutan yang dibayar di bawah Polisi Takaful tersebut hendaklah dipegang amanah semata-mata bagi tujuan melunaskan balasan belian saham kepada Wasi / Pentadbir Pemegang Saham Terjejas.</td></tr>
    </table>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 5: PEMATUHAN DOKUMEN WASIAT KORPORAT</h3>
    <table width="100%" style="margin-bottom:15px; border-collapse:collapse;">
        <tr valign="top"><td width="30">5.1</td><td style="padding-bottom:8px;">Sebagai balasan kepada kewajipan-kewajipan di bawah Perjanjian ini, setiap Pemegang Saham bersetuju dan berjanji untuk menyempurnakan suatu Deklarasi Wasiat Korporat yang selari dengan Perjanjian ini.</td></tr>
        <tr valign="top"><td width="30">5.2</td><td style="padding-bottom:8px;">Wasiat Korporat tersebut hendaklah memuatkan arahan mandatori yang jelas kepada Wasi / Pentadbir untuk menguatkuasakan pindah milik saham kepada Pemegang Saham yang Masih Hidup tanpa kelewatan dan tanpa membenarkan sebarang bantahan daripada waris-waris Faraid / benefisiari yang lain.</td></tr>
    </table>

    <h3 style="font-weight:bold; margin-top:20px; margin-bottom:10px; color:#153638;">FASAL 6: KESAN MENGIKAT & UNDANG-UNDANG GUNA PAKAI</h3>
    <table width="100%" style="margin-bottom:30px; border-collapse:collapse;">
        <tr valign="top"><td width="30">6.1</td><td style="padding-bottom:8px;">Perjanjian ini adalah mengikat ke atas waris, pentadbir, wasi, pewaris, dan wakil peribadi yang sah di sisi undang-undang bagi setiap Pihak di sini.</td></tr>
        <tr valign="top"><td width="30">6.2</td><td style="padding-bottom:8px;">Perjanjian ini hendaklah ditafsirkan, dikawal selia, dan dikuatkuasakan selaras dengan Undang-Undang Malaysia dan, tertakluk kepada bidang kuasa khusus, Hukum Syarak yang terpakai di Malaysia.</td></tr>
    </table>

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>

</div>

<div class="a4-page p-[18mm]" style="font-family:'Times New Roman', serif; font-size:14px; line-height:1.6; text-align:justify; color:#222;">

    <p style="font-weight:bold; margin-bottom:30px;">
        PADA MENYAKSIKAN HAL DI ATAS, Pihak-Pihak di sini telah menurunkan tandatangan masing-masing pada tarikh yang mula-mula tertulis di atas.
    </p>

    <table width="100%" style="margin-bottom:50px;">
        <tr valign="top">
            <td width="50%">
                <p style="font-weight:bold; margin-bottom:40px;">DITANDATANGANI OLEH PEMEGANG SAHAM A:</p>
                <p>..................................................</p>
                <p><strong>{{NAMA_PEWASIAT}}</strong></p>
                <p>No. K/P: {{NO_IC_PEWASIAT}}</p>
            </td>
            <td width="50%">
                <p style="font-weight:bold; margin-bottom:40px;">Di hadapan (Saksi):</p>
                <p>Tandatangan: ............................................</p>
                <p>Nama Saksi:</p>
                <p>No. K/P:</p>
            </td>
        </tr>
    </table>

    <table width="100%" style="margin-bottom:50px;">
        <tr valign="top">
            <td width="50%">
                <p style="font-weight:bold; margin-bottom:40px;">DITANDATANGANI OLEH PEMEGANG SAHAM B:</p>
                <p>..................................................</p>
                <p><strong>{{NAMA_PARTNER}}</strong></p>
                <p>No. K/P: {{NO_IC_PARTNER}}</p>
            </td>
            <td width="50%">
                <p style="font-weight:bold; margin-bottom:40px;">Di hadapan (Saksi):</p>
                <p>Tandatangan: ............................................</p>
                <p>Nama Saksi:</p>
                <p>No. K/P:</p>
            </td>
        </tr>
    </table>

    <table width="100%">
        <tr valign="top">
            <td width="50%">
                <p style="font-weight:bold; margin-bottom:40px;">DITANDATANGANI BAGI PIHAK SYARIKAT:</p>
                <p>..................................................</p>
                <p>[NAMA PENGARAH / SETIAUSAHA SYARIKAT]</p>
                <p>Untuk dan bagi pihak:</p>
                <p><strong>{{NAMA_SYARIKAT}}</strong></p>
            </td>
            <td width="50%">
                <!-- Kosong untuk simetri jadual -->
            </td>
        </tr>
    </table>

    <div class="pdf-footer">
        <span class="footer-docref"></span>
        <span class="page-number"></span>
    </div>

</div>

`;
