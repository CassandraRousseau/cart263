class Intro extends Phaser.Scene {
  constructor() {
    super({
      key: `intro`,
    });
    this.image;
  }
  create() {
    this.menu = this.add.image(400, 300, "gameMenu").setInteractive();
    this.menu.on("pointerdown", this.createB, this);
    this.musicIntro = this.sound.add("themeIntro");
    this.musicIntro.loop = true;
    this.musicIntro.play();
  }
  createB() {
    this.intro1 = this.add.image(400, 300, "introPart1").setInteractive();
    this.intro1.on("pointerdown", this.createC, this);
  }
  createC() {
    this.intro2 = this.add.image(400, 300, "introPart2").setInteractive();
    this.intro2.on("pointerdown", this.createD, this);
  }
  createD() {
    this.intro3 = this.add.image(400, 300, "introPart3").setInteractive();
    this.intro3.on("pointerdown", this.createE, this);
  }
  createE() {
    this.intro4 = this.add.image(400, 300, "introPart4").setInteractive();
    this.intro4.on("pointerdown", this.createF, this);
  }
  createF() {
    this.intro5 = this.add.image(400, 300, "introPart5").setInteractive();
    this.intro5.on("pointerdown", this.createG, this);
  }
  createG() {
    this.musicIntro.stop();
    this.scene.start("level2");
  }
}
