/**************************************************
Exercise 03: Spy Profile Generator
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
const disappointed = [
  `How dare you!!!`,
  `Forgetting your agent name and/or your password?!?`,
  `I'm disppointed...`,
  `Really...`,
  `US!!!!`,
  `THE AGENTS!!!`,
  `WE RISK OUR LIVES AT THE FRONT LINE!!!`,
  `Well, secretly,`,
  `TO PROTECT OUR COUNTRY!!!`,
  `FROM THE EVIL IN THIS WORLD!!!`,
  `AND YOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU`,
  `UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU`,
  `UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU.`,
  `ARE.NOT.ABLE.TO.REMEMBER.YOUR.OWN.PERSONAL.INFORMATIONS.`,
  `UNBELIEVABLE.`,
  `REALLY.`,
  `HOW CAN I TRUST YOU TO REMEMBER,KEEP,MONITOR HIGHLY CONFIDENTIAL,IMPORTANT,SECRET,SUPERVISED INFORMATIONS???`,
  `HUH?!?`,
  `Unless...`,
  `?`,
  `!!!`,
  `NO WAY!!!`,
  `ARE YOU AN ENEMY?`,
  `OR A TREATOR?`,
  `A MOLE?!?!`,
  `!!!!!!!!`,
  `*Agents, code 345, please search for the IP and all the required informations*`,
  `DON'T SEARCH FOR ANY ACCESS IN OUR SYSTEM NOR YOUR ACCOUNT`,
  `YOU HOPELESS,USELESS TREATOR!`,
  `NO MATTER WHO YOU ARE, WHERE YOU ARE FROM...`,
  `YOU'RE FIRED.`,
  `FIREEEEEEEDDDDDDDDD`,
  `FIRED!FIRED!FIRED!FIRED!`,
  `FIREEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD`,
  `DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD`,
  `DDDDDDDDDDDDDDDDDDDDDDDD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`,
  `!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`,
  `...`,
  `....aaaaaaaAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH`,
  `HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH`,
  `HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`,
];
let tarotData;
let objectData;
let descriptionData;
let spellData;
let instrumentData;
let currentLine = 0;
let state = ``;
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
    spyProfile.name = prompt(`What's your name?`);
    let password = prompt(`What is your password?`);
    if (name === data.name && password === data.password) {
      console.log(`file`);
      state = `file`;
      currentLine = 0;
      setSpyData(spyProfile, data);
    } else if (name !== data.name || password !== data.password) {
      state == `disappointment`;
      currentLine = 0;
    }
  } else {
    state = "file";
    currentLine = 0;
    generateSpyProfile();
  }
}

function setSpyData(spyProfile, data) {
  spyProfile.name = data.name;
  spyProfile.alias = data.alias;
  spyProfile.characteristics = data.characteristics;
  spyProfile.power = data.power;
  spyProfile.secretWeapon = data.secretWeapon;
  spyProfile.password = data.password;
  file();
}
function generateSpyProfile() {
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  let spell = random(spellData.spells);
  spyProfile.power = random(spell.effect);
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
  if (state === "file") {
    file();

    console.log(file);
  } else if (state === "disappointment") {
    disappointment();
    console.log(disappointment);
  }
}
function file() {
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
function disappointment() {
  state = `disappointment`;

  push();
  textFont(`Courier, monospace`);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(disappointed, 0, 0);
  pop();
}
function mousePressed() {
  currentLine = currentLine + 1;

  if (currentLine === disappointed.length && state === "disappointment") {
    currentLine = disappointed.length - 1;
  }
}
