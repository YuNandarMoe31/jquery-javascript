$(document).on('ready', function() {
  $(".single-item").slick({
    dots: true,
  });
});

$(document).on('ready', function() {
  $(".multiple-items").slick({
    dots: true,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    centerMode: true,
    focusOnSelect: true
  });
});

$(document).on('ready', function() {
  $(".responsive").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).on('ready', function() {
  $(".variable-width").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});

$(document).on('ready', function() {
  $(".one-time").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});

$(document).on('ready', function() {
  $(".data-slick").slick({
    slidesToShow: 4,
    slidesToScroll: 4
  });
});

$(document).on('ready', function() {
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      } 
    ]
  });
});

$(document).on('ready', function() {
  $('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
  });
});

$(document).on('ready', function() {
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  });
});

$(document).on('ready', function() {
  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});

$(document).on('ready', function() {
  var slideIndex=1;
  $('.add-remove').slick({
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $('.js-add-slide').on('click', function() {
    slideIndex++;
    $('.add-remove').slick('slickAdd','<div><img src="img/cartoon_img0' + slideIndex + '.png"></div>');
  });
  
  $('.js-remove-slide').on('click', function() {
    $('.add-remove').slick('slickRemove',slideIndex - 1);
    if (slideIndex !== 0){
      slideIndex--
    }
  });
});


$(document).on('ready', function() {
  $('.filtering').slick({
    slidesToShow: 4,
    slidesToScroll: 4
  });
  
  var filtered = false;
  
  $('.js-filter').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter',':even');
      $(this).text('Unfilter Slides');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      $(this).text('Filter Slides');
      filtered = false;
    }
  });
});

$(document).on('ready', function() {
  $(".your-slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $('.js-destroy').click(function(){
    $('.your-slider').slick('unslick');
    $(this).html("Slick");
  });
});


$(document).on('ready', function() {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});

$(document).on('ready', function() {
  $('.single-item-rtl').slick({
    rtl: true
  });
});




