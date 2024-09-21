//==> Sticky Nav <==//
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".ntt-navbar").addClass("ntt-navbar-whenFixed");
      $(".hamburger .line").addClass("line-scroll");
    } else {
      $(".ntt-navbar").removeClass("ntt-navbar-whenFixed");
      $(".hamburger .line").removeClass("line-scroll");
    }
  });
});
//==> Mobile Menu <==//
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });
  $("#hamburger-1").click(function () {
    $(".overlay").toggleClass("overlay-active");
  });
  $(".nav-link-m").click(function () {
    $(".overlay-active").removeClass("overlay-active");
  });
});
//==> Desktop Menu Show <==//
const drop1 = document.querySelector("#dropdownsatu");
const navMenu1 = document.querySelector("#nttDesktop1");
drop1.addEventListener("click", function () {
  navMenu1.classList.toggle("nttDesktop1-active");
});
const drop2 = document.querySelector("#dropdowndua");
const navMenu2 = document.querySelector("#nttDesktop2");
drop2.addEventListener("click", function () {
  navMenu2.classList.toggle("nttDesktop2-active");
});
//==> Outside Click <==//
window.addEventListener("click", function (e) {
  if (e.target != drop1 && e.target != navMenu1) {
    navMenu1.classList.remove("nttDesktop1-active");
    navMenu1.classList.add("nttDesktop1");
  }
});
window.addEventListener("click", function (e) {
  if (e.target != drop2 && e.target != navMenu2) {
    navMenu2.classList.remove("nttDesktop2-active");
    navMenu2.classList.add("nttDesktop2");
  }
});
//==> Theme Switch <==//
// you can use app's unique identifier here
// const LOCAL_STORAGE_KEY = "toggle-bootstrap-theme";

// const LOCAL_META_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

// you can change this url as needed
// const DARK_THEME_PATH = "https://bootswatch.com/4/cyborg/bootstrap.min.css";

// const DARK_STYLE_LINK = document.getElementById("dark-theme-style");
// const THEME_TOGGLER = document.getElementById("theme-toggler");

// let isDark = LOCAL_META_DATA && LOCAL_META_DATA.isDark;

// check if user has already selected dark theme earlier
// if (isDark) {
//   enableDarkTheme();
// } else {
//   disableDarkTheme();
// }
/*  Apart from toggling themes, this will also store user's theme preference in local storage.
 * So when user visits next time, we can load the same theme.  */
// function toggleTheme() {
//   isDark = !isDark;
//   if (isDark) {
//     enableDarkTheme();
//   } else {
//     disableDarkTheme();
//   }
//   const META = { isDark };
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(META));
// }
// function enableDarkTheme() {
//   DARK_STYLE_LINK.setAttribute("href", DARK_THEME_PATH);
//   THEME_TOGGLER.innerHTML = "🌙";
// }
// function disableDarkTheme() {
//   DARK_STYLE_LINK.setAttribute("href", "");
//   THEME_TOGGLER.innerHTML = "🌞";
// }
