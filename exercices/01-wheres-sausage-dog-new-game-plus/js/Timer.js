class Timer {
  constructor() {
    this.timeout = setTimeout("Level", 100000);
  }
  timeCheck(state, sausageDog) {
    if (!sausageDog.found && frameCount > this.timeout) {
      return "GameOver";
    } else if (sausageDog.found && frameCount > this.timeout) {
      return "GameAchieved";
    }
  }
}
