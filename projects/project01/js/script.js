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
let video;
let cake;
let pizza;
let angle = 45;
let curtains;
let spotlights = [];
let numSpotlights = 20;
function preload() {
  windows = loadImage(`assets/images/windows.jpg`);
  grassPurple = loadImage(`assets/images/grassPurple.png`);
  grassPink = loadImage(`assets/images/grassPink.png`);
  grassBlue = loadImage(`assets/images/grassBlue.png`);
  floor = loadImage(`assets/images/floor.jpg`);
  curtains = loadImage(`assets/images/curtains.jpg`);
  cake = loadModel(`assets/obj/cake.obj`);
  pizza = loadModel(`assets/obj/PIZZA.obj`);
}
function setup() {
  // Using WEBGL in createCanvas to specify 3D graphics
  createCanvas(windowWidth, windowHeight, WEBGL);
  video = createVideo(`assets/videos/Intro.mp4`);
  video.size(600, 400);
  for (let i = 0; i < numSpotlights; i++) {
    let light = spotLight(
      255,
      255,
      255,
      random(0, width),
      random(0, height),
      random(),
      70,
      70,
      70,
      35,
      100
    );
    spotlights.push(light);
  }
}

function draw() {
  background(255);

  // Translate to the center (not really needed, but just for completeness)

  // Looks nicer
  noStroke();

  push();

  // Our central cube is white
  translate(0, -115, -600);
  fill(150);
  texture(windows);
  box(2000, height, 800);
  pop();
  push();
  // A red bar passing through the box
  translate(0, 250, 0);
  fill(100, 185, 225);
  box(windowWidth, 100, 600);
  pop();
  push();

  // Our central cube is white
  translate(-width / 4, 75, 200);
  fill(255, 255, 150);
  box(250, 100, 400);
  pop();

  push();

  // Our central cube is white
  translate(width / 4, 75, 200);
  fill(255, 255, 150);

  box(250, 100, 400);
  pop();
  push();
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  translate(100, 100, 100);
  model(cake);
  model(pizza);
  pop();
}
