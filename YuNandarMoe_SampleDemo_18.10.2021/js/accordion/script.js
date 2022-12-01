(function($) {  
    var allPanels = $('.panel').hide();
    $('.accordion').click(function() {
        $(this).toggleClass( "active" );
        allPanels.slideUp();
        $(this).next('.panel').show(); 
    }
    );                               
})(jQuery);