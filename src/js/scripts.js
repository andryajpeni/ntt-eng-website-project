window.onscroll = stickyNav;
function stickyNav() {
  const header = document.getElementById("yl-nav");

  const navLink1 = document.getElementById("yl-navlink1");
  const navLink2 = document.getElementById("yl-navlink2");
  const navLink3 = document.getElementById("yl-navlink3");
  const navLink4 = document.getElementById("yl-navlink4");
  const hamb1 = document.getElementById("line1");
  const hamb2 = document.getElementById("line2");
  const logotxt = document.getElementById("yl-logo-txt");

  if (window.pageYOffset > 1) {
    header.style.position = "fixed";
    header.style.top = "0";

    $("#yl-logo").attr("src", "./public/favicon/gmit-dark 300x269.png");
    header.style.background = "rgba(255, 255, 255, 1)";
    header.style.boxShadow = "0px 0px 7px 0px rgba(0, 0, 0, 0.25)";
    logotxt.style.color = "rgba(0, 0, 0, 1)";
    navLink1.style.color = "rgba(0, 0, 0, 1)";
    navLink2.style.color = "rgba(0, 0, 0, 1)";
    navLink3.style.color = "rgba(0, 0, 0, 1)";
    navLink4.style.color = "rgba(0, 0, 0, 1)";
    hamb1.style.background = "rgba(0, 0, 0, 1)";
    hamb2.style.background = "rgba(0, 0, 0, 1)";
  } else {
    header.style.position = "";
    header.style.top = "0";
    $("#yl-logo").attr("src", "./public/favicon/gmit-light 300x269.png");
    header.style.background = "transparent";
    header.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)";
    navLink1.style.color = "rgba(255, 255, 255, 1)";
    logotxt.style.color = "rgba(255, 255, 255, 1)";
    navLink2.style.color = "rgba(255, 255, 255, 1)";
    navLink3.style.color = "rgba(255, 255, 255, 1)";
    navLink4.style.color = "rgba(255, 255, 255, 1)";
    hamb1.style.background = "rgba(255, 255, 255, 1)";
    hamb2.style.background = "rgba(255, 255, 255, 1)";
  }
}
//==>Hamburger Menu show<==//
// const hamBurger = document.querySelector(".hamburger");
// const hamBurger1 = document.querySelector("#hamburger-1");
// const MobMenu = document.querySelector("#yl-mobmenu");

// hamBurger.addEventListener("click", function () {
//   hamBurger1.classList.toggle("is-active");
// });
// hamBurger1.addEventListener("click", function () {
//   MobMenu.classList.toggle("yl_mobile-open");
// });

//==>Hamburger Menu close<==//
// window.addEventListener("click", function (e) {
//   if (e.target != hamBurger1 && e.target != MobMenu) {
//     MobMenu.classList.add("yl_mobile");
//     hamBurger1.classList.add("hamburger");
//   }
// });
