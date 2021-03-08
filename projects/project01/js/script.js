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
//*Help from Pippin to convert variables in object classes into JSON files*

"use strict";

//Creating game instructions
let instructions = `Hello Soul J-3779, my name is Jerry and I will be your host today!\nLet's find your spark! Explore the Hall of Everything and discover your true nature!\nSay 'Go to...' and select the area you want to explore!\n Once you found your passion, say 'I want to be...' and the career according to your spark!\n If you don't remember something, refers to the manual by saying 'See manual'. Enjoy!`;

//Creating ending text
let farewell = `I'm really happy that you found your spark!\n I wish you the best during your human life!\n Enjoy!`;
//Creating ending text
let comment = `Yeah... I really liked donuts in my past life...(*And I still like them*)`;

//Creating list of careers for the manual
let listCareers = `List of careers:\nartist\nbaker\nbasketball player\nlibrarian\nphotographer\npresident`;

//Creating list of places for the manual
let listPlaces = `List of places:\nArt studio\nBakery\nBasketball court\nHall\nHall of you\nLibrary\nOffice\nPhoto studio`;

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

//Creating JSON variable for walls in bakery
let bakeryBackgroundData;

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

//Creating JSON variable for background in title screen
let titleBackgroundData;

//Creating JSON variable for background in library
let libraryBackgroundData;

//Creating JSON variable for background in hall
let hallBackgroundData;

//Creating JSON variable for background in photo studio
let photoStudioBackgroundData;

//Creating JSON variable for background in basketball court
let basketballCourtBackgroundData;

//Creating JSON variable for background in office
let officeBackgroundData;

//Creating JSON variable for seats in office
let officeSeatsData;

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
let doughnutTexture3;
let doughnutTexture4;
let doughnutTexture5;

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
let vanillaCake;

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

//Creating variable for seats texture in office
let cushion;

//Creating variable for manual
let manual;

//Creating music variable
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
  bakeryBackgroundData = loadJSON(`assets/data/backgroundBakeryWalls.json`);
  titleBackgroundData = loadJSON(`assets/data/backgroundTitle.json`);
  libraryBackgroundData = loadJSON(`assets/data/backgroundLibrary.json`);
  hallBackgroundData = loadJSON(`assets/data/backgroundHall.json`);
  photoStudioBackgroundData = loadJSON(
    `assets/data/backgroundPhotoStudio.json`
  );
  basketballCourtBackgroundData = loadJSON(
    `assets/data/backgroundBasketballCourt.json`
  );
  officeBackgroundData = loadJSON(`assets/data/backgroundOffice.json`);
  officeSeatsData = loadJSON(`assets/data/officeSeats.json`);

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
  doughnutTexture3 = loadImage("assets/images/chocolate_doughnut.jpg");
  doughnutTexture4 = loadImage("assets/images/plain_donut.jpg");
  doughnutTexture5 = loadImage("assets/images/sprinkle_donut.jpg");
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
  cushion = loadImage("assets/images/cushion.jpg");

  //Preloading obj models
  desk = loadModel(`assets/obj/desk.obj`);
  appleStrudel = loadModel(`assets/obj/AppleStrudel.obj`);
  pizza = loadModel(`assets/obj/PIZZA.obj`);
  vanillaCake = loadModel(`assets/obj/Cake.obj`);
  pie = loadModel(`assets/obj/Pie.obj`);
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
  pen = loadModel(`assets/obj/creative_kit.obj`);
  notebook = loadModel(`assets/obj/notebook.obj`);
  shelf = loadModel("assets/obj/shelf.obj");
  pencilHolder = loadModel("assets/obj/pencilHolder.obj");
  bookcase = loadModel("assets/obj/Bibliotheque.obj");
  books = loadModel("assets/obj/books.obj");
  bookRow = loadModel("assets/obj/book.obj");
  cam = loadModel("assets/obj/cam.obj");
  house = loadModel("assets/obj/house.obj");
  hotAirBalloon = loadModel("assets/obj/hot_air_balloon.obj");
  canvas = loadModel("assets/obj/canvas.obj");
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
    console.log(results);
    predictions = results;
  });

  //Creating video parameters
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
      "see manual": seeManual,
      "exit manual": exitManual,
    };
    annyang.addCommands(commands);
    annyang.start();
  }

  //Setting title state
  textStyle(BOLD);
  title = new Title({
    grassBlue: grassBlue,
    grassPurple: grassPurple,
    grassPink: grassPink,
    soulBackground: soulBackground,
    purpleGradient: purpleGradient,
    titleBackgroundData: titleBackgroundData,
  });

  currentState = title;
  console.log(currentState);

  //Setting the manual *Help from Pippin to display the manual*
  manual = new Manual(listPlaces, listCareers);
  manual.active = false;
  console.log(manual);
}

//Setting draw
function draw() {
  currentState.draw();

  //Creating camera
  cameraCursor();

  //Displaying manual if active
  if (manual.active) {
    manual.display();
  }
}

//Setting all mouse inputs for each states
function mousePressed() {
  currentState.mousePressed();
}

//Creating the camera cursor using index *Help from Sabine and Pippin to map the index with the camera*
function cameraCursor() {
  if (predictions.length > 0) {
    // Get the hand predicted
    hand = predictions[0];

    index = hand.annotations.indexFinger[3];
    indexX = index[0];
    indexY = index[1];
    indexX = map(indexX, 0, cursor.elt.videoWidth, -500, 500);
    indexY = map(indexY, 0, cursor.elt.videoHeight, -500, 500);

    // Setting the camera on the canvas
    camera(0, 0, 800, indexX, indexY, 0, 0, 10, 0);
  }
}

//Setting the environments when they are called
function places(room) {
  //edit the rooms' names in lower cases
  currentAnswer = room.toLowerCase();
  console.log(currentAnswer);

  //Setting library state
  if (currentAnswer === "library") {
    currentState = new Library({
      floor: floor,
      wood: wood,
      shelf: shelf,
      bookcase: bookcase,
      books: books,
      leather: leather,
      bookRow: bookRow,
      booksTexture: booksTexture,
      libraryBackground: libraryBackground,
      carpet: carpet,
      booksData: booksData,
      booksStacksData: booksStacksData,
      shelvesData: shelvesData,
      bookcasesData: bookcasesData,
      ceilingLibrary: ceilingLibrary,
      libraryBackgroundData: libraryBackgroundData,
    });

    //Setting music if not playing
    if (!music.isPlaying()) {
      music.play();
    }
    //Setting basketball court state
  } else if (currentAnswer === "basketball court") {
    currentState = new BasketballCourt({
      floor: floor,
      basketball: basketball,
      fence: fence,
      sky: sky,
      basketballCourtBackgroundData: basketballCourtBackgroundData,
    });

    //Setting music if not playing
    if (!music.isPlaying()) {
      music.play();
    }
    //Setting art studio state
  } else if (currentAnswer === "art studio") {
    currentState = new ArtStudio({
      tissue: tissue,
      canvas: canvas,
      blueAbstractArt: blueAbstractArt,
      pinkAbstractArt: pinkAbstractArt,
      whiteAbstractArt: whiteAbstractArt,
      studioWall: studioWall,
      ceilingArt: ceilingArt,
    });

    //Setting music if not playing
    if (!music.isPlaying()) {
      music.play();
    }
    //Setting photo studio state
  } else if (currentAnswer === "photo studio") {
    currentState = new PhotoStudio({
      shelf: shelf,
      floor: floor,
      whiteWood: whiteWood,
      cam: cam,
      cameraTexture: cameraTexture,
      photoBackground: photoBackground,
      whiteShelvesData: whiteShelvesData,
      blackCarpet: blackCarpet,
      photoStudioBackgroundData: photoStudioBackgroundData,
    });

    //Setting music if not playing
    if (!music.isPlaying()) {
      music.play();
    }
    //Setting office state
  } else if (currentAnswer === "office") {
    currentState = new Office({
      desk: desk,
      floor: floor,
      wood: wood,
      legalPad: legalPad,
      paperPunch: paperPunch,
      metal: metal,
      notebook: notebook,
      pen: pen,
      pencilHolder: pencilHolder,
      ovalOffice: ovalOffice,
      blueCarpet: blueCarpet,
      ceilingOffice: ceilingOffice,
      officeBackgroundData: officeBackgroundData,
      doughnut8: doughnut8,
      officeSeatsData: officeSeatsData,
      cushion: cushion,
    });

    //Setting music if not playing
    if (!music.isPlaying()) {
      music.play();
    }
    //Setting hall state
  } else if (currentAnswer === "hall") {
    currentState = new Hall({
      floor: floor,
      windows: windows,
      house: house,
      houseTexture: houseTexture,
      hotAirBalloon: hotAirBalloon,
      balloonTexture: balloonTexture,
      buildingData: buildingData,
      gradient: gradient,
      hallBackgroundData: hallBackgroundData,
    });

    //Setting music if not playing
    if (!music.isPlaying()) {
      music.play();
    }
  }
  //Setting hall of everything state
  else if (currentAnswer === "hall of everything") {
    currentState = new HallOfEverything({
      grassBlue: grassBlue,
      soulBackground: soulBackground,
      instructions: instructions,
      jerry: jerry,
      wingsData: wingsData,
      purpleGradient: purpleGradient,
      titleBackgroundData: titleBackgroundData,
    });

    //Setting music if not playing
    if (!music.isPlaying()) {
      music.play();
    }
  }
  //Setting bakery state
  else if (currentAnswer === "bakery") {
    currentState = new Bakery({
      vanillaCake: vanillaCake,
      pie: pie,
      crust: crust,
      frosting: frosting,
      appleStrudel: appleStrudel,
      crustStrudel: crustStrudel,
      bun: bun,
      cinnamonBun: cinnamonBun,
      pizza: pizza,
      pepperoni: pepperoni,
      doughnut: doughnut,
      doughnutTexture: doughnutTexture,
      bakeryShop: bakeryShop,
      wood: wood,
      countersData: countersData,
      bakeryBackgroundData: bakeryBackgroundData,
      ceilingBakery: ceilingBakery,
    });

    //Setting music if not playing
    if (!music.isPlaying()) {
      music.play();
    }
  }
  //Setting hall of you state
  else if (currentAnswer === "hall of you") {
    currentState = new HallOfYou({
      doughnut: doughnut,
      doughnut2: doughnut2,
      doughnut3: doughnut3,
      doughnut4: doughnut4,
      doughnut5: doughnut5,
      doughnut6: doughnut6,
      doughnut7: doughnut7,
      doughnut8: doughnut8,
      doughnutTexture: doughnutTexture,
      doughnutTexture2: doughnutTexture2,
      doughnutTexture3: doughnutTexture3,
      doughnutTexture4: doughnutTexture4,
      doughnutTexture5: doughnutTexture5,
      comment: comment,
    });

    //Setting music if not playing
    if (!music.isPlaying()) {
      music.play();
    }
  }
}

//Setting ending state through calling careers
function dream(career) {
  currentAnswer = career.toLowerCase();
  console.log(currentAnswer);
  if (checkCareer) {
    currentState = new Ending({
      soulBackground: soulBackground,
      purpleGradient: purpleGradient,
      jerry: jerry,
      grassBlue: grassBlue,
      farewell: farewell,
      titleBackgroundData: titleBackgroundData,
    });

    //Setting music if not playing
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

//Setting manual display
function seeManual() {
  manual.active = true;
}

//Setting how to exit the manual
function exitManual() {
  manual.active = false;
}

//Resources:
//Soul, directed by Pete Docter(2020; Walt Disney Pictures and Pixar Animation Studios; Walt Disney Studios Motion Pictures, 2020), Digital platform.
//Trent Reznor and Atticus Ross, “Portal/The Hall of Everything(From "Soul"/Audio Only),” by Trent Reznor, December 18th,2020, WALT DISNEY RECORDS,13 on Soul, 2020, Digital platforms.
// LEGOfan2916.Soul screenshot-30.png, 2020, Soul/Gallery, Disney Wiki-Fandom, accessed March 7, 2021, https://disney.fandom.com/wiki/Jerry_(Soul)?file=Soul_screenshot_-30.png.
// LEGOfan2916.Soul screenshot-30.png, 2020, Soul/Gallery, Disney Wiki-Fandom, accessed March 7, 2021, https://disney.fandom.com/wiki/Jerry_(Soul)?file=Soul_screenshot_-30.png.
//Shelby Heinrich. This Pixar's Soul Quiz Will Reveal Your Spark, 2021, BuzzFeed, accessed March 7, 2021, https://www.buzzfeed.com/shelbyheinrich/soul-pixar-spark.
//Charlotte Grant. Starting a Bakery Business:Things You Need to Consider, 2020, Symbeo Health, accessed March 7, 2021, https://www.symbeohealth.com/starting-a-bakery-business-things-you-need-to-consider/.
//Musicferret. Art studio wall after months of kids splatter painting, 2020, reddit, accessed March 7, 2021,https://www.reddit.com/r/mildlyinteresting/comments/coacpa/art_studio_wall_after_months_of_kids_splatter/.
//Old Library Wallpapers,WallpaperAccess, accessed March 7, 2021,https://wallpaperaccess.com/old-library.
//Harryt Fang.Oval office at the desk, 2020, reddit, accessed March 7, 2021, https://www.reddit.com/r/zoombackgrounds/comments/gpf75a/oval_office_at_the_desk/.
//Elenas Art Studio.Abstract landscape print Large art landscape Moody sky abstract canvas Gray brown Horizontal line art Minimalist art 847 Long Floating frame, Pinterest, accessed March 7, 2021, https://www.pinterest.ca/pin/112941903127619320/.
//Chloé Meyer Art. PINK GRAIN,Chloé Meyer original art 24"x 36", abstract oil painting on canvas, Pinterest, accessed March 7, 2021, https://www.pinterest.ca/pin/376402481354560168/.
//Andrey Zhuralev.Background of the ceiling trim panels in the office. The texture of a standard panel ceiling in a building of flat squares, dreamstime, accessed March 7, 2021,https://www.dreamstime.com/background-ceiling-trim-panels-office-texture-standard-panel-ceiling-building-flat-squares-image198270727.
