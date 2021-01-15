/**************************************************
Template p5 project
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/
"use strict";
let phrase = "Hello,world!";
let saying = "";
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(255);

  push();
  textSize(32);
  textAlign(CENTER);
  text(saying, width / 2, height / 2);
  pop();
}
function mousePressed() {
  responsiveVoice.speak(phrase, "UK English Male", {
    onstart: showSpeaking,
    onend: hideSpeaking,
    pitch: 0.5,
    rate: 0.5,
    volume: 1,
  });
}
function showSpeaking() {
  saying = phrase;
}
function hideSpeaking() {
  saying = "";
}
