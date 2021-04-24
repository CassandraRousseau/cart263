class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: `boot`,
    });
  }

  // Preloading spritesheets, images,musicLevel1, and bitmap font
  preload() {
    this.load.bitmapFont(
      "pressStart",
      "assets/fonts/Press_Start_2P.png",
      "assets/fonts/Press_Start_2P.xml"
    );
    this.load.audio(`themeIntro`, `assets/sounds/Sand_Castle.mp3`);
    this.load.audio(
      `themeLevel1`,
      `assets/sounds/Bike_Rides_The_Green_Orbs.mp3`
    );
    this.load.audio(`themeLevel2`, `assets/sounds/This_Snow_Doesnt.mp3`);
    this.load.audio(`themeLevel3`, `assets/sounds/19th_Floor.mp3`);
    this.load.tilemapTiledJSON("level1", "assets/tilemaps/level1.json");
    this.load.tilemapTiledJSON("level2", "assets/tilemaps/level2.json");
    this.load.tilemapTiledJSON("level3", "assets/tilemaps/level3.json");
    this.load.spritesheet(`avatar`, `assets/images/avatar.png`, {
      frameWidth: 140,
      frameHeight: 128,
      endFrame: 9,
    });
    this.load.spritesheet(`enemy`, `assets/images/Enemies.png`, {
      frameWidth: 140,
      frameHeight: 140,
      endFrame: 7,
    });
    this.load.spritesheet(`enemyLevel2`, `assets/images/Enemy_level2.png`, {
      frameWidth: 140,
      frameHeight: 140,
      endFrame: 7,
    });
    this.load.spritesheet(`enemyLevel3`, `assets/images/Enemy_level3.png`, {
      frameWidth: 140,
      frameHeight: 140,
      endFrame: 7,
    });
    this.load.spritesheet(`mini-cloudLevel1`, `assets/images/mini-cloud.png`, {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 7,
    });
    this.load.spritesheet(`mini-cloudLevel2`, `assets/images/Mini-cloud2.png`, {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 7,
    });
    this.load.spritesheet(`mini-cloudLevel3`, `assets/images/Mini-cloud3.png`, {
      frameWidth: 100,
      frameHeight: 100,
      endFrame: 7,
    });
    // Preloading images
    this.load.image(`introPart1`, `assets/images/Intro_Part1.png`);
    this.load.image(`introPart2`, `assets/images/Intro_Part2.png`);
    this.load.image(`introPart3`, `assets/images/Intro_Part3.png`);
    this.load.image(`introPart4`, `assets/images/Intro_Part4.png`);
    this.load.image(`introPart5`, `assets/images/Intro_Part5.png`);

    this.load.image(`backgroundLevel1`, `assets/images/Background_Level1.png`);
    this.load.image(`flowerLevel1`, `assets/images/Flowers.png`);
    this.load.image(`groundLevel1`, `assets/images/Ground_level1.png`);

    this.load.image(`backgroundLevel2`, `assets/images/Level2_background.png`);
    this.load.image(`flowerLevel2`, `assets/images/Flower_level2.png`);
    this.load.image(`groundLevel2`, `assets/images/Ground_level2.png`);
    this.load.image(`mini-cloud2`, `assets/images/Mini-cloud2.png`);

    this.load.image(`backgroundLevel3`, `assets/images/Level3_background.png`);
    this.load.image(`flowerLevel3`, `assets/images/Flower_level3.png`);
    this.load.image(`groundLevel3`, `assets/images/GroundLevel3.png`);

    this.load.on(`complete`, () => {
      this.scene.start(`intro`);
    });
  }

  // Setting loading screen
  create() {
    let style = {
      fontSize: `40px`,
      color: "#ffffff",
    };
    let loadingString = `Loading...`;
    this.add.text(100, 100, loadingString, style);

    this.accessMicrophone();
    console.log(this.accessMicrophone);
  }
  update() {}
  accessMicrophone() {
    // This is working out how to access the browser's input (the microphone in this case)
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
    // This is making sure it's even possible
    if (navigator.getUserMedia) {
      // This is asking the browser for access to the microphone
      navigator.getUserMedia(
        {
          audio: true,
        },
        // This is the function that will be called when there's input
        (stream) => {
          // These are all parts of the browser's audio system being used
          // to figure out the volume from the microphone
          let audioContext = new AudioContext();
          let analyser = audioContext.createAnalyser();
          let microphone = audioContext.createMediaStreamSource(stream);
          let javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

          // Aparrently there is some other fancy stuff happening
          analyser.smoothingTimeConstant = 0.8;
          analyser.fftSize = 1024;

          // Audio programming always involves connecting various things to each other!
          microphone.connect(analyser);
          analyser.connect(javascriptNode);
          javascriptNode.connect(audioContext.destination);

          // This is the part that will actually analyse the data itself
          javascriptNode.onaudioprocess = () => {
            // This is it figuring out the different values in the current sample of audio
            let array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            let values = 0;
            let length = array.length;
            for (var i = 0; i < length; i++) {
              values += array[i];
            }
            // This is it averaging the amplitude across the value (getting the volume)
            let average = values / length;
            // And here we set out special property to record the current volume for
            // use elsewhere
            currentInputVolume = average;
          }; // end fn stream
        },
        function (err) {
          console.error("The following error occured: " + err.name);
        }
      );
    } else {
      console.error("getUserMedia not supported");
    }
  }
}
