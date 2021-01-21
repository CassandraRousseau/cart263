/**************************************************
Activity 02: Where's sausage dog?
Cassandra Rousseau
The canvas will display many random images of animals at random positions,
one of which will be a sausage dog. The player has to click on the sausage dog
to win the game. When clicked successfully, the sausage dog will start spinning.
**************************************************/
"use strict";
let currentState;

let animalImage = [];
let animalObject = [];
const LOADING_SAUSAGE_DOG = "assets/images/sausage-dog.png";
const NUM_ANIMALS_IMAGES = 10;
const NUM_ANIMALS_DISPLAY = 100;
let sausageDog;
let sausageDogImage;

// Setting all the preloaded images
function preload() {
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
