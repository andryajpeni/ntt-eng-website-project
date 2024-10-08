//==>Header Scroll Blur<==//
$(document).ready(function () {
  $(window).scroll(function (e) {
    let s = $(window).scrollTop(),
      filterVal = s === 0 ? 0 : Math.ceil(s / 11);
    $(".blur").css({
      filter: "blur(" + filterVal + "px)",
      "-webkit-filter": "blur(" + filterVal + "px)",
      "-moz-filter": "blur(" + filterVal + "px)",
      "-o-filter": "blur(" + filterVal + "px)",
      "-ms-filter": "blur(" + filterVal + "px)",
    });
  });
});
//==>Hamburger Menu show<==//
const hamBurger = document.querySelector(".hamburger");
const hamBurger1 = document.querySelector("#hamburger-1");
const MobMenu = document.querySelector("#mobMenu");

hamBurger.addEventListener("click", function () {
  hamBurger1.classList.toggle("is-active");
});
hamBurger1.addEventListener("click", function () {
  MobMenu.classList.toggle("mobile-menu-show");
});
//==>Hamburger Menu close<==//
window.addEventListener("click", function (e) {
  if (e.target != hamBurger1 && e.target != MobMenu) {
    MobMenu.classList.add("mobile-menu");
    hamBurger1.classList.add("hamburger");
  }
});
//==>Swipper<==//
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.1,
    },
    // when window width is >= 667px
    667: {
      slidesPerView: 3.1,
    },
    // when window width is >= 920px
    920: {
      slidesPerView: 4.1,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5.2,
    },
  },
});
