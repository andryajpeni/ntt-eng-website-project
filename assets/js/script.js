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
}
