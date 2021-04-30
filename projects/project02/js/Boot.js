class Boot extends Phaser.Scene {
  //
  constructor() {
    super({
      key: `boot`,
    });
  }

  // Preloading spritesheets,tilemaps,images,music, and bitmap font
  preload() {
    // Loading bitmap font
    this.load.bitmapFont(
      "pressStart",
      "assets/fonts/Press_Start_2P.png",
      "assets/fonts/Press_Start_2P.xml"
    );

    // loading music
    this.load.audio(`themeIntro`, `assets/sounds/Sand_Castle.mp3`);
    this.load.audio(
      `themeLevel1`,
      `assets/sounds/Bike_Rides_The_Green_Orbs.mp3`
    );
    this.load.audio(`themeLevel2`, `assets/sounds/This_Snow_Doesnt.mp3`);
    this.load.audio(`themeLevel3`, `assets/sounds/19th_Floor.mp3`);
    this.load.audio(`themeEnding`, `assets/sounds/Animal_Beast.mp3`);

    // loading tilemaps
    this.load.tilemapTiledJSON("level1", "assets/tilemaps/level1.json");
    this.load.tilemapTiledJSON("level2", "assets/tilemaps/level2.json");
    this.load.tilemapTiledJSON("level3", "assets/tilemaps/level3.json");

    // loading spritesheets
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
    this.load.spritesheet(
      `enemyLevel2Attack`,
      `assets/images/Enemy_level2_Attack.png`,
      {
        frameWidth: 280,
        frameHeight: 140,
        endFrame: 16,
      }
    );
    this.load.spritesheet(`enemyLevel3`, `assets/images/Enemy_level3.png`, {
      frameWidth: 140,
      frameHeight: 140,
      endFrame: 7,
    });
    this.load.spritesheet(
      `enemyLevel3Attack`,
      `assets/images/Enemy_level3_Attack.png`,
      {
        frameWidth: 240,
        frameHeight: 140,
        endFrame: 27,
      }
    );
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

    // Introduction's images
    this.load.image(`gameMenu`, `assets/images/Menu_Flufluf.png`);
    this.load.image(`introPart1`, `assets/images/Intro_part1.png`);
    this.load.image(`introPart2`, `assets/images/Intro_part2.png`);
    this.load.image(`introPart3`, `assets/images/Intro_part3.png`);
    this.load.image(`introPart4`, `assets/images/Intro_part4.png`);
    this.load.image(`introPart5`, `assets/images/Intro_part5.png`);

    // First level's images
    this.load.image(`backgroundLevel1`, `assets/images/Background_Level1.png`);
    this.load.image(`flowerLevel1`, `assets/images/Flowers.png`);
    this.load.image(`groundLevel1`, `assets/images/Ground_level1.png`);

    //Second level's images
    this.load.image(`backgroundLevel2`, `assets/images/Level2_background.png`);
    this.load.image(`flowerLevel2`, `assets/images/Flower_level2.png`);
    this.load.image(`groundLevel2`, `assets/images/Ground_level2.png`);

    // Third level's images
    this.load.image(`backgroundLevel3`, `assets/images/Level3_background.png`);
    this.load.image(`flowerLevel3`, `assets/images/Flower_level3.png`);
    this.load.image(`groundLevel3`, `assets/images/GroundLevel3.png`);

    // Ending's images

    this.load.image(`endingPart1`, `assets/images/Ending_Part1.png`);
    this.load.image(`endingPart2`, `assets/images/Ending_Part2.png`);
    this.load.image(`endingPart3`, `assets/images/Ending_Part3.png`);
    this.load.image(`endingPart4`, `assets/images/Ending_Part4.png`);
    this.load.image(`endingPart5`, `assets/images/Ending_Part5.png`);
    this.load.image(`endingPart6`, `assets/images/Ending_Part6.png`);
    // loading game
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

  // Loading microphone input
  accessMicrophone() {
    // Load how to access the browser's microphone input
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    // Verifies microphone input in the browser
    if (navigator.getUserMedia) {
      // Asking the browser for access to the microphone
      navigator.getUserMedia(
        {
          audio: true,
        },

        (stream) => {
          // Check the volume from the microphone
          let audioContext = new AudioContext();
          let analyser = audioContext.createAnalyser();
          let microphone = audioContext.createMediaStreamSource(stream);
          let javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

          analyser.smoothingTimeConstant = 0.8;
          analyser.fftSize = 1024;

          microphone.connect(analyser);
          analyser.connect(javascriptNode);
          javascriptNode.connect(audioContext.destination);

          // Analysis of the data
          javascriptNode.onaudioprocess = () => {
            //Figures out different values in the current sample of audio
            let array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            let values = 0;
            let length = array.length;
            for (var i = 0; i < length; i++) {
              values += array[i];
            }

            // Averaging the amplitude across the value (getting the volume)
            let average = values / length;

            //Set out special property to record the current volume for
            // use elsewhere
            currentInputVolume = average;
          };

          // end fn stream
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
