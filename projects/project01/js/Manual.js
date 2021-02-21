class Manual extends State {
  constructor() {
    super();
    this.listPlaces = listPlaces;
    this.listCareers = listCareers;
    this.quit = `To quit the manual, say 'quit'.`;
  }
  display() {
    background(0);
    push();
    //Display the title
    textSize(30);
    textAlign(LEFT, TOP);
    text(this.listPlaces, 0, -height / 3);
    pop();
    push();
    //Display the title
    textSize(30);
    textAlign(RIGHT, TOP);
    text(this.listCareers, 0, -height / 3);
    pop();
    push();
    //Display the title
    textSize(30);
    textAlign(RIGHT, BOTTOM);
    text(this.quit, 0, -height / 3);
    pop();
  }
}
