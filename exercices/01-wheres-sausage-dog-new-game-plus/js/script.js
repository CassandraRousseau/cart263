/**************************************************
Activity 02:Find my Dog!
Cassandra Rousseau
The game will start with a womanThe canvas will display many random images of animals at random positions,
one of which will be a sausage dog. The player has to click on the sausage dog
to win the game. When clicked successfully, the sausage dog will start spinning.
**************************************************/
"use strict";
let currentState;
let animalImage = [];
let animalObject = [];
const LOADING_MUSIC = "assets/sounds/My_Dog_Is_Happy.mp3";
const LOADING_GIRL_ASKING = "assets/images/GirlNeutral.png";
const LOADING_GIRL_HAPPY = "assets/images/GirlHappy.png";
const LOADING_GIRL_SAD = "assets/images/GirlSad.png";
const LOADING_SAUSAGE_DOG = "assets/images/sausage-dog.png";
const NUM_ANIMALS_IMAGES = 10;
const NUM_ANIMALS_DISPLAY = 100;
let music;
let askingImage;
let happyImage;
let sadImage;
let sausageDog;
let sausageDogImage;

// Setting all the preloaded images
function preload() {
  music = loadSound(LOADING_MUSIC);
  askingImage = loadImage(LOADING_GIRL_ASKING);
  happyImage = loadImage(LOADING_GIRL_HAPPY);
  sadImage = loadImage(LOADING_GIRL_SAD);
  for (let i = 0; i < NUM_ANIMALS_IMAGES; i++) {
    let loadedImage = loadImage(`assets/images/animal${i}.png`);
    animalImage.push(loadedImage);
  }
  sausageDogImage = loadImage(LOADING_SAUSAGE_DOG);
}

//Setting all the setups for each state.
function setup() {
  createCanvas(windowWidth, windowHeight);

  currentState = new Title();
}

// Setting the draw function for each state.
function draw() {
  currentState.draw();
}
//Setting all key functions for each state.
function mousePressed() {
  currentState.mousePressed();
}
//Setting all key functions for each state.
function keyPressed() {
  currentState.keyPressed();
}
