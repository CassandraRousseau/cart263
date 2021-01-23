class Timer {
  constructor() {
    this.gamelength = 1500;
  }
  timeCheck(state, sausageDog, framecountSim) {
    if (!sausageDog.found && frameCount >= framecountSim + this.gamelength) {
      return "GameOver";
    } else if (
      sausageDog.found &&
      frameCount >= framecountSim + this.gamelength
    ) {
      return "GameAchieved";
    }
  }
  display() {
    push();
    textSize(110);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    fill(250);
    text(this.gamelength - frameCount, 10, 0, width / 2, height);
    pop();
  }
}
