$(function() {

  // FULL HEIGHT OF WINDOW
  var topoffset = 43;
  // var isTouch = 'ontouchstart' in document.documentElement;

  //window height
  var wheight = $(window).height(); //get height of the window

  $('.fullheight').css('height', wheight);

  // When window resizes, do to the contents to remain full height
  $(window).resize(function() {
    var wheight = $(window).height(); //get height of the window
    $('.fullheight').css('height', wheight);
  }) //on resize

  // ANIMATED SCROLLING
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } // target.length
    } //location hostname
  }); //on click

}); // END function
