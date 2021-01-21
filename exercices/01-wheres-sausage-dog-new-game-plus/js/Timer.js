class Timer {
  constructor() {}
  timeCheck(state, sausageDog, setTimeout) {
    if (!sausageDog.found && frameCount > setTimeout) {
      return "GameOver";
    } else if (sausageDog.found && frameCount > setTimeout) {
      return "GameAchieved";
    }
  }
}
