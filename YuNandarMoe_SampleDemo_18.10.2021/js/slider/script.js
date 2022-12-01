(function($) { 
    $(function() { 
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });

      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
})(jQuery); 


// Hamburger Menu
$(function() {
  $('.hamburger-menu').click(function() {
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
        $('.nav-list').addClass('active');
      } else {
        $('.nav-list').removeClass('active');
      }
  });
});