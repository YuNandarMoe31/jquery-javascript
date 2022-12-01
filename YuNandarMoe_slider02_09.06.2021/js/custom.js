var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// $(document).on('ready', function() {
//   $('a[data-slide]').click(function (e) {
//     e.preventDefault();
//     var slideno = $(this).data('slide');
//     $('.row').slick('slickGoTo', slideno - 1);
//   });
// });

// $('#tab-slider').each(function(){

//   var $tabAnchors = $(this).find('.row img'),
//         $panelInner = $(this).find('.panel-inner'),
//         panelWidth = $panelInner.find('.panel-item').width();

//   $tabAnchors.click(function(event){

//       event.preventDefault();

//       var index = $(this).closest('.column').index();
//       $panelInner.animate({
//           left: -panelWidth * index  + 'px'
//       });
//   });
// });