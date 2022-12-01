// Accordion Jquery

$(document).ready(function () {
  $('.accordion-info').hide();
  $('.accordion-list .click').click(function () {
    $('.accordion-list .click').removeClass('active');
    $('.accordion-info').slideUp('normal');

    if ($(this).next().is(':hidden') == true) {
      $(this).addClass('active');
      $(this).next().slideDown('normal');
    }
  });
});

$(document).ready(function () {

  $('.menuBar').click(function () {
    $('.menu-content').slideToggle('slow');
    $(this).toggleClass('is-active');
    return false;
  });
})