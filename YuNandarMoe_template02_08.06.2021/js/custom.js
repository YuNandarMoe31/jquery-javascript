$(document).on('ready', function() {
  $('.autoplay').slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });
})