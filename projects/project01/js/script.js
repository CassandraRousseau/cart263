/**************************************************
Project 01:A Night at the Movies
Cassandra Rousseau
The 3D simulation will be about the Disney animated movie 'SOUL'. The reproduced scene
is the moment mentors help the souls to find their spark. At the title screen, the user
will see the landscape the Great Before(aka the You Seminar). At the start of the game,
the user will be introduced to the universe and his mission through a cutscene of the movie.
The goal of the user will be to explore the universe of the Great Before and to find the
spark of the soul!
**************************************************/
"use strict";

//Creating font variable
let font;

//Creating state variable
let currentState;

//Creating title state variable
let title;

//Creating grass textures variables
let grassPurple;
let grassPink;
let grassBlue;

//Creating intro video variable
let video;

//Creating annyang! variables for location and career
let chosenLocation = "";
let chosenCareer = "";

//Creating annyang! variable for user's answer
let currentAnswer = "";

//Creating floor texture variable
let floor;

//Creating doughnut obj files variables for bakery and Hall of You
let doughnut;
let doughnut2;
let doughnut3;
let doughnut4;
let doughnut5;
let doughnut6;
let doughnut7;
let doughnut8;

//Creating doughnut textures variables
let doughnutTexture;

//Creating painting textures variables for art ArtStudio
let blueAbstractArt;
let pinkAbstractArt;
let whiteAbstractArt;

//Creating shelves obj files for photo studio and library
let bookcase;
let shelf;

//Creating floor texture for art studio
let tissue;

//Creating apple strudel obj file variable
let appleStrudel;

//Creating apple strudel texture variable
let crustStrudel;

//Creating books textures for Library
let leather;
let booksTexture;

//Creating canvas obj file for art studio
let canvas;

//Creating numbers of seats for arrays in auditorium
let numSeatsLeftFirstRow = 1;
let numSeatsRightFirstRow = 1;
let numSeatsLeftSecondRow = 1;
let numSeatsRightSecondRow = 1;
let numSeatsLeftThirdRow = 1;
let numSeatsRightThirdRow = 1;

//Creating numbers of curtains for arrays in auditorium
let numCurtainLeft = 1;
let numCurtainRight = 1;

//Creating pizza obj file variable in bakery
let pizza;

//Creating pizza texture variable in bakery
let pepperoni;

//Creating bun texture variable for Bakery
let cinnamonBun;

//Creating books obj files variables for Library
let bookRow;
let books;

//Creating cake texture variable for bakery
let frosting;

//Creating cake obj file variable for bakery
let chocolateCake;

//Creating wood texture for furnitures in office and Library
let wood;

//Creating pie texture for bakery
let crust;

//Creating pie obj file variable for Bakery
let pie;

//Creating house obj file variable for Hall
let house;

//Creating texture for house in Hall
let houseTexture;

//Creating hot air balloon obj file variable for hall
let hotAirBalloon;

//Creating hot air balloon texture variable
let balloonTexture;

//Creating camera texture for photo studio
let cameraTexture;

//Creating white wood texture for shelves in photo studio
let whiteWood;

//Creating windows texture for buildings in hall and bakery
let windows;

//Creating desk obj file variable for office
let desk;

//Creating paper punch variable for office
let paperPunch;

//Creating notebook variable for office
let notebook;

//Creating title background
let soulBackground;

//Creating camera obj file variable for photo studio
let cam;

//Creating legal pad obj file for office
let legalPad;

//Creating art studio background variable
let studioWall;

//Creating ml5.js handpose variables
let cursor;
let modelName = `Handpose`;
let handpose;
let predictions = [];
let hand;

//Creating finger parts variables
let index;
let indexX;
let indexY;

//Creating bakery background
let bakeryShop;

//Creating curtains texture for auditorium
let curtains;

//Creating pen obj file variable for office
let pen;

//Creating pencil holder obj file for office
let pencilHolder;

//Creating office background
let ovalOffice;

//Creating library background variable
let libraryBackground;

//Creating basketball texture
let basketball;

let bun;
let metal;
let career;
let careers;
let room;

let angle = 45;

let spotlights = [];
let numCounters = 1;
let numSpotlights = 20;

let numBuildings = 1;

let brushes;

//Setting preloaded elements
function preload() {
  //Preloading JSON files
  careers = loadJSON(`assets/data/occupations.json`);
  room = loadJSON(`assets/data/rooms.json`);

  //Preloading font
  font = loadFont(`assets/fonts/Sriracha/Sriracha-Regular.ttf`);

  //Preloading images
  bakeryShop = loadImage(`assets/images/BakeryShop.jpg`);
  windows = loadImage(`assets/images/windows.jpg`);
  grassPurple = loadImage(`assets/images/grassPurple.png`);
  grassPink = loadImage(`assets/images/grassPink.png`);
  grassBlue = loadImage(`assets/images/grassBlue.png`);
  crust = loadImage(`assets/images/pie_texture.jpg`);
  frosting = loadImage(`assets/images/frosting.jpg`);
  floor = loadImage(`assets/images/floor.jpg`);
  curtains = loadImage(`assets/images/curtains.jpg`);
  cinnamonBun = loadImage(`assets/images/cinnamon_bun_texture.jpg`);
  blueAbstractArt = loadImage("assets/images/blue_abstract_art.jpg");
  pinkAbstractArt = loadImage("assets/images/pink_abstract_art.jpg");
  whiteAbstractArt = loadImage("assets/images/white_abstract_art.jpg");
  tissue = loadImage("assets/images/action_painting.jpg");
  pepperoni = loadImage("assets/images/pepperoni_pizza.jpg");
  doughnutTexture = loadImage("assets/images/doughnut_texture.jpg");
  metal = loadImage("assets/images/metal.jpg");
  wood = loadImage("assets/images/wood.jpg");
  cameraTexture = loadImage("assets/images/camera_texture.jpg");
  booksTexture = loadImage("assets/images/books_texture.jpg");
  whiteWood = loadImage("assets/images/whiteWood.jpg");
  balloonTexture = loadImage("assets/images/hot_air_balloon_tissue.jpg");
  houseTexture = loadImage("assets/images/house_texture.jpg");
  soulBackground = loadImage("assets/images/soulBackground.png");
  studioWall = loadImage("assets/images/studioWall.jpg");
  ovalOffice = loadImage("assets/images/ovalOffice.jpg");
  libraryBackground = loadImage("assets/images/libraryBackground.jpg");
  basketball = loadImage("assets/images/basketball.jpg");

  //Preloading obj models
  desk = loadModel(`assets/obj/desk.obj`);
  appleStrudel = loadModel(`assets/obj/AppleStrudel.obj`);
  crustStrudel = loadImage(`assets/images/strudel_crust.jpg`);
  pizza = loadModel(`assets/obj/PIZZA.obj`);
  chocolateCake = loadModel(`assets/obj/Chocolate Cake.obj`);
  pie = loadModel(`assets/obj/PieLowPoly.obj`);
  bun = loadModel(`assets/obj/sweet_bun.obj`);
  legalPad = loadModel(`assets/obj/LegalPad.obj`);
  doughnut = loadModel(`assets/obj/Donut1.obj`);
  doughnut2 = loadModel(`assets/obj/Donut2.obj`);
  doughnut3 = loadModel(`assets/obj/Donut3.obj`);
  doughnut4 = loadModel(`assets/obj/Donut4.obj`);
  doughnut5 = loadModel(`assets/obj/Donut5.obj`);
  doughnut6 = loadModel(`assets/obj/Doughnut_1.obj`);
  doughnut7 = loadModel(`assets/obj/Doughnut_2.obj`);
  doughnut8 = loadModel(`assets/obj/Doughnut_3.obj`);
  paperPunch = loadModel(`assets/obj/PaperPunch.obj`);
  pen = loadModel(`assets/obj/as_creative_kit.obj`);
  notebook = loadModel(`assets/obj/notebook.obj`);
  shelf = loadModel("assets/obj/SHELF OBJ.obj");
  pencilHolder = loadModel("assets/obj/wacom.obj");
  bookcase = loadModel("assets/obj/Bibliotheque.obj");
  books = loadModel("assets/obj/BOOKS OBJ.obj");
  leather = loadImage("assets/images/leather_books.jpg");
  bookRow = loadModel("assets/obj/1book.obj");
  cam = loadModel("assets/obj/cam.obj");
  house = loadModel("assets/obj/Farm_house.obj");
  hotAirBalloon = loadModel("assets/obj/hot_air_baloon_4.obj");
  canvas = loadModel("assets/obj/canvas.obj");
  brushes = loadModel("assets/obj/jar_with_brushes.obj");
}

//Setting parameters in simulation
function setup() {
  //Creating WEBGL canvas
  createCanvas(1000, 1000, WEBGL);
  camera(0, 0, 20, 0, 0, 0, 0, 1, 0);

  cursor = createCapture(VIDEO);
  cursor.hide();
  handpose = ml5.handpose(cursor, { flipHorizontal: true }, function () {});
  handpose.on(`predict`, function (results) {
    // console.log(results);
    predictions = results;
  });

  //Creaing video paramaeters
  //Uploading video
  video = createVideo(`assets/videos/Intro.mp4`);

  //Setting video size
  video.size(700, 400);
  video.hide();

  // //Creating annyang! parameters
  if (annyang) {
    //Creating commands
    let commands = {
      //Setting location command
      "Go to *room": places,
      //Setting career choice command
      "I want to be *career": dream,
    };

    annyang.addCommands(commands);
    annyang.start();
  }
  textStyle(BOLD);
  title = new Title(grassBlue, grassPurple, grassPink, soulBackground);

  currentState = title;
  console.log(currentState);
}

// for (let i = 0; i < numSpotlights; i++) {
//   let light = spotLight(
//     255,
//     255,
//     255,
//     random(0, width),
//     random(0, height),
//     random(),
//     70,
//     70,
//     70,
//     35,
//     100
//   );
//   spotlights.push(light);
// }

//Setting title state

//Setting draw
function draw() {
  currentState.draw();

  //Creating camera
  cameraCursor();
  // chosenLocation();
  // chosenCareer();
}
//Setting all mouse inputs for each states
function mousePressed() {
  currentState.mousePressed();
}

function cameraCursor() {
  if (predictions.length > 0) {
    // Get the hand predicted

    hand = predictions[0];

    index = hand.annotations.indexFinger[3];
    indexX = index[0];
    indexY = index[1];
    // indexX = map(mouseX, 0, 1000, -50, 50);
    // indexY = map(mouseY, 0, 1000, -50, 50);
    // Highlight it on the canvas
    camera(0, 0, 800, indexX, indexY, 0, 0, 10, 0);
  }
}
function places(room) {
  //edit the art movements' names in lower cases
  currentAnswer = room.toLowerCase();
  console.log(currentAnswer);

  //   //if the answer is wrong
  //   // } else if (currentAnswer !== currentMovement) {
  //   //   //Added the artist response to the wrong answer
  //   //   chosenReaction = random(reactions);
  //   //   responsiveVoice.speak(chosenReaction, "UK English Female", {
  //   //     pitch: 5,
  //   //   });
  //   //   state = "wrong";

  if (currentAnswer === "library") {
    currentState = new Library(
      floor,
      wood,
      shelf,
      bookcase,
      books,
      leather,
      bookRow,
      booksTexture,
      libraryBackground
    );

    //if the answer is wrong
  } else if (currentAnswer === "basketball court") {
    currentState = new BasketballCourt(floor, basketball);

    //if the answer is wrong
  } else if (currentAnswer === "art studio") {
    currentState = new ArtStudio(
      tissue,
      canvas,
      blueAbstractArt,
      pinkAbstractArt,
      whiteAbstractArt,
      brushes,
      studioWall
    );

    //if the answer is wrong
  } else if (currentAnswer === "photo studio") {
    currentState = new PhotoStudio(shelf, floor, whiteWood, cam, cameraTexture);

    //if the answer is wrong
  } else if (currentAnswer === "office") {
    currentState = new Office(
      desk,
      floor,
      wood,
      legalPad,
      paperPunch,
      metal,
      notebook,
      pen,
      pencilHolder,
      ovalOffice
    );

    //if the answer is wrong
  } else if (currentAnswer === "hall") {
    currentState = new Hall(
      floor,
      windows,
      house,
      houseTexture,
      hotAirBalloon,
      balloonTexture
    );
  } else if (currentAnswer === "hall of everything") {
    currentState = new HallOfEverything(grassBlue, soulBackground);
  } else if (currentAnswer === "bakery") {
    currentState = new Bakery(
      chocolateCake,
      pie,
      crust,
      frosting,
      appleStrudel,
      crustStrudel,
      bun,
      cinnamonBun,
      pizza,
      pepperoni,
      doughnut,
      doughnutTexture,
      bakeryShop,
      wood
    );
  }
}
function dream(career) {
  currentAnswer = career.toLowerCase();
  if (currentAnswer === chosenCareer) {
    currentState = new Ending();
  }
}

// if the answer is wrong
// } else if (currentAnswer !== chosenCareer) {
//   responsiveVoice.speak("I can't hear you...", "UK English Female", {
//     pitch: 3,
//   });
// }
