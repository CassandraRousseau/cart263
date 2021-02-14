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

    // Display the webcam with reveresd image so it's a mirror
    let flippedVideo = ml5.flipImage(video);
    image(flippedVideo, 0, 0, width, height);

    // Check if there currently predictions to display
    if (predictions.length > 0) {
      // Technically there will only be ONE because it only detects ONE hand
      // Get the hand predicted
      let hand = predictions[0];
      // Highlight it on the canvas
      highlightHand(hand);
    }
  }

  //Setting mousePressed method for each state
  mousePressed() {}

  chosenLocation(room) {
    //edit the art movements' names in lower cases
    currentAnswer = room.toLowerCase();

    //if the answer is right
    if (currentAnswer === "auditorium") {
      currentState = new Auditorium();

      //if the answer is wrong
      // } else if (currentAnswer !== currentMovement) {
      //   //Added the artist response to the wrong answer
      //   chosenReaction = random(reactions);
      //   responsiveVoice.speak(chosenReaction, "UK English Female", {
      //     pitch: 5,
      //   });
      //   state = "wrong";
    } else if (currentAnswer === "library") {
      currentState = new Library();

      //if the answer is wrong
    } else if (currentAnswer === "basketball field") {
      currentState = new BasketballField();

      //if the answer is wrong
    } else if (currentAnswer === "art studio") {
      currentState = new ArtStudio();

      //if the answer is wrong
    } else if (currentAnswer === "photo studio") {
      currentState = new PhotoStudio();

      //if the answer is wrong
    } else if (currentAnswer === "hall") {
      currentState = new Hall();

      //if the answer is wrong
    } else if (currentAnswer === "bakery") {
      currentState = new Bakery();
    }
  }
  chosenCareer() {
    currentAnswer = career.toLowerCase();
    if (currentAnswer === chosenCareer) {
      currentState = new Ending();

      //if the answer is wrong
    } else if (currentAnswer !== chosenCareer) {
      responsiveVoice.speak("I can't hear you...", "UK English Female", {
        pitch: 3,
      });
    }
  }
  highlightHand(hand) {
    let index = hand.annotations.indexFinger[3];
    let indexX = index[0];
    let indexY = index[1];
    push();
    fill(255, 255, 0);
    noStroke();
    ellipse(indexX, indexY, 50);
    pop();
  }
}
