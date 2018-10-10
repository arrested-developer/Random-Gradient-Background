/* Initiate Random Background Gradients */

$(document).ready(function(){
changeBackground(2);
swapBackgrounds();
})

/* Random Background Functions */

function getRandomColorHex() {
    const colorLetters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colorLetters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomColorFromPalette() {
  var colors  = ["#878798", "#f2ccc0", "#9ed0df", "#e7e49e", "#887da3", "#75809c", "#97a8e5", "#d073f0"];
  var rand = Math.floor(Math.random()*9);
  return colors[rand];
}

function changeBackground(num) {
  var color1 = getRandomColorHex();
  var color2 = getRandomColorHex();
  $("#background"+num).css({'background': 'linear-gradient(' + color1 + ', ' + color2 + ')'});
  $("#header"+num).css({'background': color1 });
}

var bg = 2;

function swapBackgrounds() {
  if (bg == 2) {
    changeBackground(1);
    $("#background2").fadeOut(5000);
    $("#header2").fadeOut(5000);
    bg = 1;
  }
  else {
    changeBackground(2);
    $("#background2").fadeIn(5000);
    $("#header2").fadeIn(5000);
    bg = 2;
  }
  setTimeout(function(){
  swapBackgrounds();
  }, 5000)
}
