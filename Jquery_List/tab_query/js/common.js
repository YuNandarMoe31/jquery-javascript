$(document).ready(function() {
  // body...
  $("ul.tabs li").click(function() {
    // body...
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+ tab_id).addClass('current');
  })
})