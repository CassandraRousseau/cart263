class Play extends Phaser.Scene {
  // Setting parameters of the level
  constructor() {
    super({
      key: `play`,
    });
    this.moveCam = false;
  }
  // Creating properties of level
  create() {
    // Setting camera
    this.cameras.main.setBounds(0, 0, 720 * 16, 176);

    //Setting background
    for (let x = 0; x < 16; x++) {
      this.add.image(720 * x, 0, `background`).setOrigin(0, 0);
    }

    // Setting tutorial text
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

    let text7 = this.add
      .bitmapText(800 * 14, 250, "pressStart", `Look! A missing baby!`, 20)
      .setOrigin(0)
      .setCenterAlign()
      .setAngle(-180);

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

    this.platforms.create(800 * 8.3, 100, "ground");
    this.platforms.create(800 * 8.3, 400, "ground");
    this.platforms.create(800 * 8.5, 400, "ground");
    this.platforms.create(800 * 8.7, 400, "ground");
    this.platforms.create(800 * 8.9, 400, "ground");
    this.platforms.create(800 * 9.1, 400, "ground");
    this.platforms.create(800 * 9.3, 400, "ground");
    this.platforms.create(800 * 9.5, 400, "ground");

    this.platforms.create(800 * 9.5, 100, "ground");
    this.platforms.create(800 * 10, 200, "ground");

    this.platforms.create(800 * 10.5, 300, "ground");
    this.platforms.create(800 * 11, 220, "ground");

    this.platforms.create(800 * 11.5, 350, "ground");
    this.platforms.create(800 * 11.7, 350, "ground");
    this.platforms.create(800 * 11.9, 350, "ground");
    this.platforms.create(800 * 12.1, 350, "ground");

    this.platforms.create(800 * 13, 300, "ground");
    this.platforms.create(800 * 13, 100, "ground");
    this.platforms.create(800 * 13.2, 100, "ground");

    // Creating flowers
    this.flowers = this.physics.add.staticGroup();
    // Setting flower positions
    this.flowers.create(550 * 6, 300, "flower");
    this.flowers.create(750 * 7, 0, "flower");
    this.flowers.create(800 * 8.3, 0, "flower");
    this.flowers.create(800 * 13, 200, "flower");

    // Creating avatar sprite
    this.avatar = this.physics.add.sprite(100, 400, `avatar`);

    // Creating avatar animation
    this.createAnimations();
    this.avatar.setVelocityX(-330);
    this.avatar.body.setGravityY(4000);

    // Creating baby cloud sprite
    this.cloud = this.physics.add.sprite(700 * 16, 400, `mini-cloud`);

    // Creating baby cloud animation
    this.cloud.body.setGravityY(100);
    this.cloud.play(`cloud-moving`);

    // Creating enemies
    this.enemies = this.physics.add.group();

    //Setting enemies position
    this.enemies.create(700 * 3, 100, `enemy`, 0);
    this.enemies.create(700 * 3.5, 100, `enemy`, 0);
    this.enemies.create(750 * 6, 100, `enemy`, 0);
    this.enemies.create(700 * 8, 100, `enemy`, 0);
    this.enemies.create(725 * 8, 100, `enemy`, 0);
    this.enemies.create(800 * 9.3, 200, `enemy`, 0);
    this.enemies.create(800 * 10, 100, `enemy`, 0);
    this.enemies.create(800 * 10.5, 100, `enemy`, 0);
    this.enemies.create(800 * 11, 100, `enemy`, 0);
    this.enemies.create(800 * 10, 400, `enemy`, 0);
    this.enemies.create(800 * 10.5, 400, `enemy`, 0);
    this.enemies.create(800 * 11, 400, `enemy`, 0);
    this.enemies.create(800 * 13, -100, `enemy`, 0);

    // Animating enemies
    this.enemies.playAnimation(`enemy-moving`);

    // Creating health bar
    this.debug = this.add.graphics();

    // Setting camera following avatar
    this.cameras.main.startFollow(this.avatar, true);

    // Setting collision between avatar and platforms
    this.physics.add.collider(this.avatar, this.platforms);

    // Setting collision between flowers and platforms
    this.physics.add.collider(this.flowers, this.platforms);

    // Setting collision between avatar and main platform
    this.physics.add.collider(this.avatar, this.platformsGround);

    // Setting collision between baby cloud and main platform
    this.physics.add.collider(this.cloud, this.platformsGround);

    // Setting collision between enemies and main platform
    this.physics.add.collider(this.enemies, this.platformsGround);

    // Setting collision between enemies and platforms
    this.physics.add.collider(this.enemies, this.platforms);

    // Setting collision between platforms and main platform
    this.physics.add.collider(this.platforms, this.platformsGround);

    // Setting collision between avatar and enemies
    this.physics.add.collider(
      this.avatar,
      this.enemies,
      this.hitEnemy,
      null,
      this
    );
    console.log(this.hitEnemy);

    // Setting collision between avatar and baby cloud
    this.physics.add.collider(
      this.avatar,
      this.cloud,
      this.reachGoal,
      null,
      this
    );

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

  // Setting how avatar eliminates the enemy
  hitEnemy(avatar, enemies) {
    if (avatar.body.velocity.y > 0 || enemies.body.blocked.up) {
      enemies.destroy();
    } else {
      // Setting avatar color when collision with an enemy
      avatar.setTint(0xff0000);
    }

    console.log(hitEnemy);
  }

  // Avatar collecting flowers
  collectItem(avatar, flower) {
    flower.destroy();
  }

  // Creating ending level screen
  reachGoal() {
    let rect = this.add.rectangle(800 * 11, 400, 400, 300, 0xff0000);
    console.log(rect);

    let text8 = this.add
      .bitmapText(
        800 * 14,
        250,
        "pressStart",
        `Level 1 Completed\nGood Job! You found a baby cloud!`,
        20
      )
      .setOrigin(0)
      .setCenterAlign()
      .setAngle(-180);
  }

  // Updating properties of the game
  update(collectItem) {
    // Setting avatar velocity
    this.avatar.setVelocity(0);

    //Setting baby cloud velocity
    this.cloud.setVelocity(0);
    // this.enemies.setVelocity(0);

    // Resetting health bar filling
    this.debug.clear();

    // Creating health bar properties
    const size = 200;
    this.debug.fillStyle(0x2dff2d);
    this.debug.fillRect(50, this.avatar.y - 100, size, 20);

    // Filling bar if collecting flowers
    if (collectItem) {
      this.debug.fillRect(50, this.avatar.y - 100, size + 1, 20);
    }
    // Shrinking heatlh bar if colliding with an enemy
    // else if (hitEnemy) {
    //   this.debug.fillStyle(0x2d2d2d);
    //   this.debug.fillRect(50, this.avatar.y - 100, size - 1, 20);
    // }

    // Stopping game if health bar empty
    if (size === 0) {
      gameOver();
    }

    // Health bar following the avatar
    // this.debug.startFollow(this.avatar);

    //Automated movement for enemies
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
  healthBar() {}

  // Setting game over screen
  gameOver() {
    this.cameras.main.setBackgroundColor("#000000");
    let text9 = this.add
      .bitmapText(
        800 * 14,
        250,
        "pressStart",
        `GAME OVER\nDon't give up Flufluf! The babies are waiting for you!`,
        20
      )
      .setOrigin(0)
      .setCenterAlign()
      .setAngle(-180);
  }

  // Setting avatar, baby cloud, and enemies animations
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
