$(document).ready(function() {
  $("#menuIcon").on('click', function () {
    $(this).toggleClass("active")
    $("nav").animate({
      width: "toggle"
    });
    
  });
  $("#menuIcon").focus(function() {
    $(this).toggleClass("active")
    $("nav").animate({
      width: "toggle"
    });
  })
  // smoothscroll
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )
  })
  // typed.js
  // type animation in header
  var typed = new Typed('#typed', {
    stringsElement: '#typedStrings',
    typeSpeed: 100,
    backDelay: 900,
    loop: true,
    loopCount: Infinity
  });
  
  
  var typed = new Typed(".typed", options);

});

