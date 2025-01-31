// 5SolasSwipper 
const SolasSwipper = new Swiper(".sola-swiper", {
  grabCursor: false,
  loop: false,
  slidesPerView: "auto",
  a11y: false,
  touchEventsTarget: "container",
  spaceBetween: 15,
  navigation: {
    nextEl: ".btn-next-sola",
    prevEl: ".btn-prev-sola",
  },
  breakpoints: {
    1280: {
      slidesPerView: 3.5,
    },
    1024: {
      slidesPerView: 3.1,
    },
    912: {
      slidesPerView: 2.5,
    },
    820: {
      slidesPerView: 2.3,
    },
    768: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  }, // Enable debugger
  debugger: true,
});
// articleSwipper
const articleSwiper = new Swiper(".article-swipper", {
  grabCursor: false,
  loop: false,
  slidesPerView: 3.1,
  a11y: false,
  touchEventsTarget: "container",
  spaceBetween: 25,
  navigation: {
    nextEl: ".btn-next-article",
    prevEl: ".btn-prev-article",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3.1,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 2.1,
      spaceBetween: 25,
    },
    640: {
      slidesPerView: 1.1,
      spaceBetween: 25,
    },
    320: {
      slidesPerView: 1.1,
      spaceBetween: 25,
    },
  }, // Enable debugger
  debugger: true,
});
// newsSwipper
const newsSwiper = new Swiper(".news-swipper", {
  grabCursor: false,
  loop: false,
  slidesPerView: 3.1,
  a11y: false,
  touchEventsTarget: "container",
  spaceBetween: 25,
  navigation: {
    nextEl: ".btn-next-news",
    prevEl: ".btn-prev-news",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3.1,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 2.1,
      spaceBetween: 25,
    },
    640: {
      slidesPerView: 1.1,
      spaceBetween: 25,
    },
    320: {
      slidesPerView: 1.1,
      spaceBetween: 25,
    },
  }, // Enable debugger
  debugger: true,
});
// navMenuDropdown
const btnMob = document.querySelector("#button-m");
const menuMob = document.querySelector("#nav-mobiles");
btnMob.addEventListener("click", function () {
  this.classList.toggle("is-active");
  menuMob.classList.toggle("is-open-block");
});
window.addEventListener("click", function (hide) {
  if (!menuMob.contains(hide.target) && !btnMob.contains(hide.target)) {
    menuMob.classList.remove("is-open-block");
    btnMob.classList.remove("is-active");
  }
});
//change src
const locations = [
  "https://www.youtube.com/embed/5L6L9YhFvY4?si=pCOl4O0OjKWvj9uG", // link-1
  "https://www.youtube.com/embed/5Dkf5zwTWRI?si=t2RkcOc1NbPf6VsT", // link-2
  "https://www.youtube.com/embed/q5MvhOwYIic?si=3RIlaW-cAQwpmlPC", // link-3
  "https://www.youtube.com/embed/EknF0fulSDs?si=iXxr7XJpdZKQ4Kcu", // link-4
  "https://www.youtube.com/embed/OZt0LkDvDfs?si=wRcWsNGsawtBtB8A", // link-5
  "https://www.youtube.com/embed/yyIbpkVXuII?si=jsGVrcLRjhkPk560", // link-6
  "https://www.youtube.com/embed/LtjOekObxdM?si=uUO1ovPbmGIx1xot", // link-7
];
const btnSrc = document.getElementsByClassName("srcChanger");
for (let i = 0; i < btnSrc.length; i++) {
  btnSrc[i].addEventListener("click", function () {
    document.getElementsByClassName("yl_youtube-link")[0].src = locations[i];
    document.getElementById("view-ytlink").innerHTML = locations[i];
  });
}
