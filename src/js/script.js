//==>Hamburger Menu show<==//
const hamBurger = document.querySelector(".hamburger");
const hamBurger1 = document.querySelector("#hamburger-1");
const MobMenu = document.querySelector("#mobMenu");

hamBurger.addEventListener("click", function () {
  hamBurger1.classList.toggle("is-active");
});
hamBurger1.addEventListener("click", function () {
  MobMenu.classList.toggle("mob-menu-show");
});
//==>Hamburger Menu close<==//
window.addEventListener("click", function (e) {
  if (e.target != hamBurger1 && e.target != MobMenu) {
    MobMenu.classList.add("mob-menu");
    hamBurger1.classList.add("hamburger");
  }
});
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
