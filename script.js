document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.header__nav__burger');
    var mobileMenu = document.querySelector('.mobile-menu');
    var closeButton = document.querySelector('.mobile-menu__close-btn'); 
  
    burger.addEventListener('click', function() {
      mobileMenu.classList.add('active'); 
    });
  
    closeButton.addEventListener('click', function() {
      mobileMenu.classList.remove('active'); 
    });
  });