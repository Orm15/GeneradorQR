function generarQR() {
    var urlInput = document.getElementById("urlInput").value;
    var qrCodeImg = document.getElementById("qrCodeImg");
    var qrCodeContainer = document.getElementById("qrCodeContainer");

    if (urlInput.trim() === "") {
        alert("Por favor, ingresa una URL válida.");
        return;
    }

    // Limpiar el contenedor del código QR anterior (si lo hay)
    qrCodeImg.src = "";
    qrCodeContainer.style.display = "none";

    // Generar el código QR
    var qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encodeURIComponent(urlInput);
    qrCodeImg.src = qrUrl;
    qrCodeContainer.style.display = "block";
}
