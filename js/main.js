var swiper = new Swiper(".mySwiper", {
  cssMode: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener('click', ()=> {
  menu.classList.toggle('menu__list--active');
});

new Accordion('.accordion-container');