/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let grassPurple;
let grassPink;
let grassBlue;
let windows;
let floor;
let curtains;
function preload() {
  windows = loadImage(`assets/images/windows.jpg`);
  grassPurple = loadImage(`assets/images/grassPurple.png`);
  grassPink = loadImage(`assets/images/grassPink.png`);
  grassBlue = loadImage(`assets/images/grassBlue.png`);
  floor = loadImage(`assets/images/floor.jpg`);
  curtains = loadImage(`assets/images/curtains.jpg`);
}
function setup() {
  // Using WEBGL in createCanvas to specify 3D graphics
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  lights();
  // Translate to the center (not really needed, but just for completeness)

  // Looks nicer
  noStroke();
  push();

  // Our central cube is white
  translate(width / 4, -200, -350);
  fill(160, 50, 75);
  texture(curtains);
  plane(1000, height);
  pop();
  push();

  // Our central cube is white
  translate(-width / 4, -200, -350);
  fill(160, 50, 75);
  texture(curtains);
  plane(1000, height);
  pop();

  push();

  // Our central cube is white
  translate(0, 100, -750);
  fill(150);

  ellipsoid(850, 100);
  pop();
  push();
  // A red bar passing through the box
  translate(0, 250, 0);
  fill(100);
  box(windowWidth, 100, 600);
  pop();
  push();

  // Our central cube is white
  translate(-width / 4, 100, 100);
  fill(160, 50, 75);

  box(300, 75, 50);
  pop();

  push();

  // Our central cube is white
  translate(width / 4, 100, 100);
  fill(160, 50, 75);

  box(300, 75, 50);
  pop();
  push();

  // Our central cube is white
  translate(-width / 4, 100, 200);
  fill(160, 50, 75);

  box(300, 75, 50);
  pop();

  push();

  // Our central cube is white
  translate(width / 4, 100, 200);
  fill(160, 50, 75);

  box(300, 75, 50);
  pop();
  push();

  // Our central cube is white
  translate(-width / 4, 100, 300);
  fill(160, 50, 75);
  box(300, 75, 50);
  pop();

  push();

  // Our central cube is white
  translate(width / 4, 100, 300);
  fill(160, 50, 75);

  box(300, 75, 50);
  pop();
}
