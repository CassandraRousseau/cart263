/**************************************************
Activity 02:Slamina
Cassandra Rousseau
The program will speak the name of a common animal backwards and the user will
have to say (with their voice) what they think it is in the form “I think it is
 x.” If they get it right, their guess will be displayed in green, if they get
 it wrong, their guess will be displayed in red.
**************************************************/
"use strict";
const LOAD_HAPPY_GIRL = `assets/images/happyGirl.jpg`;
const LOAD_ASKING_GIRL = `assets/images/askingGirl.jpg`;
const LOAD_SHOCKED_GIRL = `assets/images/shockedGirl.jpg`;
const artMovements = [
  "abstract expressionism",
  "academic",
  "action painting",
  "aestheticism",
  "art deco",
  "art nouveau",
  "avant-garde",
  "barbizon school",
  "baroque",
  "bauhaus",
  "biedermeier",
  "caravaggisti",
  "carolingian",
  "classicism",
  "cloisonnism",
  "cobra",
  "color field painting",
  "conceptual art",
  "cubism",
  "cubo-futurism",
  "dada",
  "dadaism",
  "de stijl",
  "deformalism",
  "der blaue reiter",
  "die brücke",
  "divisionism",
  "eclecticism",
  "ego-futurism",
  "existentialism",
  "expressionism",
  "fauvism",
  "fluxus",
  "formalism",
  "futurism",
  "geometric abstraction",
  "gothic art",
  "gründerzeit",
  "hard-edge painting",
  "historicism",
  "hudson river school",
  "humanism",
  "hyperrealism",
  "idealism",
  "illusionism",
  "immagine&poesia",
  "impressionism",
  "incoherents",
  "installation art",
  "international gothic",
  "intervention art",
  "jugendstil",
  "kinetic art",
  "land art",
  "les nabis",
  "lettrism",
  "lowbrow",
  "luminism",
  "lyrical abstraction",
  "mail art",
  "manierism",
  "mannerism",
  "maximalism",
  "merovingian",
  "metaphysical art ",
  "minimalism",
  "modern art",
  "modernism",
  "monumentalism",
  "multiculturalism",
  "naturalism",
  "neo-classicism",
  "neo-dada",
  "neo-expressionism",
  "neo-fauvism",
  "neo-geo",
  "neo-impressionism",
  "neo-minimalism",
  "neoclassicism",
  "neoism",
  "neue slowenische kunst",
  "new media art",
  "new objectivity",
  "nonconformism",
  "nouveau realisme",
  "op art",
  "orphism",
  "ottonian",
  "outsider art",
  "performance art",
  "perspectivism",
  "photorealism",
  "pointilism",
  "pop art",
  "post-conceptualism",
  "post-impressionism",
  "post-minimalism",
  "post-painterly abstraction",
  "post-structuralism",
  "postminimalism",
  "postmodern art",
  "postmodernism",
  "pre-raphaelites",
  "precisionism",
  "primitivism",
  "purism",
  "rayonism",
  "realism",
  "relational art",
  "remodernism",
  "renaissance",
  "rococo",
  "romanesque",
  "romanticism",
  "russian futurism",
  "russian symbolism",
  "scuola romana",
  "secularism",
  "situationist international",
  "social realism",
  "socialist realism",
  "sound art",
  "street art",
  "structuralism",
  "stuckism international",
  "stuckism",
  "superflat",
  "superstroke",
  "suprematism",
  "surrealism",
  "symbolism",
  "synchromism",
  "synthetism",
  "systems art",
  "tachism",
  "tachisme",
  "tonalism",
  "video art",
  "video game art",
  "vorticism",
  "young british artists",
];

let synth;
let currentMovement = "";
let currentAnswer = "";
let happyGirl;
let askingGirl;
let shockedGirl;
function preload() {
  happyGirl = loadImage(LOAD_HAPPY_GIRL);
  askingGirl = loadImage(LOAD_ASKING_GIRL);
  shockedGirl = loadImage(LOAD_SHOCKED_GIRL);
}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
  synth = new p5.PolySynth();
  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    let commands = {
      "I think it is *artMovement": guessedArt,
    };

    // Add our commands to annyang
    annyang.addCommands(commands);
    annyang.start();

    textSize(50);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  displayAnswer();
}
function mousePressed() {
  nextQuestion();
}

function guessedArt(artMovement) {
  currentAnswer = artMovement.toLowerCase();
}
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split("");
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join("");
  // Return the result
  return result;
}
function displayAnswer() {
  if (currentAnswer === currentMovement) {
    fill(0, 255, 0);
    //synth.noteAttack(`A4`, 1, 0.7);
  } else {
    fill(255, 0, 0);
    //synth.noteAttack(`C4`, 1, 0.7);
  }
  text(currentAnswer, width / 2, height / 2);
}
function nextQuestion() {
  let currentMovement = random(artMovements);
  let reverseArt = reverseString(currentMovement);
  fill(255);
  text(reverseArt, width / 2, height / 2);
  responsiveVoice.speak(reverseArt, "UK English Female", { pitch: 5 });
}
