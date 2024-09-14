$(window).scroll(function (event) {
  if ($(window).scrollTop() <= 0) {
    $("#test").attr("src", "./assets/img/logo/NTT-PL-100x48-white.png");
  } else {
    $("#test").attr("src", "./assets/img/logo/NTT-PL-100x48.png");
  }
});
window.onscroll = function () {
  myFunction();
};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
var dropDownContent = document.getElementById("newDropDown");
dropDownContent.style.display = "none";
function mouseOverToggle() {
  dropDownContent.style.display = "";
}
function mouseOutToggle() {
  dropDownContent.style.display = "none";
} // Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
