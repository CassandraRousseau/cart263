class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: `boot`,
    });
  }

  preload() {
    this.load.image(`enemy`, `assets/images/enemy.png`);
    this.load.spritesheet(`avatar`, `assets/images/avatar.png`, {
      frameWidth: 140,
      frameHeight: 140,
      endFrame: 9,
    });

    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    });
  }
  create() {
    let style = {
      fontFamily: "sans-serif",
      fontSize: `40px`,
      color: "#ffffff",
    };
    let loadingString = `Loading...`;
    this.add.text(100, 100, loadingString, style);
  }
  update() {}
}
