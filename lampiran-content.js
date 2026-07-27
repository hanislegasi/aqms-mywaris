window.generateLampiran = async function(lampiranSnap){

    let lampiranHTML = "";
    let hurufLampiran = "I".charCodeAt(0);

    for(const doc of lampiranSnap.docs){

        const file = doc.data();

        const base64Image =
        await imageToBase64(file.fileURL);

        lampiranHTML += `...`;

        hurufLampiran++;
    }

    return lampiranHTML;

}
