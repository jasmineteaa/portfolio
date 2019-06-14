
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

var typed = new Typed('#typed', {
  stringsElement: '#typedStrings',
  typeSpeed: 100,
  backDelay: 900,
  loop: true,
  loopCount: Infinity
});


// var options = {
//   strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//   typeSpeed: 40
// }

var typed = new Typed(".typed", options);