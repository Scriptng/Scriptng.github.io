//--------------------------------------------------LOADING MAIN
(function(headerHeight, curScroll, imgPerc, imgPos, imgSize, factor) {
  if (screen.width < 480) {
    headerHeight = 150;
    imgPerc = 170;
  } else if (screen.width >= 480 && screen.width < 720) {
    headerHeight = 250;
    imgPerc = 140;
  } else if (screen.width >= 720 && screen.width < 1024) {
    headerHeight = 250;
    imgPerc = 120;
  } else {
    headerHeight = 400;
    imgPerc = 100;
  }
  
  curScroll = 0;
  factor = 3;

  $(window).scrollTop(0);

  $(window).scroll(function() {
    //Parallax
    if ($(window).scrollTop() >= 0) {
      imgPos = ($(window).scrollTop() / factor) * -1;
      $('#parallax').css({
        'background-position': 'center ' + imgPos + 'px'
      });
    } else {
      imgSize = imgPerc - ($(window).scrollTop() / factor);
      $('#parallax').css({
        'background-size': imgSize + '%'
      });
    }
    //Hide Image
    if ($(window).scrollTop() > screen.height) {
      $('#parallax').css({
        'visibility': 'visible'
      });
    } else if ($(window).scrollTop() < screen.height) {
      $('#parallax').css({
        'visibility': 'hidden'
      });
    }
  });
})();
