class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`,
    });
    this.moveCam = false;
    // this.enemies = [];
  }
  create() {
    // Setting camera
    this.cameras.main.setBounds(0, 0, 720 * 16, 176);
    // let data = this.cache.text.get("story");
    //Setting background
    for (let x = 0; x < 16; x++) {
      this.add.image(720 * x, 0, `background`).setOrigin(0, 0);
    }

    let text1 = this.add
      .bitmapText(
        400,
        250,
        "pressStart",
        `Let's save the clouds!\n To move, press left and right arrows`,
        20
      )
      .setOrigin(0)
      .setCenterAlign()
      .setAngle(-180);
    let text2 = this.add
      .bitmapText(
        550 * 2,
        250,
        "pressStart",
        `Jump over the platform!\n Press Spacebar!`,
        20
      )
      .setOrigin(0)
      .setCenterAlign()
      .setAngle(-180);
    let text3 = this.add
      .bitmapText(
        550 * 3,
        250,
        "pressStart",
        `Oh no! An enemy!\nJump on it!`,
        20
      )
      .setOrigin(0)
      .setCenterAlign()
      .setAngle(-180);
    let text4 = this.add
      .bitmapText(550 * 4, 250, "pressStart", `Watch out! Enemy ahead!`, 20)
      .setOrigin(0)
      .setCenterAlign()
      .setAngle(-180);
    let text5 = this.add
      .bitmapText(
        550 * 6,
        250,
        "pressStart",
        `If you're hurt,\n collect the flowers to heal!`,
        20
      )
      .setOrigin(0)
      .setCenterAlign()
      .setAngle(-180);
    let text6 = this.add
      .bitmapText(
        675 * 6,
        250,
        "pressStart",
        `You should be able to continue\n by yourself from now on!\n Good Luck! `,
        20
      )
      .setOrigin(0)
      .setCenterAlign()
      .setAngle(-180);

    this.add.text(100 * 16, 300 * 16, `Look! A missed baby!`);
    // Creating main platform/ground
    this.platformsGround = this.physics.add.staticGroup({
      key: `ground`,
      repeat: 88,
      setXY: { x: 0, y: 550, stepX: 190 },
    });
    // Creating platforms
    this.platforms = this.physics.add.staticGroup();

    // // Setting platform positions
    this.platforms.create(550 * 2, 400, "ground");
    this.platforms.create(550 * 6, 400, "ground");

    this.platforms.create(750 * 6, 200, "ground");

    this.platforms.create(600 * 7, 400, "ground");

    this.platforms.create(750 * 7, 100, "ground");

    this.platforms.create(600 * 8, 400, "ground");

    this.platforms.create(750 * 8, 200, "ground");
    this.platforms.create(770 * 8, 200, "ground");
    this.platforms.create(770 * 8, 350, "ground");
    this.platforms.create(770 * 8, 450, "ground");

    this.platforms.create(800 * 16, 200, "ground");
    // this.platforms.create(50 * 9, 250, "ground");
    this.platforms.create(800 * 16, 600, "ground");
    // this.platforms.create(750, 220, "ground");

    this.platforms.create(800 * 16, 300, "ground");
    // this.platforms.create(500 * 2, 100, "ground");
    this.platforms.create(800 * 16, 400, "ground");

    this.platforms.create(800 * 16, 350, "ground");
    // this.platforms.create(50 * 3, 550, "ground");
    this.platforms.create(800 * 16, 200, "ground");

    this.platforms.create(800 * 16, 400, "ground");
    // this.platforms.create(50 * 4, 250, "ground");
    this.platforms.create(800 * 16, 220, "ground");

    this.platforms.create(800 * 16, 400, "ground");
    // this.platforms.create(50 * 5, 250, "ground");
    this.platforms.create(800 * 16, 220, "ground");

    // Creating flowers
    this.flowers = this.physics.add.staticGroup();
    this.flowers.create(550 * 6, 300, "flower");
    this.flowers.create(750 * 7, 0, "flower");
    // Setting flower positions

    // this.flowers.create(750, 120, "flower");
    // this.flowers.create(750 * 2, 300, "flower");
    // this.flowers.create(750 * 3, 100, "flower");

    // this.flowers.create(650 * 6, 125, "flower");
    // this.flowers.create(750 * 7, 125, "flower");
    //
    // this.flowers.create(750 * 6, 125, "flower");

    // Creating avatar sprite
    this.avatar = this.physics.add.sprite(100, 400, `avatar`);

    // Creating avatar animation
    this.createAnimations();
    this.avatar.setVelocityX(-330);
    this.avatar.body.setGravityY(4000);

    // Creating avatar animation
    this.cloud = this.physics.add.sprite(700 * 16, 400, `mini-cloud`);
    this.cloud.body.setGravityY(100);
    this.cloud.play(`cloud-moving`);

    // Creating enemies
    this.enemies = this.physics.add.group();
    console.log(this.enemies);

    this.enemies.create(700 * 3, 100, `enemy`, 0);
    this.enemies.create(700 * 3.5, 100, `enemy`, 0);
    this.enemies.create(750 * 6, 100, `enemy`, 0);
    this.enemies.create(700 * 8, 100, `enemy`, 0);
    this.enemies.create(725 * 8, 100, `enemy`, 0);
    // this.enemies.create(300, 100, `enemy`, 0);
    // this.enemies.create(300, 100, `enemy`, 0);

    this.enemies.playAnimation(`enemy-moving`);
    this.debug = this.add.graphics();
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

    this.physics.add.collider(this.enemies, this.platforms);

    // Setting collision between platforms and main platform
    this.physics.add.collider(this.platforms, this.platformsGround);

    // Setting collision between avatar and enemies
    this.physics.add.collider(this.avatar, this.enemies);

    this.physics.add.collider(this.avatar, this.cloud);

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
    this.debug.clear();

    const size = 200;

    this.debug.fillStyle(0x2dff2d);
    this.debug.fillRect(50, this.avatar.y - 100, size, 20);

    this.debug.fillStyle(0x2d2d2d);
    this.debug.fillRect(50, this.avatar.y - 100, size, 20);
    this.debug.startFollow(this.avatar);
    // this.avatar.setVelocity(2);
    // //
    // if (this.enemies.x > x + 50) {
    //   this.enemies.x += 2;
    // } else if (this.enemies.x < x + 50) {
    //   this.enemies.x += 2;
    // }
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
  moveEnemy() {}
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
