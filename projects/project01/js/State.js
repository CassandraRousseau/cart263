class State {
  //Setting all the variables for each state
  constructor() {}

  //Setting preload method for each state
  preload() {}

  //Setting draw method for each state
  draw() {
    noStroke();
    fill(0);
    textFont(font);
  }

  //Setting mousePressed method for each state
  mousePressed() {
    //Setting mousePressed function

  if (state === "title") {
    state = "instructions";

    //added the responsiveVoice that is reading the the instructions
    responsiveVoice.speak(instruction, "UK English Female", {
      pitch: 2,
    });
  } else if (state === "instructions") {
    state = "simulation";
  } else if (state == "simulation") {
    //added how to display the question function
    nextQuestion();
  } else if (state === "correct" || state == "wrong") {
    //added how to reset the simulation
    state = "simulation";

    //added how to display the question function
    nextQuestion();
  }
}


guessedArt(artMovement) {
  //edit the art movements' names in lower cases
  currentAnswer = artMovement.toLowerCase();

  //if the answer is right
  if (currentAnswer === currentMovement) {
    //Added the artist response to the right answer
    chosenEncouragement = random(encouragements);
    responsiveVoice.speak(chosenEncouragement, "UK English Female", {
      pitch: 5,
    });
    state = "correct";

    //if the answer is wrong
  } else if (currentAnswer !== currentMovement) {
    //Added the artist response to the wrong answer
    chosenReaction = random(reactions);
    responsiveVoice.speak(chosenReaction, "UK English Female", {
      pitch: 5,
    });
    state = "wrong";
  }
}
//Setting the questions
function nextQuestion() {
  //Added the asked movement
  currentMovement = random(artMovements);
  reverseArt = reverseString(currentMovement);

  //Added the resposiveVoice  asking the question
  responsiveVoice.speak(reverseArt, "UK English Female", { pitch: 5 });
}
