function generarQR(){
    let input1 = document.getElementById('input1').value.trim();
    let input2 = document.getElementById('input2').value.trim();
    let input3 = document.getElementById('input3').value.trim();
    let input4 = document.getElementById('input4').value.trim();

    let textoCompleto = input1 + " " + input2 + " " + input3 + " " + input4;

    if (textoCompleto === "") {
        alert("Ingresa al menos un texto para generar el QR");
        return;
    }

    // Evitar que se genere más de un QR
    let contenedorQR = document.getElementById('qr-code');
    if (contenedorQR.hasChildNodes()) {
        alert("Ya se generó un código QR. Si quieres generar otro, recarga la página.");
        return;
    }

    let qrCodeURL = 'https://api.qrserver.com/v1/create-qr-code/?size=350x200&data=' + encodeURIComponent(textoCompleto);

    let qrImg = document.createElement('img');
    qrImg.src = qrCodeURL;
    qrImg.alt = 'Código QR generado';
    qrImg.classList.add('qr-code');

    contenedorQR.appendChild(qrImg);

    // Desactivar el botón después de generar el QR
    document.querySelector('button[onclick="generarQR()"]').disabled = true;
    document.querySelector('button[onclick="generarQR()"]').textContent = "QR generado";
}
