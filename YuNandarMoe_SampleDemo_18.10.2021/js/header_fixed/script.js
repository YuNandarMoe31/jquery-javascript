// Fixed Header 
$(window).scroll(function(){
    if ($(window).scrollTop() >= 400) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
  });
  