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
let currentState;
let grassPurple;
let grassPink;
let grassBlue;
let windows;
let floor;
let cam;
let title;
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
  title = new Title(cake);
  currentState = title;
}
function draw() {
  currentState.draw();
}
//Setting all mouse inputs for each states
function mousePressed() {
  currentState.mousePressed();
}
