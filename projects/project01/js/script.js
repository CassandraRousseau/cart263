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
"use strict";
let font;
let currentState;
let grassPurple;
let grassPink;
let grassBlue;
let windows;
let floor;
let cam;
let crust;
let title;
let video;
let desk;
let legalPad;
let chocolateCake;
let appleStrudel;
let crustStrudel;
let pizza;
let doughnut;
let doughnutTexture;
let frosting;
let pie;
let bun;
let wood;
let rocketship;
let pepperoni;
let cinnamonBun;
let angle = 45;
let curtains;
let spotlights = [];
let numCounters = 1;
let numSpotlights = 20;
let numCurtainLeft = 1;
let numCurtainRight = 1;
let numSeatsLeftFirstRow = 1;
let numSeatsRightFirstRow = 1;
let numSeatsLeftSecondRow = 1;
let numSeatsRightSecondRow = 1;
let numSeatsLeftThirdRow = 1;
let numSeatsRightThirdRow = 1;
let numBuildings = 1;
function preload() {
  font = loadFont(`assets/fonts/Sriracha/Sriracha-Regular.ttf`);
  windows = loadImage(`assets/images/windows.jpg`);
  grassPurple = loadImage(`assets/images/grassPurple.png`);
  grassPink = loadImage(`assets/images/grassPink.png`);
  grassBlue = loadImage(`assets/images/grassBlue.png`);
  crust = loadImage(`assets/images/pie_texture.jpg`);
  frosting = loadImage(`assets/images/frosting.jpg`);
  floor = loadImage(`assets/images/floor.jpg`);
  curtains = loadImage(`assets/images/curtains.jpg`);
  cinnamonBun = loadImage(`assets/images/cinnamon_bun_texture.jpg`);
  desk = loadModel(`assets/obj/desk.obj`);
  appleStrudel = loadModel(`assets/obj/AppleStrudel.obj`);
  crustStrudel = loadImage(`assets/images/strudel_crust.jpg`);
  pizza = loadModel(`assets/obj/PIZZA.obj`);
  chocolateCake = loadModel(`assets/obj/Chocolate Cake.obj`);
  pie = loadModel(`assets/obj/PieLowPoly.obj`);
  bun = loadModel(`assets/obj/sweet_bun.obj`);
  legalPad = loadModel(`assets/obj/LegalPad.obj`);
  pepperoni = loadImage("assets/images/pepperoni_pizza.jpg");
  doughnutTexture = loadImage("assets/images/doughnut_texture.jpg");
  doughnut = loadModel(`assets/obj/Donut1.obj`);
  rocketship = loadModel(`assets/obj/Toy Rocketship G.obj`);
  wood = loadImage("assets/images/wood.jpg");
}
function setup() {
  // Using WEBGL in createCanvas to specify 3D graphics
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCamera();
  video = createVideo(`assets/videos/Intro.mp4`);
  video.size(600, 400);
  video.hide();
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
  title = new Title();
  currentState = title;
}
function draw() {
  currentState.draw();
}
//Setting all mouse inputs for each states
function mousePressed() {
  currentState.mousePressed();
}
