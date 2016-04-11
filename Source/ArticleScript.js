//--------------------------------------------------LOADING MAIN
(function(scale, position, size, factor) {
  if (screen.width < 480) {
    scale = 170;
  } else if (screen.width >= 480 && screen.width < 720) {
    scale = 140;
  } else if (screen.width >= 720 && screen.width < 1024) {
    scale = 120;
  } else {
    scale = 100;
  }
  
  factor = 3;

  $(window).scrollTop(0);

  $(window).scroll(function() {
    //Parallax
    if ($(window).scrollTop() >= 0) {
      position = ($(window).scrollTop() / factor) * -1;
      $('#parallax').css({
        'background-position': 'center ' + position + 'px'
      });
    } else {
      size = scale - ($(window).scrollTop() / factor);
      $('#parallax').css({
        'background-size': size + '%'
      });
    }
    //Hide Image
    if ($(window).scrollTop() > screen.height) {
      $('#parallax').css({
        'visibility': 'hidden'
      });
    } else if ($(window).scrollTop() < screen.height) {
      $('#parallax').css({
        'visibility': 'visible'
      });
    }
  });
})();
