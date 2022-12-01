$('#tab-slider').each(function(){
  $('.tab img:first').addClass('active')
  var $tabAnchors = $(this).find('.tab img'),
      $panelInner = $(this).find('.panel-inner'),
      panelWidth = $panelInner.find('.panel-item').width();

  $tabAnchors.click(function(event){
    $tabAnchors.removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
      var index = $(this).closest('li').index();
      $panelInner.animate({
        left: -panelWidth * index + 'px',
      });
  });
});

var slideWidth = $('.panel-item').outerWidth();	
var slideNum = $('.panel-item').length;
var slideSetWidth = slideWidth * slideNum;
$('.panel-inner').css('width', slideSetWidth);

var slideCurrent = 0;	

var sliding = function(){
  if( slideCurrent < 0 ){
    slideCurrent = slideNum - 1;
  }
  else if( slideCurrent > slideNum - 1 ){
    slideCurrent = 0;
  }

  $('.panel-inner').stop().animate({
    left: slideCurrent * -slideWidth
  });
}

$('.prev').click(function(){
  slideCurrent--;
  sliding();
  $('.tab img.active').removeClass('active');
  $('.tab img').eq(slideCurrent).addClass('active');
});

$('.next').click(function(){
  slideCurrent++;
  sliding();
  $('.tab img.active').removeClass('active');
  $('.tab img').eq(slideCurrent).addClass('active')
});
