/**************************************************
Exercise 04:Pop the Bubble!
Cassandra Rousseau

The user is welcomed with the title screen, followed with the instructions state. The goal of the game is to pop most bubbles as possible.
During the simulation, the user uses his hand to track the bubbles by using his index finger as a pin on our program’s canvas.
 Bubbles floats upward repeatedly and the user has to pop the bubbles with the pointy end of their pin-finger.
 User's score will be displayed at the end of the game. The highscore will be saved in the localStorage; the user will be able
 to beat his own score the next time he wants to play the game.
**************************************************/
"use strict";

//Created state variable
let state = "title";

//Created ml5.js variables
let video = undefined;
let modelName = `Handpose`;
let handpose = undefined;
let predictions = [];

//Added hand parts variables
let pin;
let hand;
let index;
let tip;
let base;
let tipX;
let tipY;
let baseX;
let baseY;

//Created bubble variables
let bubbles = [];
let bubbleTitle;
let bubbleIntro;
let bubble;
let bubbleImage;
let numBubbles = 10;

//Created instructions text variable
let intro = `Pop most bubbles as possible with your hand! Enjoy!`;

//Created background variable
let ocean;

//Created time parameters
let gamelength = 60 * 15;
let gameOverTimer = 0;

//Created localStorage variable
let gameData = {
  highScore: 0, // Start the high score at 0 by default
};

// Preloaded images
function preload() {
  bubbleImage = loadImage(`assets/images/bubble.png`);
  ocean = loadImage(`assets/images/ocean.jpg`);
}

//Setting parameters
function setup() {
  //Creating canvas
  createCanvas(windowWidth, windowHeight);

  //Creating video parameters
  video = createCapture(VIDEO);
  video.hide();

  //Creating handpose function
  handpose = ml5.handpose(video, { flipHorizontal: true }, function () {});
  handpose.on(`predict`, function (results) {
    predictions = results;
  });

  //Creating bubbles
  bubbleTitle = new Bubble(bubbleImage);
  bubbleIntro = new Bubble(bubbleImage);
  for (let i = 0; i < numBubbles; i++) {
    bubble = new Bubble(bubbleImage);

    bubbles.push(bubble);
  }

  //Creating data parameters
  let data = JSON.parse(localStorage.getItem(`game-data`));

  // Check if there's saved data
  if (data !== null) {
    // Saving new data
    gameData = data;
  }
}

// Drawing the states
function draw() {
  //Adding background
  background(ocean);

  //Adding text font
  textFont("Gloria Hallelujah");

  //Adding states
  if (state === "title") {
    title();
  } else if (state === "instructions") {
    instructions();
  } else if (state === "simulation") {
    simulation();
  } else if (state === "ending") {
    ending();
  }
}

//Setting title screen
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

  //Adding the bubble
  bubbleGameTitle();

  //Changing state after the bubble is popped
  if (!bubbleTitle.active) {
    //Goes to instructions state
    state = "instructions";

    //Resets the bubble
    bubbleTitle.resetGame();
  }

  //Display the bubble in the state
  bubbleTitle.display();
  pop();
}

//Setting instructions state
function instructions() {
  push();

  //Adding instructions
  textSize(55);
  fill(255);
  textAlign(LEFT, TOP);
  text(intro, 10, 10, width / 2, height / 2);

  //adding how to change the state
  push();
  textSize(35);
  text("Pop the bubble to start", width / 2, (2 * height) / 3);
  pop();

  //Setting the bubble in the state
  bubbleGameIntro();
  if (!bubbleIntro.active) {
    //Changing to simulation state
    state = "simulation";

    //Resets the bubble
    bubble.resetGame();
  }

  //Disply the bubble
  bubbleIntro.display();
  pop();
}

//Setting the simulation state
function simulation() {
  //Adding timer
  timer();

  //Setting bubbles
  for (let i = 0; i < bubbles.length; i++) {
    let bubblesGame = bubbles[i];
    bubbleGame();

    //Adding bubbles if there's no more bubbles in the simulation
    addingBubbles(bubblesGame);

    //Saving score based on how many bubbles the user popped
    if (!bubblesGame.active > gameData.highScore) {
      // Set the new high score
      gameData.highScore = !bubblesGame.active;

      // Save the game data
      localStorage.setItem(`game-data`, JSON.stringify(gameData));
    }
  }
}

//Setting ending state
function ending() {
  // Display high score
  push();
  textSize(32);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(255);
  text(`High score: ${gameData.highScore}`, 0, 0);
  pop();
}

//Setting the timer
function timer() {
  //Adding the time left
  gameOverTimer++;

  //The game ends once the timer is over
  if (gameOverTimer >= gamelength) {
    state = "ending";
  }
}

//Setting how bubbles are added in the simulation
function addingBubbles(bubblesGame) {
  //Adding new bubbles if there's none left in the simulation
  if (!bubblesGame.active) {
    for (let i = 0; i < numBubbles; i++) {
      bubble = new Bubble(bubbleImage);

      bubbles.push(bubble);
    }
  }
}

function bubbleGameTitle() {
  //Setting handpose positions on hand
  if (predictions.length > 0) {
    hand = predictions[0];
    index = hand.annotations.indexFinger;
    tip = index[3];
    base = index[0];
    tipX = tip[0];
    tipY = tip[1];
    baseX = base[0];
    baseY = base[1];

    //Setting how to pop the bubble in the state
    poppingBubbleTitle(tipX, tipY);

    //Display the pin in the state
    displayPin(baseX, baseY, tipX, tipY);
  }

  //Creating bubble movements
  bubbleTitle.move();

  //Sets how the bubble come back to the canvas
  bubbleTitle.resetBubble();

  //Display the bubble
  bubbleTitle.display();
}

function bubbleGameIntro() {
  //Setting handpose positions on hand
  if (predictions.length > 0) {
    hand = predictions[0];
    index = hand.annotations.indexFinger;
    tip = index[3];
    base = index[0];
    tipX = tip[0];
    tipY = tip[1];
    baseX = base[0];
    baseY = base[1];

    //Setting how to pop the bubble in the state
    poppingBubbleIntro(tipX, tipY);

    //Display the pin in the state
    displayPin(baseX, baseY, tipX, tipY);
  }

  //Creating bubble movements
  bubbleIntro.move();

  //Sets how the bubble come back to the canvas
  bubbleIntro.resetBubble();

  //Display the bubble
  bubbleIntro.display();
}

function bubbleGame() {
  //Setting handpose positions on hand
  if (predictions.length > 0) {
    hand = predictions[0];
    z;
    index = hand.annotations.indexFinger;
    tip = index[3];
    base = index[0];
    tipX = tip[0];
    tipY = tip[1];
    baseX = base[0];
    baseY = base[1];

    //Setting how to pop the bubbles in the state
    poppingBubbleGame(tipX, tipY);

    //Display the pin in the state
    displayPin(baseX, baseY, tipX, tipY);
  }

  //Creating bubbles movements
  bubble.move();

  //Sets how the bubble come back to the canvas
  bubble.resetBubble();

  //Display the bubbles
  bubble.display();
}

//Creating how to pop the bubble in the title
function poppingBubbleTitle(tipX, tipY) {
  //Pops the bubble once the pin and the bubble overlaps
  let d = dist(tipX, tipY, bubbleTitle.x, bubbleTitle.y);
  if (d < bubbleTitle.w / 2 && d < bubbleTitle.h / 2) {
    bubbleTitle.active = false;
  }
}

//Creating how to pop the bubble in the instructions
function poppingBubbleIntro(tipX, tipY) {
  //Pops the bubble once the pin and the bubble overlaps
  let d = dist(tipX, tipY, bubbleIntro.x, bubbleIntro.y);
  if (d < bubbleIntro.w / 2 && d < bubbleIntro.h / 2) {
    bubbleIntro.active = false;
  }
}

//Creating how to pop bubbles in the simulation
function poppingBubbleGame(tipX, tipY) {
  //Pops the bubble once the pin and the bubble overlaps
  let d = dist(tipX, tipY, bubble.x, bubble.y);
  if (d < bubble.w / 2 && d < bubble.h / 2) {
    bubble.active = false;
  }
}

//Creating the pin
function displayPin(baseX, baseY, tipX, tipY) {
  //Creating the tip
  push();
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  line(baseX, baseY, tipX, tipY);
  pop();

  //Creating the base
  push();
  noStroke();
  fill(255, 0, 0);
  ellipse(baseX, baseY, 20);
  pop();
}
