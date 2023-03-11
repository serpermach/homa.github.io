 
//RELOJ
setInterval(showTime, 1000);
  
function showTime() {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        var time = h + ":" + m;
        document.getElementById("clock").innerText = time;
 }
//SLIDER
var slides = document.querySelectorAll('#slider img');
var currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 2000);

//BLACK

function mostrarSaludo() {
    var fecha = new Date();
    var hora = fecha.getHours();
      
    if (hora >= 1 && hora < 7) {
        texto = "";
        estilo = "noche";
      }
  
    if (hora >= 8 && hora < 14) {
      texto = "";
      estilo = "dia";
    }
  
    if (hora >= 15 && hora < 20) {
      texto = "";
      estilo = "tarde";
    }
  
    if (hora >= 21 && hora < 24) {
      texto = "";
      estilo = "noche";
    }
  
    var saludo = document.getElementById("saludo");
    saludo.innerHTML = texto;
    saludo.className = estilo;
  }

  //saludo txt

  var a = new Date();
  var hora = a.getHours();

  var greetingDiv = document.getElementById("greeting");

  if (hora >= 1 && hora <= 7) {
    greetingDiv.innerHTML = "Bona Nit";
  }
  if (hora >= 8 && hora <= 14) {
    greetingDiv.innerHTML = "Bon Dia";
  }
  if (hora >= 15 && hora <= 20) {
    greetingDiv.innerHTML = "Bona Vesprada";
  }
  if (hora >= 21 && hora <= 24) {
    greetingDiv.innerHTML = "Bona Nit";
  }


