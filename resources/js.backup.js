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
// setInterval(intervalFunc, 50 speed counting);
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
//Header Content
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
