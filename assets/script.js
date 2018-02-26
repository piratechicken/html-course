function animateInvader() {
  const spaceInvader = document.getElementById("spaceinvader");
  const imageOne = "./assets/img/spaceinvader1.png";
  const imageTwo = "./assets/img/spaceinvader2.png";

  if (spaceInvader.getAttribute("src") == imageTwo) {
    spaceInvader.src = imageOne;
  }
  else {
    spaceInvader.src = imageTwo;
  }
};

function animateMushroom() {

};