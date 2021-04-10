class Intro extends Phaser.Scene {
  constructor() {
    super();
    this.sceneConfigA = {
      key: "sceneA",
      create: createA,
      pack: {
        files: [
          {
            type: "image",
            key: "intro1",
            url: `assets/images/Intro_Part1.png`,
          },
        ],
      },
    };

    this.sceneConfigB = {
      key: "sceneB",
      create: createB,
      pack: {
        files: [
          {
            type: "image",
            key: "intro2",
            url: `assets/images/Intro_Part2.png`,
          },
        ],
      },
    };
    this.sceneConfigC = {
      key: "sceneC",
      create: createC,
      pack: {
        files: [
          {
            type: "image",
            key: "intro3",
            url: `assets/images/Intro_Part3.png`,
          },
        ],
      },
    };

    this.sceneConfigD = {
      key: "sceneD",
      create: createD,
      pack: {
        files: [
          {
            type: "image",
            key: "intro4",
            url: `assets/images/Intro_Part4.png`,
          },
        ],
      },
    };
    this.sceneConfigE = {
      key: "sceneE",
      create: createE,
      pack: {
        files: [
          {
            type: "image",
            key: "intro5",
            url: `assets/images/Intro_Part5.png`,
          },
        ],
      },
    };
  }
  createA() {
    this.add.image(400, 300, "intro1");

    this.input.on(
      "pointerdown",
      function () {
        this.input.stopPropagation();
        this.scene.switch("sceneB");
      },
      this
    );
  }
  createB() {
    this.add.image(400, 300, "intro2");

    this.input.on(
      "pointerdown",
      function () {
        this.input.stopPropagation();
        this.scene.switch("sceneC");
      },
      this
    );
  }
  createC() {
    this.add.image(400, 300, "intro3");

    this.input.on(
      "pointerdown",
      function () {
        this.input.stopPropagation();
        this.scene.switch("sceneD");
      },
      this
    );
  }
  createD() {
    this.add.image(400, 300, "intro4");

    this.input.on(
      "pointerdown",
      function () {
        this.input.stopPropagation();
        this.scene.switch("sceneE");
      },
      this
    );
  }
  createE() {
    this.add.image(400, 300, "intro5");

    this.input.on(
      "pointerdown",
      function () {
        this.input.stopPropagation();
        this.scene.switch("Level1");
      },
      this
    );
  }
}
