//Key Stuff

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);
function keydownHandler(event) {
  if (event.code == "Digit1") {
    Digit1IsPressed = true;
  } else if (event.code == "Digit2") {
    Digit2IsPressed = true;
  } else if (event.code == "Digit3") {
    Digit3IsPressed = true;
  } else if (event.code == "Digit4") {
    Digit4IsPressed = true;
  } else if (event.code == "Digit5") {
    Digit5IsPressed = true;
  } else if (event.code == "Digit6") {
    Digit6IsPressed = true;
    notCrazy = false;
  } else if (event.code == "Digit7") {
    Digit7IsPressed = true;
  } else if (event.code == "Digit8") {
    Digit8IsPressed = true;
  } else if (event.code == "Digit9") {
    Digit9IsPressed = true;
  } else if (event.code == "Digit0") {
    Digit0IsPressed = true;
  }
}

function keyupHandler(event) {
  if (event.code == "Digit1") {
    Digit1IsPressed = false;
  } else if (event.code == "Digit2") {
    Digit2IsPressed = false;
  } else if (event.code == "Digit3") {
    Digit3IsPressed = false;
  } else if (event.code == "Digit4") {
    Digit4IsPressed = false;
  } else if (event.code == "Digit5") {
    Digit5IsPressed = false;
  } else if (event.code == "Digit6") {
    Digit6IsPressed = false;
    notCrazy = true;
  } else if (event.code == "Digit7") {
    Digit7IsPressed = false;
  } else if (event.code == "Digit8") {
    Digit8IsPressed = false;
  } else if (event.code == "Digit9") {
    Digit9IsPressed = false;
  } else if (event.code == "Digit0") {
    Digit0IsPressed = false;
  }
}

//Mouse stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler);

function mousedownHandler(event) {
  mouseIsPressed = true;
}

function mouseupHandler(event) {
  mouseIsPressed = false;
}

function mousemoveHandler(event) {
  //Update mouseX and mouseY
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}
