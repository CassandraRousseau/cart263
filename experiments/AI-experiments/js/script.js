/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
"use strict";
let state = `loading`;
let video;
let modelName = `CocoSsd`;
let cocossd;
let predictions = [];

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.hide();
  cocossd = ml5.objectDetector("cocossd", {}, function () {
    cocossd.detect(video, gotResults);
    state = `running`;
  });
}
function gotResults(err, results) {
  if (err) {
    console.error(err);
  } else {
    predictions = results;
  }
  cocossd.detect(video, gotResults);
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
  if (predictions) {
    for (let i = 0; i < predictions.length; i++) {
      let object = predictions[i];
      highlightObject(object);
    }
  }
}
function highlightObject(object) {
  push();
  noFill();
  stroke(255, 255, 0);
  rect(object.x, object.y, object.width, object.height);
  pop();
  push();
  textSize(18);
  fill(255, 255, 0);
  textAlign(CENTER, CENTER);
  text(
    `${object.label},${object.confidence.toFixed(2)}`,
    object.x + object.width / 2,
    object.y + object.height / 2
  );
}
