class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: `boot`,
    });
  }

  // Preloading spritesheets, images,music, and bitmap font
  preload() {
    this.load.bitmapFont(
      "pressStart",
      "assets/fonts/Press_Start_2P.png",
      "assets/fonts/Press_Start_2P.xml"
    );
    this.load.audio(`theme`, `assets/sounds/Bike_Rides_The_Green_Orbs.mp3`);
    this.load.tilemapTiledJSON("level1", "assets/tilemaps/level1.json");
    this.load.spritesheet(`enemy`, `assets/images/Enemies.png`, {
      frameWidth: 140,
      frameHeight: 140,
      endFrame: 7,
    });
    this.load.spritesheet(`avatar`, `assets/images/avatar.png`, {
      frameWidth: 140,
      frameHeight: 128,
      endFrame: 9,
    });
    this.load.spritesheet(`mini-cloud`, `assets/images/mini-cloud.png`, {
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
    this.load.image(`background`, `assets/images/Background_Level1.png`);
    this.load.image(`flower`, `assets/images/Flowers.png`);
    this.load.image(`ground`, `assets/images/Ground_level1.png`);
    this.load.image(`enemies`, `assets/images/Enemies.png`);
    this.load.on(`complete`, () => {
      this.scene.start(`play`);
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
  }
  update() {}
}
