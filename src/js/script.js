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
  if (e.target != hamBurger1 && e.target != MobMenu) {
    MobMenu.classList.add("mob-menu");
    hamBurger1.classList.add("hamburger");
  }
});
