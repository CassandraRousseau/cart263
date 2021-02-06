/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
"use strict";
let state = `loading`;
let video;
let modelName = `Handpose`;
let handpose;
let predictions = [];

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.hide();
  handpose = ml5.handpose(video, {}, function () {
    state = `running`;
  });
  handpose.on(`predict`, function (results) {
    predictions = results;
  });
}
// draw()
//
// Description of draw() goes here.
function draw() {
  if (state === `loading`) {
    loading();
  } else if (state === `running`) {
    running();
  }
}

function loading() {
  background(255);
  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Loading${modelName}...`, width / 2, height / 2);
  pop();
}
function running() {
  image(video, 0, 0, width, height);
  if (predictions.length > 0) {
    for (let i = 0; i < predictions.length; i++) {
      let hand = predictions[i];
      highlightHand(hand);
    }
  }
}
function highlightHand(hand) {
  let index = hand.annotations.indexFinger[3];
  let indexX = index[0];
  let indexY = index[1];
  push();
  fill(255, 255, 0);
  noStroke();
  ellipse(indexX, indexY, 50);
  pop();
}
