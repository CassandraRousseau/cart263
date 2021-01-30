/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let grassPurple;
let grassPink;
let grassBlue;
function preload() {
  grassPurple = loadImage(`assets/images/grassPurple.png`);
  grassPink = loadImage(`assets/images/grassPink.png`);
  grassBlue = loadImage(`assets/images/grassBlue.png`);
}
function setup() {
  // Using WEBGL in createCanvas to specify 3D graphics
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(200);

  // Translate to the center (not really needed, but just for completeness)

  // Looks nicer
  noStroke();
  push();
  // A red bar passing through the box
  translate(0, 250, 0);
  fill(100, 185, 225);

  box(windowWidth, 100, 3000);
  pop();
  push();

  // Our central cube is white
  translate(-width / 3, 75, -500);
  fill(245, 255, 175);
  box(300, windowHeight);
  pop();

  push();

  // Our central cube is white
  translate(-width / 4, 75, -500);
  fill(245, 255, 175);
  box(100, 700);
  pop();

  push();

  // Our central cube is white
  translate(-width / 2, 100, -600);
  fill(245, 255, 175);
  box(300, 900);
  pop();

  push();

  // Our central cube is white
  translate(width / 4, 75, -500);
  fill(245, 255, 175);
  box(100, 700);
  pop();
  push();

  // Our central cube is white
  translate(width / 2, 0, -400);
  fill(150);
  box(200, 500, -10);
  pop();
}
