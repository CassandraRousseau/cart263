class Intro extends Phaser.Scene {
  constructor() {
    super();
    this.image;
  }
  create() {
    this.image = this.add.image(0, 0, "introPart1");
    this.input.on(
      "pointerdown",
      () => {
        if (this.image === "introPart1") {
          this.add.image(0, 0, "introPart2");
        } else if (this.image === "introPart2") {
          this.add.image(0, 0, "introPart3");
        } else if (this.image === "introPart3") {
          this.add.image(0, 0, "introPart4");
        } else if (this.image === "introPart4") {
          this.add.image(0, 0, "introPart5");
        } else if (this.image === "introPart5") {
          this.scene.add("level1", Level1, true);
        }
      },
      this
    );
    console.log(`introPart1`);
  }
}
