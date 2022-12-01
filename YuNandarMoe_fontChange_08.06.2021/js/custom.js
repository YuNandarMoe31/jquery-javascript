$(document).ready (function() {
  if (localStorage.fontSize) {
    $('.main-content').css('font-size', localStorage.fontSize);
  }
  if(localStorage.active) {
    $(".btn-size").find('[data-size="'+localStorage.active+'"]').removeClass('inactive').addClass('active');
  }
  $('.btn-size button').click(function(){
    $('.main-content').css('font-size', $(this).data('size'));
    localStorage.fontSize = $(this).data('size');
  });
  
  $('.btn').click(function(){
    $('.btn').removeClass('active').addClass('inactive');
     $(this).removeClass('inactive').addClass('active');
     localStorage.active = $(this).data('size');
    });
});