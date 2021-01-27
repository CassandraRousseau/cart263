/**************************************************
Activity 02:Find my Dog!
Cassandra Rousseau
The game will start with a woman asking if the user could help her fin her sausage dog.
The user has to find the dog within a certain amount of time through animals displayed and moving randomly.
The player has to click on the sausage dog to win the game. When clicked successfully,
the sausage dog will start growing and the woman will be happy that the user find her dog.
If the dog wasn't found within the delay, the woman will be sad. :'(
**************************************************/
"use strict";
//Declared current state
let currentState;
//Declared animal arrays
let animalImage = [];
let animalObject = [];
//Declared constant that load the music
const LOADING_MUSIC = "assets/sounds/My_Dog_Is_Happy.mp3";
//Declared constants that load the images
const LOADING_GIRL_ASKING = "assets/images/GirlNeutral.png";
const LOADING_GIRL_HAPPY = "assets/images/GirlHappy.png";
const LOADING_GIRL_SAD = "assets/images/GirlSad.png";
const LOADING_SAUSAGE_DOG = "assets/images/sausage-dog.png";
//Declared constants that load the number of animals displayed
const NUM_ANIMALS_IMAGES = 10;
const NUM_ANIMALS_DISPLAY = 100;
//Declare the music and images
let music;
let askingImage;
let happyImage;
let sadImage;
let sausageDog;
let sausageDogImage;

// Setting all the preloaded images and music
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

  //Declared that the first state is the title
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
