class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`,
    });
    this.moveCam = false;
  }
  create() {
    // Setting camera
    this.cameras.main.setBounds(0, 0, 720 * 8, 176);

    //Setting background
    for (let x = 0; x < 8; x++) {
      this.add.image(720 * x, 0, `background`).setOrigin(0, 0);
    }

    // Creating platforms
    this.platforms = this.physics.add.staticGroup();

    // Setting platform positions
    this.platforms.create(600, 400, "ground");
    this.platforms.create(550 * 2, 600, "ground");
    this.platforms.create(750, 220, "ground");

    this.platforms.create(600 * 2, 300, "ground");
    this.platforms.create(500 * 2, 100, "ground");
    this.platforms.create(750 * 2, 400, "ground");

    this.platforms.create(600 * 3, 350, "ground");
    this.platforms.create(50 * 3, 550, "ground");
    this.platforms.create(750 * 3, 200, "ground");

    this.platforms.create(600 * 4, 400, "ground");
    this.platforms.create(50 * 4, 250, "ground");
    this.platforms.create(750 * 4, 220, "ground");

    this.platforms.create(600 * 5, 400, "ground");
    this.platforms.create(50 * 5, 250, "ground");
    this.platforms.create(750 * 5, 220, "ground");

    this.platforms.create(600 * 6, 400, "ground");
    this.platforms.create(650 * 6, 220, "ground");
    this.platforms.create(50 * 6, 250, "ground");
    this.platforms.create(750 * 6, 220, "ground");

    this.platforms.create(600 * 7, 400, "ground");
    this.platforms.create(50 * 7, 250, "ground");
    this.platforms.create(750 * 7, 220, "ground");

    this.platforms.create(600 * 8, 400, "ground");
    this.platforms.create(50 * 8, 250, "ground");
    this.platforms.create(750 * 8, 220, "ground");

    // Creating flowers
    this.flowers = this.physics.add.staticGroup();

    // Setting flower positions
    this.flowers.create(50 * 5, 150, "flower");
    this.flowers.create(750, 120, "flower");
    this.flowers.create(750 * 2, 300, "flower");
    this.flowers.create(750 * 3, 100, "flower");
    this.flowers.create(600 * 6, 300, "flower");
    this.flowers.create(650 * 6, 125, "flower");
    this.flowers.create(750 * 7, 125, "flower");

    this.flowers.create(750 * 6, 125, "flower");

    // // Position randomly enemies
    // this.enemies.children.each(function (enemy) {
    //   let x = Math.random() * this.sys.canvas.width;
    //   let y = Math.random() * this.sys.canvas.height;
    //   enemy.setPosition(x, y);
    // }, this);

    // Creating main platform/ground
    this.platformsGround = this.physics.add.staticGroup({
      key: `ground`,
      repeat: 88,
      setXY: { x: 0, y: 550, stepX: 70 },
    });

    // Creating avatar sprite
    this.avatar = this.physics.add.sprite(100, 400, `avatar`);

    // Creating avatar animation
    this.createAnimations();
    this.avatar.setVelocityX(-330);
    this.avatar.body.setGravityY(4000);

    // Creating avatar animation
    this.cloud = this.physics.add.sprite(700 * 8, 400, `mini-cloud`);
    this.cloud.body.setGravityY(100);
    this.cloud.play(`cloud-moving`);
    // // Creating enemies animation
    // for (var i = 0; i < 4; i++) {
    //   this.enemies = this.physics.add.sprite(`enemy`);
    //   // this.enemies.body.setGravityY(100);
    //   this.enemies.setVelocityX(100);
    //   this.enemies.play(`enemy-moving`);
    // }
    // this.enemy1 = this.enemies.create(200, 100, `enemy`).setVelocity(100, 0);
    // this.enemies.play(`enemy-moving`);
    // // var block2 = group.create(500, 200, "block").setVelocity(-100, -100);
    // // var block3 = group.create(300, 400, "block").setVelocity(60, 100);
    // // var block4 = group.create(600, 300, "block").setVelocity(-30, -50);
    // //  Here we create our coins group

    // Creating enemies
    this.enemies = this.physics.add.group({
      key: `enemy`,
      quantity: 4,
    });

    //  Now let's add 50 coins into it
    for (var i = 0; i < 4; i++) {
      this.enemies.create(
        this.physics.world.randomX,
        this.physics.world.randomY,
        `enemy`,
        0
      );
    }
    this.enemies.playAnimation(`enemy-moving`);
    //
    // //  Now using the power of callAll we can add the same animation to all coins in the group:
    // this.enemies.callAll(
    //   "animations.add",
    //   "animations",
    //   "spin",
    //   [0, 1, 2, 3, 4, 5],
    //   10,
    //   true
    // );
    //
    // //  And play them
    // this.enemies.callAll("animations.play", "animations", "spin");

    // Setting camera following avatar
    this.cameras.main.startFollow(this.avatar, true);

    // Setting collision between avatar and platforms
    this.physics.add.collider(this.avatar, this.platforms);
    console.log(this.physics.add.collider);
    // Setting collision between flowers and platforms
    this.physics.add.collider(this.flowers, this.platforms);
    // Setting collision between avatar and main platform
    this.physics.add.collider(this.avatar, this.platformsGround);
    // Setting collision between baby cloud and main platform
    this.physics.add.collider(this.cloud, this.platformsGround);
    // Setting collision between enemies and main platform
    this.physics.add.collider(this.enemies, this.platformsGround);
    // Setting collision between platforms and main platform
    this.physics.add.collider(this.platforms, this.platformsGround);
    //
    // // Setting collision between avatar and enemies
    // this.physics.add.collider(
    //   this.avatar,
    //   this.enemies,
    //   this.hitEnemy,
    //   null,
    //   this
    // );
    this.physics.add.collider(this.avatar, this.cloud);
    console.log(this.physics.add.collider);
    // Setting collision between avatar and flowers
    this.physics.add.overlap(
      this.avatar,
      this.flowers,
      this.collectItem,
      null,
      this
    );

    // Setting keyboard outputs
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  // // Setting avatar color when collision with an enemy
  // hitEnemy(avatar, enemy) {
  //   // this.physics.pause();
  //   avatar.setTint(0xff0000);
  //   console.log(hitEnemy);
  // }

  // Avatar collecting flowers
  collectItem(avatar, flower) {
    flower.destroy();
  }

  update() {
    // Setting avatar velocity
    this.avatar.setVelocity(0);

    // Setting camera movements
    const cam = this.cameras.main;
    if (this.moveCam) {
      if (this.cursors.left.isDown) {
        cam.scrollX -= 4;
      } else if (this.cursors.right.isDown) {
        cam.scrollX += 4;
      }

      if (this.cursors.space.isDown) {
        cam.scrollY -= 4;
      } else if (this.cursors.down.isDown) {
        cam.scrollY += 4;
      }
    } else {
      // Setting keybord inputs on avatar
      if (this.cursors.left.isDown) {
        this.avatar.setVelocityX(-300);
      } else if (this.cursors.right.isDown) {
        this.avatar.setVelocityX(300);
      } else if (this.cursors.space.isDown) {
        this.avatar.setVelocityY(-200);
      }
    }
    // Starting avatar animation if moving
    if (
      this.avatar.body.velocity.x !== 0 ||
      this.avatar.body.velocity.y !== 0
    ) {
      this.avatar.play(`avatar-moving`, true);
    } else {
      this.avatar.play(`avatar-idle`, true);
    }
  }

  // Setting avatar and enemies animations
  createAnimations() {
    this.anims.create({
      key: `avatar-moving`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start: 0,
        end: 9,
      }),
      frameRate: 24,
      repeat: -1,
    });

    this.anims.create({
      key: `avatar-idle`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start: 0,
        end: 0,
      }),
      frameRate: 24,
      repeat: 0,
    });
    this.anims.create({
      key: `cloud-moving`,
      frames: this.anims.generateFrameNumbers(`mini-cloud`, {
        start: 0,
        end: 7,
      }),
      frameRate: 24,
      repeat: -1,
    });

    this.anims.create({
      key: `enemy-moving`,
      frames: this.anims.generateFrameNumbers(`enemy`, {
        start: 0,
        end: 7,
      }),
      frameRate: 24,
      repeat: -1,
    });
  }
}
