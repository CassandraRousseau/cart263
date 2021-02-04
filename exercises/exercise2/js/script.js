/**************************************************
Exercise 02:Do you know Art?
Cassandra Rousseau

At the beginning of the game, an artist will challenge the user by testing his art
knowledge. The artist will speak the name of an art movement backwards and the user will
have to say (with their voice) what they think it is in the form “I think it is
 x.” If they get it right, their guess will be displayed in green, if they get
 it wrong, their guess will be displayed in red.The artist will either encourage
 the user or be disappointed depending on the user's answers.
**************************************************/
"use strict";

//Images constants
const LOAD_HAPPY_ARTIST = `assets/images/happyArtist.png`;
const LOAD_ASKING_ARTIST = `assets/images/askingArtist.png`;
const LOAD_SHOCKED_ARTIST = `assets/images/shockedArtist.png`;

//art movements array
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

//encouragements strings array for right answers
let encouragements = [
  `Good Job!`,
  `You're doing great!`,
  `You have a pretty good art knowledge!`,
  `What an amazing artist you are!`,
  `Great!`,
  `Awesome!`,
  `Good!`,
  `Very good!`,
  `Are you sure you're not an encyclopedia? Because you really do know everything!`,
  `I wish I could be as great as you!`,
];

//reactions strings array for wrong answers
let reactions = [
  `Hum...`,
  `Okay...`,
  `Are you an artist?`,
  `Do you really like art? Because I have doubts about it.`,
  `I think you need to learn a bit more about the art movements.`,
  `You should revise art history next time.`,
  `I strongly recommand you to stop playing and take a few minutes to revise your art stuff.`,
  `Wrong!`,
  `Nope.`,
  `OH GAWD NO!`,
];

//texts
let state = "title";
let instruction =
  "Let's test you art knowledge! I want to know if you know really well the art movements!\nPress your mouse to hear the specific art mouvement and say 'I think it is (the guessed art movement)' to give your answer!\nPay attention! Because I will mention the art movements in reverse!\nGood Luck and Enjoy!(Press your mouse to start)";

//emptay strings for arrays
let saying = ``;
let currentMovement = "";
let currentAnswer = "";

//declared random reactions and encouragaments
let chosenReaction;
let chosenEncouragement;
let artMovement;
//declared images
let happyArtist;
let askingArtist;
let shockedArtist;

//preloaded images
function preload() {
  happyArtist = loadImage(LOAD_HAPPY_ARTIST);
  askingArtist = loadImage(LOAD_ASKING_ARTIST);
  shockedArtist = loadImage(LOAD_SHOCKED_ARTIST);
}

//Setting the game
function setup() {
  createCanvas(windowWidth, windowHeight);

  //adding annyang! library
  if (annyang) {
    let commands = {
      "I think it is *artMovement": guessedArt,
    };

    // Adding commands to annyang
    annyang.addCommands(commands);
    annyang.start();

    //adding text style
    textStyle(BOLD);
  }
}

//Creating the game states
function draw() {
  background(100, 150, 200);

  if (state === "title") {
    title();
  } else if (state === "instructions") {
    instructions();
  } else if (state === "simulation") {
    simulation();
  }
}

//Setting the title screen
function title() {
  push();

  //Adding title string
  textSize(105);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Do You Know Art?", width / 2, height / 2);

  //adding how to change the state
  push();
  textSize(35);
  text("Press your mouse to start", width / 2, (2 * height) / 3);
  pop();
  pop();
}

//Setting instruction screen
function instructions() {
  push();

  //Added the artist image
  image(askingArtist, (2 * width) / 5, 10);

  //added the instructions text
  textSize(30);
  fill(255);
  textAlign(LEFT, TOP);
  text(instruction, 10, 0, width / 2, height);

  //added the responsiveVoice that is reading the the instructions

  pop();
}

//Setting simulation
function simulation() {}

//Setting mousePressed function
function mousePressed() {
  if (state === "title") {
    state = "instructions";

    responsiveVoice.speak(instruction, "UK English Female", {
      pitch: 2,
    });
  } else if (state === "instructions") {
    state = "simulation";
  } else if (state == "simulation") {
    nextQuestion();
    guessedArt(artMovement);

    displayAnswer();
  }
}

//Setting how to define if the guessed answer is right or wrong
function guessedArt(artMovement) {
  currentAnswer = artMovement.toLowerCase();

  //displayAnswer();
}

console.log(artMovement);

//Setting the reversed words
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
  //if the answer is right
  if (currentAnswer === currentMovement) {
    //Added the artist response to the right answer
    chosenEncouragement = random(encouragements);
    responsiveVoice.speak(chosenEncouragement, "UK English Female", {
      pitch: 5,
    });
    rightAnswer();
    //if the answer is wrong
  } else if (currentAnswer !== currentMovement) {
    //Added the artist response to the wrong answer
    chosenReaction = random(reactions);
    responsiveVoice.speak(chosenReaction, "UK English Female", {
      pitch: 5,
    });
    wrongAnswer();
  }
}

//Setting the right answer
function rightAnswer() {
  push();

  //Added artist image
  image(happyArtist, (2 * width) / 5, 10);

  //Added the current answer
  textSize(50);
  textAlign(CENTER, CENTER);
  fill(0, 255, 0);
  text(currentAnswer, width / 2, height / 2);
  console.log(currentAnswer);

  pop();
}

//Setting the wrong answer
function wrongAnswer() {
  push();

  //Added artist image
  image(shockedArtist, (2 * width) / 5, 10);

  //Added the current answer
  textSize(50);
  textAlign(CENTER, CENTER);
  fill(255, 0, 0);
  text(currentAnswer, width / 2, height / 2);

  pop();
}

//Setting the questions
function nextQuestion() {
  push();
  //Added artist image
  image(askingArtist, (2 * width) / 5, 10);
  //Added the asked movement
  let currentMovement = random(artMovements);
  let reverseArt = reverseString(currentMovement);
  textSize(50);
  textAlign(CENTER, CENTER);
  fill(255);
  text(reverseArt, width / 2, height / 2);
  //Added the resposiveVoice  asking the question
  responsiveVoice.resume(reverseArt, "UK English Female", { pitch: 5 });
  pop();
}
