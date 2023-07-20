



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
var map = L.map('map').setView([ 31.2504400, -99.2506100], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 5,
}).addTo(map);

L.marker([ 31.2504400, -99.2506100]).addTo(map)
  .bindPopup('¡Hello! We are in Texas')
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
  window.open('https://www.facebook.com/profile.php?id=100094587115402', '_blank');
});

//Haciendo el boton de llamar
var button = document.getElementById('scrollButton');
var isClicked = false;

function markClicked() {
  isClicked = true;
}

//Haciendo el boton de llamar
var buttonLlamar = document.getElementsByClassName('.llamar');
var isClickedL = false;

function markClicked() {
  isClickedL = true;
}

const closeMenu = document.querySelector(".closeMenu img");

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle('inactive');
    nav.classList.toggle('open');
});

const reiniciar = document.querySelector(".logo");
reiniciar.addEventListener("click", () => {
  location.reload(); // Esta línea reiniciará la página
});









