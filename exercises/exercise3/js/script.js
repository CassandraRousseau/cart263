/**************************************************
Activity 03: Spy Profile Generator
Cassandra Rousseau
When the user first loads our program it will ask for their name in a text prompt.
 Once provided, the program will generate and save the user’s super secret spy
  profile using random JSON data to determine an alias, secret weapon, and password.
   When the user comes back later, they will need to enter their generated password
    to view their profile again.
**************************************************/
const JSON_TAROT = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`;
const JSON_DESCRIPTIONS = `https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/descriptions.json`;
const JSON_SPELL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/words/spells.json`;
const JSON_OBJECT = `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`;
const JSON_INSTRUMENT = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;
const KEY_PROFILE_DATA = `spy-profile-data`;
let spyProfile = {
  name: "REDACTED",
  alias: "REDACTED",
  characteristics: "REDACTED",
  power: "REDACTED",
  secretWeapon: "REDACTED",
  password: "REDACTED",
};
let tarotData;
let objectData;
let descriptionData;
let spellData;
let instrumentData;
function preload() {
  tarotData = loadJSON(JSON_TAROT);
  descriptionData = loadJSON(JSON_DESCRIPTIONS);
  spellData = loadJSON(JSON_SPELL);
  objectData = loadJSON(JSON_OBJECT);
  instrumentData = loadJSON(JSON_INSTRUMENT);
}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  let data = JSON.parse(localStorage.getItem(KEY_PROFILE_DATA));

  if (data !== null) {
    //localStorage.removeItem(KEY_PROFILE_DATA);
    spyProfile.name = data.name;
    spyProfile.alias = data.alias;
    spyProfile.characteristics = data.characteristics;
    spyProfile.power = data.power;
    spyProfile.secretWeapon = data.secretWeapon;
    spyProfile.password = data.password;
  } else {
    generateSpyProfile();
  }
  // let name = prompt(`What's your name?`);
  // let password = prompt(`What is your password?`);
  // if (name === data.name && password === data.password) {
  //   setSpyData(spyProfile, data);
}
// } else if (name === `I don't remember` || password === `I don't remember`) {

function setSpyData(spyProfile, data) {
  spyProfile.name = data.name;
  spyProfile.alias = data.alias;
  spyProfile.characteristics = data.characteristics;
  spyProfile.power = data.power;
  spyProfile.secretWeapon = data.secretWeapon;
  spyProfile.password = data.password;
}
function generateSpyProfile() {
  spyProfile.name;
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  let spell = random(spellData.spells[1]);
  spyProfile.power = random(spell.spells);
  spyProfile.characteristics = random(descriptionData.descriptions);
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

  localStorage.setItem(KEY_PROFILE_DATA, JSON.stringify(spyProfile));
}
// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  let profile = `**CONFIDENTIAL SPY PROFILE**;
  Name:${spyProfile.name}
  Alias:${spyProfile.alias}
  Characteristics:${spyProfile.characteristics}
  Power:${spyProfile.power}
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
