/**************************************************
Activity 04:Bubble Popper
Cassandra Rousseau

Using hand tracking we turn the user’s index finger into a pin on our program’s canvas.
 A bubble floats upward repeatedly and the user can pop the bubble with the pointy end of their pin-finger.
**************************************************/
"use strict";
let video = undefined;
let modelName = `Handpose`;
let handpose = undefined;
let predictions = [];
let bubble;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  handpose = ml5.handpose(video, { flipHorizontal: true }, function () {
    console.log(`Model loaded.`);
  });
  handpose.on(`predict`, function (results) {
    console.log(results);
    predictions = results;
  });

  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2,
  };
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    displayPin(baseX, baseY, tipX, tipY);

    poppingBubble(tipX, tipY);
  }

  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  displayBubble();
  resetBubble();
}
function poppingBubble(tipX, tipY) {
  let d = dist(tipX, tipY, bubble.x, bubble.y);
  if (d < bubble.size / 2) {
    bubble.x = random(0, width);
    bubble.y = height;
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
  fill(0, 100, 200);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}
