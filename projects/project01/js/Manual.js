class Manual {
  //Setting manual parameters
  constructor(listPlaces, listCareers) {
    //Creating list of places
    this.listPlaces = listPlaces;

    //Creating list of careers
    this.listCareers = listCareers;

    //Creating instructions
    this.quit = `To quit the manual, say 'exit manual'.`;

    //Creating active variable
    this.active = true;
  }

  //Display lists
  display() {
    push();
    //Display list of places
    textSize(30);
    fill(255);
    textAlign(CENTER, CENTER);
    translate(0, 0, 100);
    text(this.listPlaces, -width / 4, -height / 10);
    pop();
    push();
    //Display list of careers
    textSize(30);
    fill(255);
    textAlign(CENTER, CENTER);
    translate(0, 0, 100);
    text(this.listCareers, width / 4, -height / 10);
    pop();
    push();
    //Display how to quit
    textSize(30);
    fill(255);
    textAlign(CENTER, CENTER);
    translate(0, 0, 100);
    text(this.quit, width / 3, height / 10);
    pop();
  }
}
