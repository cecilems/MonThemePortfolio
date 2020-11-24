// On cible les éléments à modifier
var toggle = document.querySelector(".nav-toggle");
var nav    = document.querySelector(".menu"); 
var page   = document.documentElement;
var links  = document.querySelectorAll(".menu li");

// La fonction permettant de basculer l'affichage en ajoutant/supprimant des classes
function doToggle() {
  toggle.classList.toggle('active');
  nav.classList.toggle('open');
  page.classList.toggle('noscroll');
}

// La fonction doToggle() est appelé lorsqu'on clique sur l'icone de menu
toggle.addEventListener('click', doToggle);

if (window.matchMedia("(max-width: 600px)").matches) {
  links.forEach(function(link){
    link.addEventListener('click', doToggle);
  });
}


$('p.qualite').hide().slideDown();

var p = $('p.qualite');
p.hide().each(function(index){
    $(this).delay(700 * index).slideDown(700);

});


