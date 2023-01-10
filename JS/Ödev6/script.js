let baslik = document.querySelector('.baslik') ;
let acikla = document.querySelector('.aciklama');
let foto = document.querySelector('.foto');
let begeni = document.querySelector('.begeni');
let yorum = document.querySelector('.yorum');

let urunler = [];

if(localStorage.getItem('urunler')) {
  urunler = JSON.parse(localStorage.getItem('urunler'));
}

function kaydetBtn() {

  if(baslik.value === '' || acikla.value === '' || foto.value ==='' || begeni.value === '' || yorum.value === ''){
    alert('Gecerli alanlari doldurun.');
  } else {
    const urun = {
        baslik : baslik.value,
        acikla : acikla.value,
        foto : base64String,
        begeni : begeni.value,
        yorum : yorum.value
    };

    urunler.push(urun);
    localStorage.setItem('urunler', JSON.stringify(urunler));
    alert('basarili')

    baslik.value = ''
    acikla.value = ''
    foto.value = ''
    begeni.value = ''
    yorum.value = ''
  }
}



let base64String = "";
      
function imageUpload(event) {
  let file = event.target.files[0];

  var reader = new FileReader();
  
  reader.onload = function() {
    base64String = reader.result;
  }

  reader.readAsDataURL(file);
}


 