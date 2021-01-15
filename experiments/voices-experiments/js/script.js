/**************************************************
Template p5 project
Cassandra Rousseau

Here is a description of this template p5 project.
**************************************************/
"use strict";
let face = ":-|";
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    let commands = {
      "I love you": love,
      "I hate you": hate,
    };

    // Add our commands to annyang
    annyang.addCommands(commands);
    annyang.start();
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  push();
  translate(width / 2, height / 2);
  rotate(PI / 2);
  textSize(400);
  textAlign(CENTER, CENTER);
  fill(255);
  text(face, 0, 0);
  pop();
}
function love() {
  face = ":-)";
}
function hate() {
  face = ":-(";
}
