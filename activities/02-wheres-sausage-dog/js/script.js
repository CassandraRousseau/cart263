/**************************************************
Activity 02: Where's sausage dog?
Cassandra Rousseau
The canvas will display many random images of animals at random positions,
one of which will be a sausage dog. The player has to click on the sausage dog
to win the game. When clicked successfully, the sausage dog will start spinning.
**************************************************/
"use strict";
const NUM_ANIMALS_IMAGES = 10;
const NUM_ANIMALS_DISPLAY = 100;
let animalImage = [];
let animalObject = [];
let dogImage;
let sausageDog;

function preload() {
  for (let i = 0; i < NUM_ANIMALS_IMAGES; i++) {
    let loadedImage = loadImage(`assets/images/animal${i}.png`);
    animalImage.push(loadedImage);
  }
  dogImage = loadImage("assets/images/sausage-dog.png");
}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < NUM_ANIMALS_DISPLAY; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let loadedImage = random(animalImage);
    let animal = new Animal(x, y, loadedImage);
    animalObject.push(animal);
  }
  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, dogImage);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(255);
  for (let i = 0; i < animalObject.length; i++) {
    animalObject[i].update();
  }
  sausageDog.update();
}
function mousePressed() {
  sausageDog.mousePressed();
}
