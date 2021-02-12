/**************************************************
Exercise 03: Spy Profile Generator
Cassandra Rousseau
When the user first loads our program it will ask for their name in a text prompt.
 Once provided, the program will generate and save the user’s super secret spy
  profile using random JSON data to determine an alias,characteristic, power,secret weapon, and password.
   When the user comes back later, they will need to enter their name and generated password
    to view their profile again.If they fail to enter them correctly, an agent will share his disappointment about you.
**************************************************/

//Sources: sound: Jevil, “Papyrus Talking,” YouTube, 2020, video, 0:15, https://www.youtube.com/watch?v=ivc-5ZlOpd8&ab_channel=Jevil.
//alarm: "Alarm Clock," uploaded June 2014,YouTube, online recording,https://studio.youtube.com/channel/UCFFgeleuT_ixFKXDmENZSRA/music.
//video:gregstee, “Mind blown/Mind explosion,” YouTube, 2012, video, 0:23, https://www.youtube.com/watch?v=9CS7j5I6aOc&ab_channel=gregstee.

"use strict";

//Added JSON data
const JSON_TAROT = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`;
const JSON_DESCRIPTIONS = `https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/descriptions.json`;
const JSON_SPELL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/words/spells.json`;
const JSON_OBJECT = `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`;
const JSON_INSTRUMENT = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;
const KEY_PROFILE_DATA = `spy-profile-data`;

//Added sound effects
const SOUND_TYPEWRITING = `assets/sounds/writing.mp3`;
const ALARM_URGENCE = `assets/sounds/Alarm Clock.mp3`;
//Added spy profile
let spyProfile = {
  name: "REDACTED",
  alias: "REDACTED",
  characteristic: "REDACTED",
  power: "REDACTED",
  secretWeapon: "REDACTED",
  password: "REDACTED",
};

//Added dialog in disappointment state
const disappointed = [
  `How dare you!!!`,
  `Forgetting your agent name and/or your password?!?`,
  `I'm disappointed...`,
  `Really...`,
  `US!!!!`,
  `THE AGENTS!!!`,
  `WE RISK OUR LIVES ON THE FRONT LINE!!!`,
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
  `A SPY?`,
  `A MOLE?!?!`,
  `!!!!!!!!`,
  `*Agents, code 345, please search for the IP and all required informations*`,
  `DON'T SEARCH FOR ANY ACCESS IN OUR SYSTEM NOR THE ACCOUNT`,
  `YOU HOPELESS,USELESS IMPOSTOR!`,
  `NO MATTER WHO YOU ARE, WHERE YOU ARE FROM...`,
  `GET OUT.`,
  `GET OUTTTTTTTT!!!`,
  `GET OUT! GET OUT! GET OUT! GET OUT!`,
  `GET OUTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT`,
  `TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT`,
  `TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`,
  `!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`,
  `...`,
  `....aaaaaaaAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH`,
  `HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`,
  ``,
];

//Added data variables
let tarotData;
let objectData;
let descriptionData;
let spellData;
let instrumentData;
let password;
let data;

//Added typewriting effect
let typewriter;

//Added sound variables
let sound;
let alarm;

//Added current line in dialogs and dialog variable
let currentLine = 0;
let dialog;

//Added video variable
let video;

//Added state variable
let state = ``;

//Preloading JSON data
function preload() {
  tarotData = loadJSON(JSON_TAROT);
  descriptionData = loadJSON(JSON_DESCRIPTIONS);
  spellData = loadJSON(JSON_SPELL);
  objectData = loadJSON(JSON_OBJECT);
  instrumentData = loadJSON(JSON_INSTRUMENT);

  //Preloading sound effects
  sound = loadSound(SOUND_TYPEWRITING);
  alarm = loadSound(ALARM_URGENCE);

  //Preloading video
}

//Setting the program
function setup() {
  //Setting Canvas
  createCanvas(windowWidth, windowHeight);
  video = createVideo(`assets/videos/Explosion.mp4`);
  //Adding video size and hiding it
  video.size(600, 400);
  video.hide();

  //Setting saved JSON data
  data = JSON.parse(localStorage.getItem(KEY_PROFILE_DATA));

  //Asking name and password
  spyProfile.name = prompt(`What's your name?`);

  if (data !== null) {
    password = prompt(`What is your password?`);

    //setting what happens with data
    //Setting spy data if name and password are right
    if (spyProfile.name === data.name && password === data.password) {
      state = `file`;
      currentLine = 0;
      setSpyData(spyProfile, data);
    }

    //Setting disappointment state if name or password is wrong
    else {
      state = `disappointment`;

      //Adding typewriter effect in text display
      typewriter = new Typewriter();
      currentLine = 0;
    }
  }

  //Generate a spy profile of there's no data
  else {
    generateSpyProfile();
    state = "file";
    currentLine = 0;
  }
}

//Sets the data according to the required information in spy profile
function setSpyData(spyProfile, data) {
  spyProfile.name = data.name;
  spyProfile.alias = data.alias;
  spyProfile.characteristic = data.characteristic;
  spyProfile.power = data.power;
  spyProfile.secretWeapon = data.secretWeapon;
  spyProfile.password = data.password;
}

//Creating a spy profile through random JSONs informations
function generateSpyProfile() {
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  let spell = random(spellData.spells);
  spyProfile.power = spell.effect;
  spyProfile.characteristic = random(descriptionData.descriptions);
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
  }

  //Calls disappointment if state = disappointment
  else if (state === "disappointment") {
    disappointment();

    //Adding video in disappointment state
    translate(width / 4, height / 5);
    image(video, 0, 0, 600, 400);
  }
}

//Creating file display
function file() {
  //Display spy profile
  let profile = `**CONFIDENTIAL SPY PROFILE**;
  Name:${spyProfile.name}
  Alias:${spyProfile.alias}
  Characteristic:${spyProfile.characteristic}
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
  dialog = disappointed[currentLine];
  typewriter.display();
}

//Setting mousePressed function
function mousePressed() {
  //Change the line in the dialog
  currentLine = currentLine + 1;

  //Adding typewriter effect
  typewriter.typewrite(dialog, 0, height / 4);
  if (currentLine === dialog.length && state === "disappointment") {
    currentLine = dialog.length - 1;
  }

  //Adding typewriting sound effect
  if (!sound.isPlaying()) {
    sound.play();
  }

  //Adding alarm sound effect
  if (currentLine === 27 && !alarm.isPlaying()) {
    alarm.play();
  }

  //Typewriting sound stops when video starts
  if (currentLine === 41 && sound.isPlaying()) {
    sound.stop();
  }
  //Video starts at the end of the dialog
  if (currentLine === 41) {
    push();
    video.show();
    video.play();
    pop();
  }
}
