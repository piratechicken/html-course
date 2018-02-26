var marginLeft = 0;
var marginShift = 5;
var marginTop = 0;
var marginShiftTop = 20;
invader = document.getElementById("spaceinvader");

function startSpaceInvader() {
  window.setInterval(moveInvader, 750);
};

function switchInvader() {
  if (invader.getAttribute('src') == './assets/img/spaceinvader.png') {
    invader.src = './assets/img/spaceinvader1.png';
  }
  else {
    invader.src = './assets/img/spaceinvader.png';
  }
};

function moveInvader() {
  if (marginLeft > 50) {
    marginShift = -10;
    marginTop = marginTop + marginShiftTop
    invader.style.marginTop = `${marginTop}px`; 
    marginLeft = marginLeft + marginShift;
    invader.style.marginLeft = `${marginLeft}vw`;
    switchInvader();
  } 
  else if (marginLeft < -50) {
    marginShift = +10;
    marginTop = marginTop + marginShiftTop
    invader.style.marginTop = `${marginTop}px`; 
    marginLeft = marginLeft + marginShift;
    invader.style.marginLeft = `${marginLeft}vw`;
    switchInvader();
  }
  else {
    marginLeft = marginLeft + marginShift;
    invader.style.marginLeft = `${marginLeft}vw`;
    switchInvader();
  }
;}