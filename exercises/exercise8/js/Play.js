class Play extends Phaser.Scene {
  constructor(game) {
    super({
      key: `play`,
      game,
    });
  }

  create() {
    this.add.image(0, 0, `background`).setOrigin(0, 0);
    //Create the avatar
    this.avatar = this.physics.add.sprite(400, 300, `lion`);
    this.avatar.setCollideWorldBounds(true);

    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.sadness = this.physics.add.sprite(x, y, `zebra`);
    this.sadness.setCollideWorldBounds(true);
    this.happiness = this.physics.add.group({
      key: `tiger`,
      quantity: 120,
      bounceX: 0.5,
      bounceY: 0.5,
      collideWorldBounds: true,
      dragX: 50,
      dragY: 50,
    });

    Phaser.Actions.RandomRectangle(
      this.happiness.getChildren(),
      this.physics.world.bounds
    );
    this.physics.add.overlap(
      this.avatar,
      this.sadness,
      this.getSad,
      null,
      this
    );
    this.physics.add.collider(this.avatar, this.happiness);
    this.physics.add.collider(this.sadness, this.happiness);
    this.physics.add.collider(this.happiness, this.happiness);

    this.cursors = this.input.keyboard.createCursorKeys();

    // // this.happiness.startFollow(this.avatar);
    // this.input.on(
    //   "pointermove",
    //   function (avatar) {
    //     Phaser.Utils.Array.Each(
    //       this.happiness.getChildren(),
    //       this.physics.moveToObject,
    //       this.physics,
    //       this.avatar,
    //       120
    //     );
    //   },
    //   this
    // );
  }

  getSad(avatar, sadness) {
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.sadness.setPosition(x, y);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.avatar.setAngularVelocity(-150);
    } else if (this.cursors.right.isDown) {
      this.avatar.setAngularVelocity(150);
    } else {
      this.avatar.setAngularVelocity(0);
    }
    if (this.cursors.up.isDown) {
      this.physics.velocityFromRotation(
        this.avatar.rotation,
        600,
        this.avatar.body.acceleration
      );
    } else {
      this.avatar.setAcceleration(0);
    }
    if (game.input.keyboard.isDown) {
      //  First is the callback
      //  Second is the context in which the callback runs, in this case game.physics.arcade
      //  Third is the parameter the callback expects - it is always sent the Group child as the first parameter
      this.happiness.forEach(
        game.physics.arcade.moveToObject,
        game.physics.arcade,
        false,
        200
      );
    } else {
      this.happiness.setAll("body.velocity.x", 0);
      this.happiness.setAll("body.velocity.y", 0);
    }
  }
}
