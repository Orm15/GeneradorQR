function generarQR() {
    document.getElementById("picCenter").style.display = "none";
    var urlInput = document.getElementById("urlInput").value;
    var qrCodeImg = document.getElementById("qrCodeImg");
    var qrContainer = document.getElementById("qrContainer");
    document.getElementById("agregaArbol").style.display = "block";
    document.getElementById("qrContainer").style.display = "block";
    
    if (urlInput.trim() === "") {
        alert("Por favor, ingresa una URL válida.");
        return;
    }
   
    // Mostrar contenedor del QR
    qrContainer.style.display = "block";
 
    // Generar el código QR
    var qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encodeURIComponent(urlInput);
    qrCodeImg.src = qrUrl;
}
 


function descargarQR2() {
    document.getElementById("qrCont").style.display = "none";
    document.getElementById("agregaArbol").style.display = "none";
    // Generar el canvas con el QR
    crearCanvasConImagen2();

    // Obtener el elemento canvas
    var canvas = document.getElementById('miCanvas');

    // Convertir el contenido del canvas en un Blob
    canvas.toBlob(function(blob) {
        // Guardar el Blob como un archivo PNG
        saveAs(blob, 'qr_code.png');
    });
}


function crearCanvasConImagen2() {
    // Obtener las imágenes
    var qrCodeImg = document.getElementById("qrCodeImg");
    var picCenter = document.getElementById("picCenter");

    // Obtener el elemento canvas
    var canvas = document.getElementById('miCanvas');
    var contexto = canvas.getContext('2d');

    // Limpiar el canvas
    contexto.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar la imagen del código QR
    contexto.drawImage(qrCodeImg, 0, 0, canvas.width, canvas.height);

    // Calcular las coordenadas para centrar la imagen pequeña en el canvas
    var x = (canvas.width - picCenter.width) / 2;
    var y = (canvas.height - picCenter.height) / 2;

    // Dibujar la imagen pequeña en el centro del canvas
    contexto.drawImage(picCenter, x, y);
}

function reiniciar() {
    location.reload();
}
