class Timer {
  //Added level length
  constructor() {
    this.gamelength = 1500;
  }
  //What happens when the level is over
  timeCheck(state, sausageDog, framecountSim) {
    //If the user hasn't found the sausage dog
    if (!sausageDog.found && frameCount === framecountSim + this.gamelength) {
      return "GameOver";
    }
    //If the user found the sausage dog
    else if (
      sausageDog.found &&
      frameCount === framecountSim + this.gamelength
    ) {
      return "GameAchieved";
    }
  }
  //Display the timer
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
