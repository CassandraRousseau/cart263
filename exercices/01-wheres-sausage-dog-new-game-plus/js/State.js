class State {
  //Setting all the variables for each state
  constructor() {}

  //Setting preload method for each state
  preload() {}

  //Setting draw method for each state
  draw() {
    //Setting common text parameters for each state
    background(100, 200, 205);
    fill(255);
    textFont("Hachi Maru Pop");
  }

  //Setting mousePressed method for each state
  mousePressed() {}

  //Setting keyPressed method for each state
  keyPressed() {
    if (keyCode === 13 && !music.isPlaying()) {
      music.play();
      music.rate(1.5);
    }
  }
}
