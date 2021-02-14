/**************************************************
Activity 04:Bubble Popper
Cassandra Rousseau

Using hand tracking we turn the user’s index finger into a pin on our program’s canvas.
 A bubble floats upward repeatedly and the user can pop the bubble with the pointy end of their pin-finger.
**************************************************/
"use strict";
let state = "title";
let video = undefined;
let modelName = `Handpose`;
let handpose = undefined;
let predictions = [];
let bubbles = [];
let intro = `Pop most bubbles as possible with your hand! Enjoy!`;
let bubble;
let pin;
let hand;
let index;
let tip;
let base;
let tipX;
let tipY;
let baseX;
let baseY;
let bubbleImage;
let ocean;
let numBubbles = 10;
let gameData = {
  highScore: 0, // Start the high score at 0 by default
};
// setup()
//
// Description of setup() goes here.
function preload() {
  bubbleImage = loadImage(`assets/images/bubble.png`);
  ocean = loadImage(`assets/images/ocean.jpg`);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.hide();
  handpose = ml5.handpose(video, { flipHorizontal: true }, function () {});
  handpose.on(`predict`, function (results) {
    predictions = results;
  });
  // Try to load the game data (remembering to parse it first)
  let data = JSON.parse(localStorage.getItem(`game-data`));
  // Check if there's anything there
  if (data !== null) {
    // There is data! So replace our default game data with the save data
    gameData = data;
  }
  bubble = {
    x: random(width),
    y: height,
    w: 100,
    h: 100,
    image: bubbleImage,
    vx: 0,
    vy: -5,
    active: true,
  };
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(ocean);
  textFont("Gloria Hallelujah");
  if (state === "title") {
    title();
  } else if (state === "instructions") {
    instructions();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "correct") {
    rightAnswer();
  } else if (state === "wrong") {
    wrongAnswer();
  }
}
function title() {
  push();

  //Adding title string
  textSize(105);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Pop the Bubble!", width / 2, height / 2);

  //adding how to change the state
  push();
  textSize(35);
  text("Pop the bubble to start", width / 2, (2 * height) / 3);
  pop();
  bubbleGame();
  if (!bubble.active) {
    state = "instructions";
  }
  pop();
}
function instructions() {
  push();

  //Adding title string
  textSize(55);
  fill(255);
  textAlign(LEFT, TOP);
  text(intro, 10, 10, width / 2, height / 2);

  //adding how to change the state
  push();
  textSize(35);
  text("Pop the bubble to start", width / 2, (2 * height) / 3);
  pop();
  pop();
  bubbleGame();
  if (!bubble.active) {
    state = "simulation";
  }
}
function simulation() {
  for (let i = 0; i < numBubbles; i++) {
    // Create a fish
    let fish = createFish(random(0, width), random(0, height));
    // Add the fish to our array
    school.push(fish);
  }
  bubbleGame();
  if (!bubble.active > gameData.highScore) {
    // Set the new high score
    gameData.highScore = clicks;
    // Save the game data to remember for next time, remembering to stringify the data first
    localStorage.setItem(`game-data`, JSON.stringify(gameData));
  }
}
function bubbleGame() {
  if (predictions.length > 0) {
    hand = predictions[0];
    index = hand.annotations.indexFinger;
    tip = index[3];
    base = index[0];
    tipX = tip[0];
    tipY = tip[1];
    baseX = base[0];
    baseY = base[1];

    poppingBubble(tipX, tipY);
    displayPin(baseX, baseY, tipX, tipY);
  }

  bubble.x += bubble.vx;
  bubble.y += bubble.vy;
  resetBubble();
  displayBubble();
}
function ending() {
  // Display high score
  push();
  textSize(32);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(255, 255, 0);
  text(`High score: ${gameData.highScore}`, 0, 0);
  pop();
}
function poppingBubble(tipX, tipY) {
  let d = dist(tipX, tipY, bubble.x, bubble.y);
  if (d < bubble.w / 2 && d < bubble.h / 2) {
    bubble.active = false;
    console.log(d);
    // bubble.x = random(0, width);
    // bubble.y = height;
  }
}
function resetBubble() {
  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  }
}
function displayPin(baseX, baseY, tipX, tipY) {
  push();
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  line(baseX, baseY, tipX, tipY);
  pop();

  push();
  noStroke();
  fill(255, 0, 0);
  ellipse(baseX, baseY, 20);
  pop();
}
function displayBubble() {
  push();

  noStroke();
  image(bubble.image, bubble.x, bubble.y, bubble.w, bubble.h);

  pop();
}
