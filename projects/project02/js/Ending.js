class Ending extends Phaser.Scene {
  // Sets properties of the ending
  constructor() {
    super({
      key: `ending`,
    });
    this.image;
  }

  // Sets the first scene of the cutscene
  create() {
    this.ending = this.add.image(400, 300, "endingPart1").setInteractive();
    this.ending.on("pointerdown", this.createA, this);
    this.musicIntro = this.sound.add("themeIntro");
    this.musicIntro.loop = true;
    this.musicIntro.play();
  }

  // Sets the second scene of the cutscene
  createA() {
    this.ending2 = this.add.image(400, 300, "endingPart2").setInteractive();
    this.ending2.on("pointerdown", this.createB, this);
  }

  // Sets the third scene of the cutscene
  createB() {
    this.ending3 = this.add.image(400, 300, "endingPart3").setInteractive();
    this.ending3.on("pointerdown", this.createC, this);
  }

  // Sets the fourth scene of the cutscene
  createC() {
    this.ending4 = this.add.image(400, 300, "endingPart4").setInteractive();
    this.ending4.on("pointerdown", this.createD, this);
  }

  // Sets the fifth scene of the cutscene
  createD() {
    this.ending5 = this.add.image(400, 300, "endingPart5").setInteractive();
    this.ending5.on("pointerdown", this.createE, this);
  }

  // Sets the sixth scene of the cutscene
  createE() {
    this.ending6 = this.add.image(400, 300, "endingPart6");
  }
}
