// Smooth Scroll Jquery

$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 0
    }, 300);
  });
});