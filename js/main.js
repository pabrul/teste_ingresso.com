var image =  $('.logo').find("img");

function setImage() {
  var windowWidth = window.innerWidth,
      src = (windowWidth < 480) ? './img/02.jpg' : './img/01.jpg';

  image.attr('src', src);
}

$(window).on('resize', setImage);
setImage();

