// Smooth Scroll Jquery

$(document).ready(function () {
  var scroll = $('.pagetop');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      scroll.addClass('active');
    } else {
      scroll.removeClass('active');
    }
  });

  $('.pagetop').on('click', function (e) {
    e.preventDefault();
    $('html , body').animate({ scrollTop: 0 }, 300);
    return false;
  });

});

// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//       $('.pagetop').addClass('active');
//     } else {
//       $('.pagetop').removeClass('active');
//     }
//   });

//   // scroll body to 0px on click
//   $('.pagetop').on('click', function (e) {
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: 0
//     }, 500);
//     return false;
//   });

// });