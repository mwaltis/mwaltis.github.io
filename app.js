const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  const galleryMenu = document.querySelector('#gallery-page');
  const sessionsMenu = document.querySelector('#sessions-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
	servicesMenu.classList.remove('highlight');
	galleryMenu.classList.remove('highlight');
	sessionsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.add('highlight');
	servicesMenu.classList.remove('highlight');
	galleryMenu.classList.remove('highlight');
	sessionsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
	servicesMenu.classList.add('highlight');
	galleryMenu.classList.remove('highlight');
	sessionsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3145) {
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
	servicesMenu.classList.remove('highlight');
	galleryMenu.classList.add('highlight');
	sessionsMenu.classList.remove('highlight');
    return;	
  } else if (window.innerWidth > 960 && scrollPos < 3945) {
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
	servicesMenu.classList.remove('highlight');
	galleryMenu.classList.remove('highlight');
	sessionsMenu.classList.add('highlight');
    return;	
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;	
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);




var images = [
  "./Gear2.jpg",
  "./Gear3.jpg",
  "./Gear4.jpg",
  "./Gear5.jpg",
  "./Gear6.jpg",
  "./Gear7.jpg",
  "./Gear8.jpg",
  "./Gear9.jpg",
  "./Gear10.jpg",
  "./Gear11.JPG",
  "./Gear12.JPG",
  "./Gear13.JPG",
  "./Gear14.JPG",
  "./Gear15.JPG",
  "./Gear16.JPG",
  "./Gear17.JPG",
  "./Gear18.JPG",
  "./Gear19.JPG",
  "./Gear20.JPG",	
  "./Gear1.jpg",
]

var images2 = [
  "./Session2.jpg",
  "./Session3.jpg",
  "./Session4.jpg",
  "./Session5.jpg",
  "./Session6.jpg",
  "./Session7.jpg",
  "./Session8.jpg",
  "./Session9.jpg",
  "./Session10.jpg",
  "./Session11.jpg",
  "./Session12.jpg",
  "./Session13.jpg",
  "./Session14.jpg",
  "./Session15.jpg",
  "./Session16.jpg",
  "./Session17.JPG",
  "./Session18.jpg",
  "./Session19.JPG",
  "./Session20.jpg",
  "./Session1.jpg",
]

var imageHead = document.getElementById("card-3");
var imageHead2 = document.getElementById("card-4");


var i = 0;
setInterval(function() {
      imageHead.style.backgroundImage = "url(" + images[i] + ")";
	  imageHead2.style.backgroundImage = "url(" + images2[i] + ")";
      i = i + 1;	
      if (i == images.length) {
        i =  0;
      };
}, 4000);









