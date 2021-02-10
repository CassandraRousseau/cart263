/**************************************************
Exercise 03: Spy Profile Generator
Cassandra Rousseau
When the user first loads our program it will ask for their name in a text prompt.
 Once provided, the program will generate and save the user’s super secret spy
  profile using random JSON data to determine an alias, secret weapon, and password.
   When the user comes back later, they will need to enter their generated password
    to view their profile again.
**************************************************/
"use strict";
//Added JSON data
const JSON_TAROT = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`;
const JSON_DESCRIPTIONS = `https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/descriptions.json`;
const JSON_SPELL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/words/spells.json`;
const JSON_OBJECT = `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`;
const JSON_INSTRUMENT = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;
const KEY_PROFILE_DATA = `spy-profile-data`;

//Added spy profile
let spyProfile = {
  name: "REDACTED",
  alias: "REDACTED",
  characteristics: "REDACTED",
  power: "REDACTED",
  secretWeapon: "REDACTED",
  password: "REDACTED",
};

//Added dialog in disappointment state
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

//Added data variables
let tarotData;
let objectData;
let descriptionData;
let spellData;
let instrumentData;

//Added current line in dialogs
let currentLine = 0;

//Added state variable
let state = ``;

//Preloading JSON data
function preload() {
  tarotData = loadJSON(JSON_TAROT);
  descriptionData = loadJSON(JSON_DESCRIPTIONS);
  spellData = loadJSON(JSON_SPELL);
  objectData = loadJSON(JSON_OBJECT);
  instrumentData = loadJSON(JSON_INSTRUMENT);
}

//Setting the program
function setup() {
  console.log(state);

  //Setting Canvas
  createCanvas(windowWidth, windowHeight);

  //Setting saved JSON data
  let data = JSON.parse(localStorage.getItem(KEY_PROFILE_DATA));

  //setting what happens with data
  if (data !== null) {
    //Asking name and password
    spyProfile.name = prompt(`What's your name?`);
    let password = prompt(`What is your password?`);

    //Setting spy data if name and password are right
    if (name === data.name && password === data.password) {
      console.log(`file`);
      state = `file`;
      currentLine = 0;
      setSpyData(spyProfile, data);
    }

    //Setting disappointment state if name or password is wrong
    else if (name !== data.name || password !== data.password) {
      state == `disappointment`;
      currentLine = 0;
    }
  }

  //Generate a spy profile of there's no data
  else {
    state = "file";
    currentLine = 0;
    generateSpyProfile();
  }
}

//Sets the data according to the required information in spy profile
function setSpyData(spyProfile, data) {
  spyProfile.name = data.name;
  spyProfile.alias = data.alias;
  spyProfile.characteristics = data.characteristics;
  spyProfile.power = data.power;
  spyProfile.secretWeapon = data.secretWeapon;
  spyProfile.password = data.password;
}

//Creating a spy profile through random JSONs informations
function generateSpyProfile() {
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  let spell = random(spellData.spells);
  spyProfile.power = random(spell.effect);
  spyProfile.characteristics = random(descriptionData.descriptions);
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

  //Save th profile
  localStorage.setItem(KEY_PROFILE_DATA, JSON.stringify(spyProfile));
}

//Creating states
function draw() {
  background(0);

  //Calls file if state = file
  if (state === "file") {
    file();

    console.log(file);
  }

  //Calls disppointment if state = disappointment
  else if (state === "disappointment") {
    disappointment();
    console.log(disappointment);
  }
}

//Creating file dispaly
function file() {
  //Display spy profile
  let profile = `**CONFIDENTIAL SPY PROFILE**;
  Name:${spyProfile.name}
  Alias:${spyProfile.alias}
  Characteristics:${spyProfile.characteristics}
  Power:${spyProfile.power}
  Secret Weapon:${spyProfile.secretWeapon}
  Password:${spyProfile.password}`;

  //Display text
  push();
  textFont(`Courier, monospace`);
  textSize(32);
  textAlign(LEFT, TOP);
  fill(255);
  text(profile, 50, 50);
  pop();
}

//Created disappointment state
function disappointment() {
  //Added text
  push();
  textFont(`Courier, monospace`);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(disappointed, 0, 0);
  pop();
}

//Change the line in the dialog thorugh mousePressed
function mousePressed() {
  currentLine = currentLine + 1;

  if (currentLine === disappointed.length && state === "disappointment") {
    currentLine = disappointed.length - 1;
  }
}
