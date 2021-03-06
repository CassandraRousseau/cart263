class Manual {
  //Setting manual parameters
  constructor(listPlaces, listCareers) {
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
//
// for (let i = 0; i < this.shelves.length; i++) {
//   this.shelves[i].display();
// }
