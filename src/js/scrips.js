document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".yl_5sola-carousel");
  const arrowBtns = document.querySelectorAll(".yl_5sola-slide i");
  const wrapper = document.querySelector(".yl_5sola-wrapper");
  const firstCard = carousel.querySelector(".yl_5sola-card");
  const firstCardWidth = firstCard.offsetWidth;
  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;
  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };
  const dragging = (e) => {
    if (!isDragging) return;

    // Calculate the new scroll position
    const newScrollLeft = startScrollLeft - (e.pageX - startX);

    // Check if the new scroll position exceeds
    // the carousel boundaries
    if (
      newScrollLeft <= 0 ||
      newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth
    ) {
      // If so, prevent further dragging
      isDragging = false;
      return;
    }

    // Otherwise, update the scroll position of the carousel
    carousel.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  const autoPlay = () => {
    // Return if window is smaller than 800
    if (window.innerWidth < 800) return;

    // Calculate the total width of all cards
    const totalCardWidth = carousel.scrollWidth;

    // Calculate the maximum scroll position
    const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

    // If the carousel is at the end, stop autoplay
    if (carousel.scrollLeft >= maxScrollLeft) return;

    // Autoplay the carousel after every 2500ms
    timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);

  // Add event listeners for the arrow buttons to
  // scroll the carousel left and right
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
  });
});

//==>Menu show<==//
const x = document.getElementById("navbtn");
const s = document.getElementById("megamenu");
x.addEventListener("click", function () {
  s.classList.toggle("is-open");
});
//==>Menu close<==//
const a = document.getElementById("yl_nav");
window.addEventListener("click", function (close) {
  if (!x.contains(close.target) && !a.contains(close.target)) {
    s.classList.remove("is-open");
  }
});
//==>Hamburger Menu show<==//
const h = document.querySelector(".hamburger");
const h1 = document.querySelector("#hamburger-1");
const m = document.querySelector("#mobMenu");
h.addEventListener("click", function () {
  h1.classList.toggle("is-active");
});
h1.addEventListener("click", function () {
  m.classList.toggle("mobile-menu-show");
});
//==>Hamburger Menu close<==//
window.addEventListener("click", function (inactive) {
  if (!h1.contains(inactive.target) && !m.contains(inactive.target)) {
    m.classList.remove("mobile-menu-show");
    h1.classList.remove("is-active");
  }
});

let glowInTexts = document.querySelectorAll(".glowIn");
glowInTexts.forEach((glowInText) => {
  let letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.05}s`;
    glowInText.append(span);
  });
});

// swipper blog
new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
