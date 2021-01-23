/**************************************************
Activity 03: Spy Profile Generator
Cassandra Rousseau
When the user first loads our program it will ask for their name in a text prompt.
 Once provided, the program will generate and save the user’s super secret spy
  profile using random JSON data to determine an alias, secret weapon, and password.
   When the user comes back later, they will need to enter their generated password
    to view their profile again.
**************************************************/
let spyProfile = {
  name: "REDACTED",
  alias: "REDACTED",
  secretWeapon: "REDACTED",
  password: "REDACTED",
};
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  spyProfile.name = prompt(`What's your name?`, ``);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  let profile = `**CONFIDENTIAL SPY PROFILE**;
  Name:${spyProfile.name}
  Alias:${spyProfile.alias}
  Secret Weapon:${spyProfile.secretWeapon}
  Password:${spyProfile.password}`;
  push();
  textFont(`Courier, monospace`);
  textSize(32);
  textAlign(LEFT, TOP);
  fill(255);
  text(profile, 50, 50);
  pop();
}
