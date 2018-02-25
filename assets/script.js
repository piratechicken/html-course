var marginLeft = 0;
var marginShift = 10;
var marginTop = 0;
var marginShiftTop = 20;
invader = document.getElementById("spaceinvader");

function startSpaceInvader() {

  window.setInterval(moveInvader, 500);
};

function moveInvader() {
  const invader = document.getElementById("spaceinvader");

  if (marginLeft > 50) {
    marginShift = -10;
    marginTop = marginTop + marginShiftTop
  } 
  else if (marginLeft < 0)
  {
    marginShift = +10;
    marginTop = marginTop + marginShiftTop
  }
  marginLeft = marginLeft + marginShift;
  invader.style.marginLeft = `${marginLeft}vw`; 
  invader.style.marginTop = `${marginTop}px`; 
  // console.log("move");
;}