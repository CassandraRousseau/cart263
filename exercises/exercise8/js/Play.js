class Play extends Phaser.Scene {
  constructor(game) {
    super({
      key: `play`,
      game,
    });
    this.tigers;
    this.fx;
  }

  create() {
    // Create the background
    this.add.image(0, 0, `background`).setOrigin(0, 0);

    //Create the avatar(lion)
    this.avatar = this.physics.add.sprite(400, 300, `lion`);
    this.avatar.setCollideWorldBounds(true);

    // Create the zebra
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.zebra = this.physics.add.sprite(x, y, `zebra`);
    this.zebra.setCollideWorldBounds(true);

    // Create the tigers
    this.tigers = this.physics.add.group({
      key: `tiger`,
      quantity: 100,
      bounceX: 0.5,
      bounceY: 0.5,
      collideWorldBounds: true,
      dragX: 50,
      dragY: 50,
    });

    let tiger = Phaser.Actions.RandomRectangle(
      this.tigers.getChildren(),
      this.physics.world.bounds
    );

    // Create automated movements for tigers
    this.tweens.add({
      targets: tiger,
      x: 700,
      duration: 4000,
      ease: "Sine.easeInOut",
      flipX: true,
      yoyo: true,
      repeat: -1,
      delay: function (target, key, value, targetIndex) {
        return targetIndex * 1000;
      },
    });

    // Added overlap between zebra and avatar
    this.physics.add.overlap(this.avatar, this.zebra, this.getPrey, null, this);

    //Added collision between avatar and tigers
    this.physics.add.collider(
      this.avatar,
      this.tigers,
      this.collisionTigers,
      null,
      this
    );

    // Added collision between zebra and tigers
    this.physics.add.collider(this.zebra, this.tigers);

    // Added collision between tigers
    this.physics.add.collider(this.tigers, this.tigers);

    //Added cursors
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  //Added sound effect in collision between tigers and avatar
  collisionTigers() {
    this.fx = this.sound.add("collision");
    this.fx.play();
  }

  //  Added sound effect when avatar catches a zebra
  getPrey(avatar, zebra) {
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.zebra.setPosition(x, y);
    this.fx = this.sound.add("collision");
    this.fx.play();
  }

  // Added controls for avatar
  update() {
    if (this.cursors.left.isDown) {
      this.avatar.setAngularVelocity(-150);
    } else if (this.cursors.right.isDown) {
      this.avatar.setAngularVelocity(150);
    } else {
      this.avatar.setAngularVelocity(0);
    }
    if (this.cursors.up.isDown) {
      // Added avatar rotation
      this.physics.velocityFromRotation(
        this.avatar.rotation,
        600,
        this.avatar.body.acceleration
      );
    } else {
      this.avatar.setAcceleration(0);
    }
  }
}
