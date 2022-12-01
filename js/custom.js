$(document).ready (function() {
  if (localStorage.colorTheme) {
    $('body').css('background', localStorage.colorTheme);
  }

  $('.color-switcher li').click(function(){
    $('body').css('background', $(this).data('color'));
    localStorage.colorTheme = $(this).data('color');
  });
});