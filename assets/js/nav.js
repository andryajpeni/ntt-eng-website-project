$(window).scroll(function (event) {
  if ($(window).scrollTop() <= 0) {
    $("#test").attr("src", "./assets/img/logo/NTT-PL-100x48-white.png");
  } else {
    $("#test").attr("src", "./assets/img/logo/NTT-PL-100x48.png");
  }
});
