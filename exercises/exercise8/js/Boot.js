class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: `boot`,
    });
  }
  preload() {
    // Load assets here!
    this.load.image(`background`, `assets/images/background.jpg`);
    this.load.image(`lion`, `assets/images/lion.png`);
    this.load.image(`tiger`, `assets/images/tiger.png`);
    this.load.image(`zebra`, `assets/images/zebra.png`);

    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    });
  }

  create() {}
  update() {}
}
