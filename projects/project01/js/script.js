/**************************************************
Project 01:A Night at the Movies
Cassandra Rousseau
The 3D simulation will be about the Disney animated movie 'SOUL'. The reproduced scene
is the moment mentors help the souls to find their spark. At the title screen, the user
will see the landscape of the Great Before(aka the U Seminar). At the start of the game,
the user will be introduced to the universe and his mission through a cutscene of the movie.
The goal of the user will be to explore the universe of the Great Before and to find their own
spark!
**************************************************/
"use strict";

//Creating game instructions
let instructions = `Hello Soul J-3779, my name is Jerry and I will be your host today!\nLet's find your spark! Explore the Hall of Everything and discover your true nature!\nSay 'Go to...' and select the area you want to explore!\n Once you found your passion, say 'I want to be...' and the career according to your spark!\n If you don't remember something, refers to the manual by saying 'See manual'. Enjoy!`;

//Creating ending text
let farewell = `I'm really happy that you found your spark! I hope you the best in your new life! Enjoy your human life!`;
//Creating ending text
let comment = `Yeah... I really liked donuts in my past life...(*And I still like them*)`;
let listCareers = `artist\nbaker\nbasketball player\nlibrarian\nphotographer\npresident`;
let listPlaces = `Art studio\nAuditorium\nBakery\nBasketball court\nHall\nHall of everything\nHall of you\nLibrary\nOffice\nPhoto studio`;
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

//Creating JSON variable for row of books in library
let booksData;

//Creating JSON variable for stacks of books in library
let booksStacksData;

//Creating JSON variable for buildings in hall
let buildingData;

//Creating JSON variable for counters in bakery
let countersData;

//Creating JSON variable for curtains in auditorium
let curtainsData;

//Creating JSON variable for wings of hall of everything in hall of everything
let wingsData;

//Creating JSON variable for seats in auditorium
let seatsData;

//Creating JSON variable for shelves in library
let shelvesData;

//Creating JSON variable for bookcases in library
let bookcasesData;

//Creating JSON variable for white shelves in photo studio
let whiteShelvesData;

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
let doughnutTexture2;
let doughnutTexture4;
let doughnutTexture6;
let doughnutTexture7;

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

//Creating hall background variable
let gradient;

//Creating basketball texture
let basketball;

//Creating carpet texture variable for library
let carpet;

//Creating bun obj file variable for bakery
let bun;

//Creating metal texture variable for office
let metal;

//Creating room variable for rooms JSON file
let room;

//Creating variable fpr the number of counters in Bakery
let numCounters = 1;

//Creating variable for Jerry image(character in Soul movie)
let jerry;

//Creating variable for ceiling image in Library
let ceilingLibrary;

//Creating variable for ceiling image in bakery
let ceilingBakery;

//Creating annyang! variable for careers
let career;

//Creating variable for ceiling image in hall of everything
let purpleGradient;

//Creating variable for ceiling image in studio art
let ceilingArt;

//Creating variable for ceiling image in office
let ceilingOffice;

//Creating variable for carpet in office
let blueCarpet;

//Creating variable for fence in basketball court
let fence;

//Creating variable for sky in basketball court
let sky;

//Creating variable for background in photo studio
let photoBackground;

//Creating variable for carpet in photo studio
let blackCarpet;
// let angle = 45;

let brushes;

//Creating variable for manual
let manual;

let music;
//Setting preloaded elements
function preload() {
  //Preloading JSON files
  career = loadJSON(`assets/data/careers.json`);
  room = loadJSON(`assets/data/rooms.json`);
  booksData = loadJSON(`assets/data/books.json`);
  buildingData = loadJSON(`assets/data/buildings.json`);
  booksStacksData = loadJSON(`assets/data/bookStacks.json`);
  countersData = loadJSON(`assets/data/counters.json`);
  curtainsData = loadJSON(`assets/data/curtains.json`);
  wingsData = loadJSON(`assets/data/wingsBuilding.json`);
  seatsData = loadJSON(`assets/data/seatsAuditorium.json`);
  shelvesData = loadJSON(`assets/data/shelvesLibrary.json`);
  bookcasesData = loadJSON(`assets/data/bookcases.json`);
  whiteShelvesData = loadJSON(`assets/data/shelvesPhotoStudio.json`);

  //Preloading font
  font = loadFont(`assets/fonts/Sriracha/Sriracha-Regular.ttf`);

  music = loadSound(`assets/sounds/hall-of-everything.mp3`);
  //Preloading images
  bakeryShop = loadImage(`assets/images/BakeryShop.jpg`);
  windows = loadImage(`assets/images/windows.png`);
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
  doughnutTexture2 = loadImage("assets/images/boston_donut.png");
  doughnutTexture4 = loadImage("assets/images/chocolate_doughnut.jpg");
  doughnutTexture6 = loadImage("assets/images/plain_donut.jpg");
  doughnutTexture7 = loadImage("assets/images/sprinkle_donut.jpg");
  metal = loadImage("assets/images/metal.jpg");
  wood = loadImage("assets/images/wood.jpg");
  cameraTexture = loadImage("assets/images/camera_texture.jpg");
  booksTexture = loadImage("assets/images/books_texture.jpg");
  whiteWood = loadImage("assets/images/whiteWood.jpg");
  balloonTexture = loadImage("assets/images/hot_air_balloon_tissue.jpg");
  houseTexture = loadImage("assets/images/house_texture.jpg");
  soulBackground = loadImage("assets/images/soulBackground.png");
  studioWall = loadImage("assets/images/studioWall.png");
  ovalOffice = loadImage("assets/images/ovalOffice.jpg");
  libraryBackground = loadImage("assets/images/libraryBackground.jpg");
  basketball = loadImage("assets/images/basketball.jpg");
  carpet = loadImage("assets/images/carpet.jpg");
  jerry = loadImage("assets/images/Jerry.png");
  crustStrudel = loadImage(`assets/images/strudel_crust.jpg`);
  leather = loadImage("assets/images/leather_books.jpg");
  ceilingLibrary = loadImage("assets/images/ceiling_library.jpg");
  ceilingBakery = loadImage("assets/images/ceiling_bakery.jpg");
  gradient = loadImage("assets/images/gradient.jpg");
  purpleGradient = loadImage("assets/images/purpleGradient.png");
  ceilingArt = loadImage("assets/images/ceiling_art.jpg");
  blueCarpet = loadImage("assets/images/blue_carpet.jpg");
  ceilingOffice = loadImage("assets/images/ceiling_office.jpg");
  fence = loadImage("assets/images/fence.png");
  sky = loadImage("assets/images/sky.jpg");
  photoBackground = loadImage("assets/images/photoBackground.jpg");
  blackCarpet = loadImage("assets/images/blackCarpet.jpg");

  //Preloading obj models
  desk = loadModel(`assets/obj/desk.obj`);
  appleStrudel = loadModel(`assets/obj/AppleStrudel.obj`);
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

      //Setting manual command
      "See manual": function (manual) {
        manual = new Manual(listPlaces, listCareers);
        console.log(manual);
      },
      "exit manual": function (manual) {
        manual.active = false;
      },
    };
    annyang.addCommands(commands);
    annyang.start();
  }

  //Setting title state
  textStyle(BOLD);
  title = new HallOfYou(
    doughnut,
    doughnut2,
    doughnut3,
    doughnut4,
    doughnut5,
    doughnut6,
    doughnut7,
    doughnut8,
    doughnutTexture,
    doughnutTexture2,
    doughnutTexture4,
    doughnutTexture6,
    doughnutTexture7,
    comment
  );
  // new Title(grassBlue, grassPurple, grassPink, soulBackground);

  currentState = title;
  console.log(currentState);
}

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
    indexX = map(indexX, 0, cursor.elt.videoWidth, -500, 500);
    indexY = map(indexY, 0, cursor.elt.videoHeight, -500, 500);
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
  //Setting library state
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
      libraryBackground,
      carpet,
      booksData,
      booksStacksData,
      shelvesData,
      bookcasesData,
      ceilingLibrary
    );
    if (!music.isPlaying()) {
      music.play();
    }
    //Setting basketball court state
  } else if (currentAnswer === "basketball court") {
    currentState = new BasketballCourt(floor, basketball, fence, sky);
    if (!music.isPlaying()) {
      music.play();
    }
    //Setting art studio state
  } else if (currentAnswer === "art studio") {
    currentState = new ArtStudio(
      tissue,
      canvas,
      blueAbstractArt,
      pinkAbstractArt,
      whiteAbstractArt,
      brushes,
      studioWall,
      ceilingArt
    );
    if (!music.isPlaying()) {
      music.play();
    }
    //Setting photo studio state
  } else if (currentAnswer === "photo studio") {
    currentState = new new PhotoStudio(
      shelf,
      floor,
      whiteWood,
      cam,
      cameraTexture,
      photoBackground,
      whiteShelvesData,
      blackCarpet
    )();
    if (!music.isPlaying()) {
      music.play();
    }
    //Setting office state
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
      ovalOffice,
      blueCarpet,
      ceilingOffice
    );
    if (!music.isPlaying()) {
      music.play();
    }
    //Setting hall state
  } else if (currentAnswer === "hall") {
    currentState = new Hall(
      floor,
      windows,
      house,
      houseTexture,
      hotAirBalloon,
      balloonTexture,
      buildingData,
      gradient
    );
    if (!music.isPlaying()) {
      music.play();
    }
  }
  //Setting hall of everything state
  else if (currentAnswer === "hall of everything") {
    currentState = new HallOfEverything(
      grassBlue,
      soulBackground,
      instructions,
      jerry,
      wingsData,
      purpleGradient
    );
    if (!music.isPlaying()) {
      music.play();
    }
  }
  //Setting bakery state
  else if (currentAnswer === "bakery") {
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
      wood,
      countersData,
      ceilingBakery
    );
    if (!music.isPlaying()) {
      music.play();
    }
  }
  //Setting hall of you state
  else if (currentAnswer === "hall of you") {
    currentState = new HallOfYou(
      doughnut,
      doughnut2,
      doughnut3,
      doughnut4,
      doughnut5,
      doughnut6,
      doughnut7,
      doughnut8,
      doughnutTexture,
      doughnutTexture2,
      doughnutTexture4,
      doughnutTexture6,
      doughnutTexture7,
      comment
    );
    if (!music.isPlaying()) {
      music.play();
    }
  }
}
//Setting ending state through calling careers
function dream(career) {
  currentAnswer = career.toLowerCase();
  console.log(currentAnswer);
  console.log(career);
  if (checkCareer) {
    currentState = new Ending(
      soulBackground,
      purpleGradient,
      jerry,
      grassBlue,
      farewell
    );
    if (!music.isPlaying()) {
      music.play();
    }
  }
}

//Checking if the named career is correctly pronounced
function checkCareer(career) {
  if (currentAnswer === chosenCareer) {
    return true;
  } else {
    return false;
  }
}
// if the answer is wrong
// } else if (currentAnswer !== chosenCareer) {
//   responsiveVoice.speak("I can't hear you...", "UK English Female", {
//     pitch: 3,
//   });
// }
