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
let font;
let currentState;
let grassPurple;
let grassPink;
let grassBlue;
let windows;
let floor;
let cam;
let crust;
let title;
let video;
let desk;
let legalPad;
let chocolateCake;
let appleStrudel;
let crustStrudel;
let pizza;
let pen;
let pencilHolder;
let doughnut;
let doughnut2;
let doughnut3;
let doughnut4;
let doughnut5;
let doughnut6;
let doughnut7;
let doughnut8;
let doughnutTexture;
let frosting;
let pie;
let bun;
let wood;
let metal;
let notebook;
let paperPunch;
let pepperoni;
let cinnamonBun;
let careers;
let room;
let books;
let shelf;
let angle = 45;
let curtains;
let spotlights = [];
let numCounters = 1;
let numSpotlights = 20;
let numCurtainLeft = 1;
let numCurtainRight = 1;
let numSeatsLeftFirstRow = 1;
let numSeatsRightFirstRow = 1;
let numSeatsLeftSecondRow = 1;
let numSeatsRightSecondRow = 1;
let numSeatsLeftThirdRow = 1;
let numSeatsRightThirdRow = 1;
let numBuildings = 1;
let basketballRim;
let bookcase;
let leather;
let bookRow;
let booksTexture;
let whiteWood;
let camera;
let cameraTexture;
let house;
let houseTexture;
let hotAirBalloon;
let balloonTexture;
let canvas;
let blueAbstractArt;
let pinkAbstractArt;
let whiteAbstractArt;
let tissue;
let brushes;
let room;
let career;
let currentAnswer = "";
let chosenLocation = "";
let chosenCareer = "";
let cursor;
let state = `running`;
let modelName = `Handpose`;
let handpose;
let predictions = [];
function preload() {
  careers = loadJSON(`assets/data/occupations.json`);
  room = loadJSON(`assets/data/rooms.json`);
  font = loadFont(`assets/fonts/Sriracha/Sriracha-Regular.ttf`);
  windows = loadImage(`assets/images/windows.jpg`);
  grassPurple = loadImage(`assets/images/grassPurple.png`);
  grassPink = loadImage(`assets/images/grassPink.png`);
  grassBlue = loadImage(`assets/images/grassBlue.png`);
  crust = loadImage(`assets/images/pie_texture.jpg`);
  frosting = loadImage(`assets/images/frosting.jpg`);
  floor = loadImage(`assets/images/floor.jpg`);
  curtains = loadImage(`assets/images/curtains.jpg`);
  cinnamonBun = loadImage(`assets/images/cinnamon_bun_texture.jpg`);
  desk = loadModel(`assets/obj/desk.obj`);
  appleStrudel = loadModel(`assets/obj/AppleStrudel.obj`);
  crustStrudel = loadImage(`assets/images/strudel_crust.jpg`);
  pizza = loadModel(`assets/obj/PIZZA.obj`);
  chocolateCake = loadModel(`assets/obj/Chocolate Cake.obj`);
  pie = loadModel(`assets/obj/PieLowPoly.obj`);
  bun = loadModel(`assets/obj/sweet_bun.obj`);
  legalPad = loadModel(`assets/obj/LegalPad.obj`);
  pepperoni = loadImage("assets/images/pepperoni_pizza.jpg");
  doughnutTexture = loadImage("assets/images/doughnut_texture.jpg");
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
  metal = loadImage("assets/images/metal.jpg");
  wood = loadImage("assets/images/wood.jpg");
  shelf = loadModel("assets/obj/SHELF OBJ.obj");
  pencilHolder = loadModel("assets/obj/wacom.obj");
  basketballRim = loadModel("assets/obj/basketball1.obj");
  bookcase = loadModel("assets/obj/Bibliotheque.obj");
  books = loadModel("assets/obj/BOOKS OBJ.obj");
  leather = loadImage("assets/images/leather_books.jpg");
  bookRow = loadModel("assets/obj/1book.obj");
  camera = loadModel("assets/obj/camera.obj");
  cameraTexture = loadImage("assets/images/camera_texture.jpg");
  booksTexture = loadImage("assets/images/books_texture.jpg");
  whiteWood = loadImage("assets/images/whiteWood.jpg");
  house = loadModel("assets/obj/Farm_house.obj");
  houseTexture = loadImage("assets/images/house_texture.jpg");
  hotAirBalloon = loadModel("assets/obj/hot_air_baloon_4.obj");
  balloonTexture = loadImage("assets/images/hot_air_balloon_tissue.jpg");
  canvas = loadModel("assets/obj/canvas.obj");
  blueAbstractArt = loadImage("assets/images/blue_abstract_art.jpg");
  pinkAbstractArt = loadImage("assets/images/pink_abstract_art.jpg");
  whiteAbstractArt = loadImage("assets/images/white_abstract_art.jpg");
  tissue = loadImage("assets/images/action_painting.jpg");
  brushes = loadModel("assets/obj/jar_with_brushes.obj");
}
function setup() {
  // Using WEBGL in createCanvas to specify 3D graphics
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCamera();
  cursor = createCapture(VIDEO);
  cursor.hide();
  handpose = ml5.handpose(
    video,
    {
      flipHorizontal: true,
    },
    function () {
      state = `running`;
    }
  );

  handpose.on(`predict`, function (results) {
    predictions = results;
  });

  video = createVideo(`assets/videos/Intro.mp4`);
  video.size(600, 400);
  video.hide();
  if (annyang) {
    let destination = {
      "Go to *room": chosenDestination,
    };
    let choice = {
      "I want to be *career": chosenCareer,
    };

    annyang.addCommands(destination, choice);
    annyang.start();

    textStyle(BOLD);
  }

  for (let i = 0; i < numSpotlights; i++) {
    let light = spotLight(
      255,
      255,
      255,
      random(0, width),
      random(0, height),
      random(),
      70,
      70,
      70,
      35,
      100
    );
    spotlights.push(light);
  }
  title = new HallOfYou(
    doughnut,
    doughnut2,
    doughnut3,
    doughnut4,
    doughnut5,
    doughnut6,
    doughnut7,
    doughnut8,
    doughnutTexture
  );
  currentState = title;
}
function draw() {
  currentState.draw();
}
//Setting all mouse inputs for each states
function mousePressed() {
  currentState.mousePressed();
}
