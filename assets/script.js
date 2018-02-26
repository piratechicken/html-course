// Starting values
var marginLeft = 0;
var marginShift = 5;
var marginTop = 0;
var marginShiftTop = 20;

// Put some things into constants to more easily access them 
const invader = document.getElementById("spaceinvader");
const imageOne = "./assets/img/spaceinvader1.png";
const imageTwo = "./assets/img/spaceinvader2.png";

// This function checks which Space Invader pic is current and switches to the other 
function switchInvader() {
  if (invader.getAttribute('src') == imageTwo) {
    invader.src = imageOne;
  }
  else {
    invader.src = imageTwo;
  }
};

// This function moves the Space Invader left or right, thens runs the switch function, then calls start space invader again
function move() {
  marginLeft = marginLeft + marginShift;
  invader.style.marginLeft = `${marginLeft}vw`;
  switchInvader();
  startSpaceInvader();
};

// This function moves the Space Invader down
function moveDown() {
  marginTop = marginTop + marginShiftTop;
  switchInvader();
  invader.style.marginTop = `${marginTop}px`; 
};

// This function does the timing
function startSpaceInvader() {
  if (marginLeft > 50) {
    // Change the direction
    marginShift = -5;
    // Move down after a delay
    setTimeout(moveDown, 500);
    // Then move sideways after another delay
    setTimeout(move, 1000);
  } 
  else if (marginLeft < -50) {
    // Change the direction
    marginShift = +5;
    // Move down after a delay
    setTimeout(moveDown, 500);
    // Then move sideways after another delay
    setTimeout(move, 1000);
  }
  else {
    // Move sideways after a delay
    setTimeout(move, 500);
  }
;}
