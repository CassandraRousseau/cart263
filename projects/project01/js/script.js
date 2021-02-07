/**************************************************
Project 01:A Night at the Movies
Cassandra Rousseau
The 3D simulation will be about the Disney animated movie 'SOUL'. The reproduced scene
is the moment mentors help the souls to find their spark. At the title screen, the user
will see the landscape the Great Before(aka the You Seminar). At the start of the game,
the user will be introduced to the universe and his mission through a cutscene of the movie.
The goal of the user will be to explore the universe of the Great Before and to find the
spark of the soul!
**************************************************/
let grassPurple;
let grassPink;
let grassBlue;
let windows;
let floor;
let cam;
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
  cam = createCamera();
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
  background(0);
  lights();
  // Translate to the center (not really needed, but just for completeness)
  //  camera(mouseX, mouseY, 0, 0, 0, 0, 0, 0, 0);
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
  fill(0);
  translate(25, -200, -300);
  plane(600, 400);
  pop();
  push();
  noFill();
  translate(-275, -400, -300);
  texture(video);
  rect(0, 0, 600, 400);

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
function mousePressed() {
  video.play();
}
