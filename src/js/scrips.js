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
// to top
$("#top-btn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "smooth");
  return false;
});
// tabs
let tabs = document.querySelectorAll(".yl_tabs h6");

let tabContents = document.querySelectorAll(".yl_tabs-content .yl_tabs-info");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("tab-active");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
    });

    tabContents[index].classList.add("tab-active");
    tabs[index].classList.add("tab-active");

    // Scroll smoothly to the top of  tabs-menu
    $("html, body").animate(
      {
        scrollTop: $(".yl_tabs-menu") && $(".yl_tabs-content").offset().top,
      },
      600
    ); // Adjust the speed (600ms) as needed
  });
});

//youtube
var locations = [
  "https://www.youtube.com/embed/nc-ZYmFXw0o?si=4hs3I2aMWcUS8MsH",
  "https://www.youtube.com/embed/DbESZ6pCy5I?si=jzKzx9YVEgYRw9Yy",
  "https://www.youtube.com/embed/NHnqNz06GyI?si=HWXznY539Ua2SCs5",
  "https://www.youtube.com/embed/Zai0DnM_MRU?si=MVLjs-U3vLhZ3D1A",
  "https://www.youtube.com/embed/WgBsub74uqI?si=PE-3CWfrfec8h2ve",
];

var btnSrc = document.getElementsByClassName("srcChanger");
for (let i = 0; i < btnSrc.length; i++) {
  btnSrc[i].addEventListener("click", function () {
    document.getElementsByClassName("responsive_frame")[0].src = locations[i];
    document.getElementById("demo").innerHTML = locations[i];
  });
}
//header
const mainProgressBar = document.querySelector(
  ".progress-bar--primary .progress-bar__fill"
);
const mainPosts = document.querySelectorAll(".main-post");
const posts = document.querySelectorAll(".post");

let i = 0;
let postIndex = 0;
let currentPost = posts[postIndex];
let currentMainPost = mainPosts[postIndex];

let progressInterval = setInterval(progress, 100);

function progress() {
  if (i === 100) {
    i = -5;
    // reset progress bar
    currentPost.querySelector(".progress-bar__fill").style.width = 0;
    mainProgressBar.style.width = 0;
    currentPost.classList.remove("post--active");

    postIndex++;

    currentMainPost.classList.add("main-post--not-active");
    currentMainPost.classList.remove("main-post--active");

    // reset postIndex to loop over the slides again
    if (postIndex === posts.length) {
      postIndex = 0;
    }

    currentPost = posts[postIndex];
    currentMainPost = mainPosts[postIndex];
  } else {
    i++;
    currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
    mainProgressBar.style.width = `${i}%`;
    currentPost.classList.add("post--active");

    currentMainPost.classList.add("main-post--active");
    currentMainPost.classList.remove("main-post--not-active");
  }
}

posts.forEach((post, index) => {
  post.addEventListener("click", () => {
    disablePostsTemporarily();
    i = 0; // Reset the progress bar
    postIndex = index;
    updatePosts();
  });
});

function disablePostsTemporarily() {
  // Disable pointer events on all posts
  posts.forEach((post) => {
    post.classList.add("post--disabled");
  });

  // Re-enable pointer events after 2 1/2 seconds
  setTimeout(() => {
    posts.forEach((post) => {
      post.classList.remove("post--disabled");
    });
  }, 2500);
}

function updatePosts() {
  // Reset all progress bars and classes
  posts.forEach((post) => {
    post.querySelector(".progress-bar__fill").style.width = 0;
    post.classList.remove("post--active");
  });

  mainPosts.forEach((mainPost) => {
    mainPost.classList.add("main-post--not-active");
    mainPost.classList.remove("main-post--active");
  });

  // Update the current post and main post
  currentPost = posts[postIndex];
  currentMainPost = mainPosts[postIndex];

  currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
  mainProgressBar.style.width = `${i}%`;
  currentPost.classList.add("post--active");

  currentMainPost.classList.add("main-post--active");
  currentMainPost.classList.remove("main-post--not-active");
}

// PAGE HEADER FADE
const fadeHead = $("#yl-header");
$(window).on("scroll", function () {
  const st = $(this).scrollTop();
  fadeHead.css({ opacity: 1 - st / 400 });
  fadeHead.css({ "transition-delay": "0s" });
  fadeHead.css({ transition: "0.01s ease-in-out" });
});
//Counting people
// get counting data element
var count = document.getElementsByClassName("counter");
var inc = [];

function intervalFunc() {
  for (let i = 0; i < count.length; i++) {
    inc.push(1);
    //get counting data
    if (inc[i] != count[i].getAttribute("max-data")) {
      inc[i]++;
    }
    count[i].innerHTML = inc[i];
  }
}
// setInterval(intervalFunc, 100);
var main = document.getElementById("about"); //get section
window.onscroll = function () {
  var timer = setInterval(() => {
    var topElem = main.offsetTop;
    var btmElem = main.offsetTop + main.clientHeight;
    var topScreen = window.pageYOffset;
    var btmScreen = window.pageYOffset + window.innerHeight;
    if (btmScreen > topElem && topScreen < btmElem) {
      intervalFunc();
    } else {
      clearInterval(timer);
      for (let i = 0; i < count.length; i++) {
        count[i].innerHTML = 1;
        inc = [];
      }
    }
  }, 50); //speed counting
};
