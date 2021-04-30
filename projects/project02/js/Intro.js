class Intro extends Phaser.Scene {
  // Sets properties of the introduction
  constructor() {
    super({
      key: `intro`,
    });
    this.image;
  }

  // Sets the game menu
  create() {
    this.menu = this.add.image(400, 300, "gameMenu").setInteractive();

    this.menu.on("pointerdown", this.createA, this);
    this.musicIntro = this.sound.add("themeIntro");
    this.musicIntro.loop = true;
    this.musicIntro.play();
  }
  // Sets the first scene of the cutscene
  createA() {
    this.intro1 = this.add.image(400, 300, "introPart1").setInteractive();
    this.intro1.on("pointerdown", this.createB, this);
  }

  // Sets the second scene of the cutscene
  createB() {
    this.intro2 = this.add.image(400, 300, "introPart2").setInteractive();
    this.intro2.on("pointerdown", this.createC, this);
  }

  // Sets the third scene of the cutscene
  createC() {
    this.intro3 = this.add.image(400, 300, "introPart3").setInteractive();
    this.intro3.on("pointerdown", this.createD, this);
  }

  // Sets the fourth scene of the cutscene
  createD() {
    this.intro4 = this.add.image(400, 300, "introPart4").setInteractive();
    this.intro4.on("pointerdown", this.createE, this);
  }

  // Sets the fifth scene of the cutscene
  createE() {
    this.intro5 = this.add.image(400, 300, "introPart5").setInteractive();
    this.intro5.on("pointerdown", this.createF, this);
  }

  // Sets the first level
  createF() {
    this.musicIntro.stop();
    this.scene.start("level1");
  }
}
