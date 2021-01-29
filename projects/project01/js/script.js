/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let grass;
function preload() {
  grass = loadImage(`assets/images/grass.jpg`);
}
function setup() {
  // Using WEBGL in createCanvas to specify 3D graphics
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(225, 175, 255);
  lights();
  // Translate to the center (not really needed, but just for completeness)

  // Looks nicer
  noStroke();
  push();
  // Our central cube is white
  translate(-width / 2, 75, -150);
  fill(150, 155, 255);
  texture(grass);
  ellipsoid(300, 230);
  pop();
  push();
  // Our central cube is white
  translate(width / 35, 100, -550);
  fill(115, 175, 255);
  texture(grass);
  ellipsoid(600, 230);
  pop();
  push();
  // Our central cube is white
  translate(width / 2, 75, -150);
  fill(150, 175, 255);
  push();
  texture(grass);
  ellipsoid(300, 230);
  pop();
  pop();
  push();
  // A red bar passing through the box
  translate(0, 250, 0);
  fill(100, 185, 225);
  texture(grass);
  box(windowWidth, 175, 300);
  pop();
}
