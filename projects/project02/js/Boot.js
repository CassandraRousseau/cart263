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
    this.load.image(`enemiesLevel1`, `assets/images/Enemies.png`);

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
  }
  update() {}
}
