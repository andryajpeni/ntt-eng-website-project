//==> Desktop Menu Show <==//
const drop1 = document.querySelector("#btnServ");
const navMenu1 = document.querySelector("#servMenu");
drop1.addEventListener("click", function () {
  navMenu1.classList.toggle("serv-menu-show");
});
const drop2 = document.querySelector("#btnProf");
const navMenu2 = document.querySelector("#profMenu");
drop2.addEventListener("click", function () {
  navMenu2.classList.toggle("prof-menu-show");
});
//==> Desktop Menu Close <==//
window.addEventListener("click", function (e) {
  if (e.target != drop1 && e.target != navMenu1) {
    navMenu1.classList.remove("serv-menu-show");
    navMenu1.classList.add("serv-menu");
  }
});
window.addEventListener("click", function (e) {
  if (e.target != drop2 && e.target != navMenu2) {
    navMenu2.classList.remove("prof-menu-show");
    navMenu2.classList.add("prof-menu");
  }
});
// scoll to hide header
// var divs = $("header");
// $(window).on("scroll", function () {
//   var st = $(this).scrollTop();
//   divs.css({ opacity: 1 - st / 700 });
//   divs.css({ "transition-delay": "0s" });
//   divs.css({ transition: "0.05s ease-in-out" });
// });

//==> Hamburger Menu <==//
const hamBurger = document.querySelector(".hamburger");
const hamBurger1 = document.querySelector("#hamburger-1");
const MobMenu = document.querySelector("#mobMenu");

hamBurger.addEventListener("click", function () {
  hamBurger1.classList.toggle("is-active");
});
hamBurger1.addEventListener("click", function () {
  MobMenu.classList.toggle("mob-menu-show");
});
window.addEventListener("click", function (e) {
  if (e.target != hamBurger1 && e.target != MobMenu && e.target != hamBurger1) {
    MobMenu.classList.add("mob-menu");
    MobMenu.classList.remove("mob-menu-show");
    hamBurger1.classList.add("hamBurger");
    hamBurger1.classList.remove("is-active");
  }
});

//==> Mob Menu Custom <==//
const mobServ = document.querySelector("#mob-nav-serv");
const mobProf = document.querySelector("#mob-nav-prof");
const mobServBtn = document.querySelector("#mobile-nav-servx");
const mobProfBtn = document.querySelector("#mobile-nav-provx");
mobServBtn.addEventListener("click", function () {
  mobServ.classList.toggle("nav-mobile-menu-serv-show");
});
mobProfBtn.addEventListener("click", function () {
  mobProf.classList.toggle("nav-mobile-menu-prof-show");
});
window.addEventListener("click", function (e) {
  if (e.target != mobServBtn && e.target != mobServ) {
    mobServ.classList.remove("nav-mobile-menu-serv-show");
    mobServ.classList.add("nav-mobile-menu-serv");
  }
});
window.addEventListener("click", function (e) {
  if (e.target != mobProfBtn && e.target != navMenu2) {
    mobProf.classList.remove("nav-mobile-menu-prof-show");
    mobProf.classList.add("nav-mobile-menu-prof");
  }
});
//==> Mob Menu Custom <==//
