let imgQr = document.getElementById('imgQr'); // div de imgs
let qrImage = document.querySelector('.qrImage'); // img dentro do html 

let inputUrl = document.getElementById('inputUrl'); // value input


function generateQrCode() {
qrImage.style.display = 'block';
  qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ inputUrl.value
}

let btnQr = document.getElementById('generateQr'); // button

btnQr.addEventListener('click', generateQrCode);
