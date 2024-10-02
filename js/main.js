// JS OOP CIRCLES START CODE

// Set up canvas and context variables
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables

let circleArray = [];
circleArray.push(new Circle(700, 500, 3, "Magenta"));
circleArray.push(new Circle(200, 100, 10, "MediumVioletRed"));
circleArray.push(new Circle(300, 150, 20, "SaddleBrown"));
circleArray.push(new Circle(100, 400, 30, "DarkOliveGreen"));
circleArray.push(new Circle(500, 400, 40, "ForestGreen"));
circleArray.push(new Circle(600, 300, 50, "LightSeaGreen"));
circleArray.push(new Circle(350, 400, 60, "DodgerBlue"));

let Digit1IsPressed = false;
let Digit2IsPressed = false;
let Digit3IsPressed = false;
let Digit4IsPressed = false;
let Digit5IsPressed = false;
let Digit6IsPressed = false;
let Digit7IsPressed = false;
let Digit8IsPressed = false;
let Digit9IsPressed = false;
let Digit0IsPressed = false;
let mouseIsPressed = false;
let notCrazy = true;

// Main Draw Function after page load
window.addEventListener("load", draw);

function draw() {
  // ***** LOGIC *****

  //Circle movement
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].mousepressed();
  }

  // ***** DRAWING *****
  // Clear background
  if (notCrazy) {
    document.body.style.backgroundColor = "white";
    ctx.clearRect(0, 0, cnv.width, cnv.height);
  }
  // Draw Circles

  //SetColor
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].setColor();
  }

  //Draw
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].draw();
  }

  // Request Another Frame
  requestAnimationFrame(draw);
}
