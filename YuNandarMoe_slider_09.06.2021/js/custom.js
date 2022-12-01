$(document).on('ready', function() {
  $('.thumb a').click(function(e) {
    e.preventDefault();
    $('.imgBox img').attr("src", $(this).attr("href"));
  })
});


// $(document).on('ready', function() {
//   $('.prev').click(function() {
//     $('.thumbnail').find('.active').prev().addClass('active');
//     $('.thumbnail').find('.active').next().removeClass('active');
//   });

//   $('.next').click(function() {
//     $('.thumbnail').find('.active').prev().removeClass('active');
//     $('.thumbnail').find('.active').next().addClass('active');
//   })
// });