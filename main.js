



//Haciendo interactivo el menu

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuHamIcon = document.querySelector('.menu');
const nav = document.querySelector('nav');
menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    nav.classList.toggle('open');
  }


//Haciendo lo del mapa
var map = L.map('map').setView([13.85054991313553, -88.90463898281068], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

L.marker([13.85054991313553, -88.90463898281068]).addTo(map)
  .bindPopup('¡Hola! Aqui Estamos.')
  .openPopup();


//Hacer interactivo el menu

const conocenos = document.querySelectorAll(".all");
const horarios = document.querySelectorAll(".clothes");
const como = document.querySelectorAll(".elec");
const contacto = document.querySelectorAll(".fur");

//secciones a quitar
const presentacion = document.querySelector(".presentacion");
const frase = document.querySelector(".frase");
const mapa = document.querySelector(".mapa");

//Secciones a mostrar
const secC = document.querySelector(".conoce");
const hora = document.querySelector(".horario");

conocenos.forEach(function(elemento) {
  elemento.addEventListener('click', function() {
    presentacion.classList.add("inactive");
    frase.classList.add("inactive");
    mapa.classList.add("inactive");
    secC.classList.remove("inactive");
    hora.classList.add("inactive");
    mobileMenu.classList.add('inactive');
    nav.classList.remove('open');
  });
});

horarios.forEach(function(elemento) {
  elemento.addEventListener('click', function() {
    presentacion.classList.add("inactive");
    frase.classList.add("inactive");
    mapa.classList.add("inactive");
    secC.classList.add("inactive");
    hora.classList.remove("inactive");
    mobileMenu.classList.add('inactive');
    nav.classList.remove('open');
  });
});

como.forEach(function(elemento) {
  elemento.addEventListener('click', function() {
    presentacion.classList.add("inactive");
    frase.classList.add("inactive");
    mapa.classList.remove("inactive");
    secC.classList.add("inactive");
    hora.classList.add("inactive");
    mobileMenu.classList.add('inactive');
    nav.classList.remove('open');
  });
});

contacto.forEach(function(elemento) {
  elemento.addEventListener('click', function() {
    mobileMenu.classList.add('inactive');
    nav.classList.remove('open');
  });
});

//Dirigiendo a facebook

const face = document.querySelector(".face");

face.addEventListener("click", () => {
  window.location.href = 'https://www.facebook.com/profile.php?id=100093685069037&mibextid=ZbWKwL';
});

//Haciendo el boton de llamar
var button = document.getElementById('scrollButton');
var isClicked = false;

function markClicked() {
  isClicked = true;
}









