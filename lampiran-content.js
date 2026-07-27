async function appendLampiran(finalContent, userId, jenis) {

    const lampiranSnap = await getDocs(
        collection(
            db,
            "users",
            userId,
            `${jenis}Documents`
        )
    );

    if (lampiranSnap.empty) {
        return finalContent;
    }

    let hurufLampiran = "I".charCodeAt(0);

    // Muka surat pemisah
    finalContent += `
    <div class="a4-page p-[18mm]">

        <h1 style="
            margin-top:220px;
            text-align:center;
            font-size:32px;
            font-weight:bold;
        ">
            LAMPIRAN
        </h1>

        <div class="pdf-footer"></div>

    </div>
    `;

    for (const doc of lampiranSnap.docs) {

        const file = doc.data();

        const base64Image =
            await imageToBase64(file.fileURL);

        finalContent += `

        <div class="a4-page p-[18mm]">

            <h2 style="
                font-size:22px;
                font-weight:bold;
                margin-bottom:15px;
            ">

                Lampiran ${String.fromCharCode(hurufLampiran)}

            </h2>

            <p style="
                margin-bottom:20px;
                font-size:15px;
            ">
                ${file.fileName}
            </p>

            <img
                src="${base64Image}"
                style="
                    display:block;
                    max-width:170mm;
                    max-height:220mm;
                    width:auto;
                    height:auto;
                    margin:20px auto;
                    border:1px solid #ccc;
                    object-fit:contain;
                "
            >

            <div class="pdf-footer"></div>

        </div>

        `;

        hurufLampiran++;

    }

    return finalContent;

}
