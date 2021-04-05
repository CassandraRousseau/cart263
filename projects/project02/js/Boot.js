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
    this.load.spritesheet(`enemy`, `assets/images/enemy.png`, {
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
    this.load.image(`background`, `assets/images/Background.png`);
    this.load.image(`flower`, `assets/images/flower.png`);
    this.load.image(`ground`, `assets/images/Ground.png`);
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
