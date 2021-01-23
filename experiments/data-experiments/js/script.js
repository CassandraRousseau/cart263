"use strict";
let jokeText = "";
let jokeData;
function preload() {
  jokeData = loadJSON(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  let joke = jokeData[0];
  jokeText = `${joke.setup}\n\n${joke.punchline}`;
}
function draw() {
  background(0);
  push();
  fill(255, 255, 0);
  textSize(32);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  text(jokeText, width / 2, height / 2, width / 2, height / 2);
  pop();
}
