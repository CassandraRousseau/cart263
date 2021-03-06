class Manual extends State {
  //Setting manual parameters
  constructor(listPlaces, listCareers) {
    super(listPlaces, listCareers);
    this.listPlaces = listPlaces;
    this.listCareers = listCareers;
    // this.listPlaces = room.rooms;
    // this.listCareers = careers.occupations;
    // room, careers
    // for (let i = 0; i < shelvesData.shelves.length; i++) {
    //   let dataShelves = shelvesData.shelves[i];
    //   this.shelf = new Shelves(dataShelves.x, dataShelves.rotateY, wood, shelf);
    //   this.shelves.push(this.shelf);
    // }
    this.quit = `To quit the manual, say 'exit manual'.`;
    this.active = undefined;
  }

  //Display lists
  draw() {
    super.draw();
    // background(0);
    push();
    //Display list of places
    textSize(30);
    fill(255);
    textAlign(CENTER, CENTER);
    translate(0, 0, 500);
    text(this.listPlaces, 0, -height / 3);
    pop();
    push();
    //Display list of careers
    textSize(30);
    fill(255);
    textAlign(CENTER, CENTER);
    translate(0, 0, 200);
    text(this.listCareers, 0, -height / 3);
    pop();
    push();
    //Display how to quit
    textSize(30);
    fill(255);
    textAlign(CENTER, CENTER);
    translate(0, 0, 200);
    text(this.quit, 0, -height / 3);
    pop();
  }
}
//
// for (let i = 0; i < this.shelves.length; i++) {
//   this.shelves[i].display();
// }
