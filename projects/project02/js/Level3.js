class Level3 extends Phaser.Scene {
  // Setting parameters of the level
  constructor() {
    super({
      key: `level3`,
    });
    this.size = 100;
    this.moveCam = false;
    this.over = false;
    this.map;
    this.layerGround;
    this.layerEnemies;
    this.enemies;
    this.flower;
    let enemy;
  }
  // Creating properties of level
  create() {
    this.backgroundColor = "0xff0000";
    // Setting camera
    this.cameras.main.setBounds(0, 0, 720 * 16, 176);

    //Setting background
    for (let x = 0; x < 16; x++) {
      this.add.image(720 * x, 0, `background`).setOrigin(0, 0);
    }
    this.map = this.make.tilemap({ key: "level1" });

    let groundTiles = this.map.addTilesetImage("Ground_level1", "ground");
    let enemiesTiles = this.map.addTilesetImage("Enemies", "enemies");

    this.layerGround = this.map.createLayer("Ground_level1", groundTiles);
    this.layerGround.setCollisionByExclusion(-1, true);
    this.layerEnemies = this.map.createLayer("Enemies", enemiesTiles);

    //
    //   // Setting soundtrack
    //   this.music = this.sound.add("theme");
    //   this.music.loop = true;
    //   this.music.play();
    //
    //   // Setting tutorial text
    let texts = [
      {
        x: 400,
        string: `Let's save the clouds!\n To move, press left and right arrows`,
      },
      {
        x: 550 * 2,
        string: `Jump over the platform!\n Press Spacebar!`,
      },
      {
        x: 550 * 3,
        string: `Oh no! An enemy!\nJump on it!`,
      },
      {
        x: 550 * 6,
        string: `If you're hurt,\n collect the flowers to heal!`,
      },
      {
        x: 675 * 6,
        string: `You should be able to continue\n by yourself from now on!\n Good Luck! `,
      },
      {
        x: 800 * 14,
        string: `Look! A missing baby!`,
      },
    ];
    for (let i = 0; i < texts.length; i++) {
      this.text = this.add
        .bitmapText(texts[i].x, 250, `pressStart`, texts[i].string, 20)
        .setOrigin(0)
        .setCenterAlign()
        .setAngle(-180);
    }
    // Creating flowers
    let flowers = [
      {
        x: 575 * 6,
        y: 265,
      },
      {
        x: 800 * 7,
        y: 10,
      },
      {
        x: 835 * 8.3,
        y: 10,
      },
      {
        x: 775 * 13,
        y: 200,
      },
    ];
    for (let i = 0; i < flowers.length; i++) {
      this.flower = this.physics.add.staticGroup();
      this.flower.create(flowers[i].x, flowers[i].y, `flower`);
    }

    // Creating enemies
    let enemyPositions = [
      {
        x: 700 * 2.5,
        y: 100,
      },
      {
        x: 700 * 3.5,
        y: 100,
      },
      {
        x: 750 * 6,
        y: 100,
      },
      {
        x: 700 * 8,
        y: 100,
      },
      {
        x: 725 * 8,
        y: 100,
      },
      {
        x: 800 * 9.3,
        y: 200,
      },
      {
        x: 800 * 10.4,
        y: 100,
      },
      {
        x: 800 * 10.9,
        y: 100,
      },
      {
        x: 800 * 10,
        y: 400,
      },
      {
        x: 800 * 10.5,
        y: 400,
      },
      {
        x: 800 * 11,
        y: 400,
      },
      {
        x: 800 * 13,
        y: -100,
      },
    ];

    this.enemies = this.physics.add.group();

    for (let i = 0; i < enemyPositions.length; i++) {
      let enemy = this.enemies.create(
        enemyPositions[i].x,
        enemyPositions[i].y,
        `enemy`
      );

      this.tweens.add({
        targets: enemy,
        x: enemy.x + 100,
        duration: 3000,
        ease: "Power2",
        yoyo: true,
        loop: -1,
      });
    }

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

    // Created enemies animation
    this.enemies.playAnimation("enemy-moving");

    // Creating health bar
    this.healthBar = this.add.graphics();

    // Setting camera following avatar
    this.cameras.main.startFollow(this.avatar, true);

    // // Setting collision between avatar and platforms
    this.physics.add.collider(this.avatar, this.layerGround);

    // Setting collision between flowers and platforms
    this.physics.add.collider(this.flowers, this.layerGround);
    //
    // Setting collision between baby cloud and main platform
    this.physics.add.collider(this.cloud, this.layerGround);

    // Setting collision between enemies and main platform
    this.physics.add.collider(this.enemies, this.layerGround);

    // Setting collision between avatar and enemies
    this.physics.add.collider(
      this.avatar,
      this.enemies,
      this.hitEnemy,
      null,
      this
    );

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
      this.flower,
      this.collectItem,
      null,
      this
    );

    //   // Setting keyboard outputs
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  //
  // Setting how avatar eliminates the enemy
  hitEnemy(avatar, enemy) {
    if (avatar.body.y < enemy[i].body.y) {
      enemy.destroy();
    } else {
      // Setting avatar color when collision with an enemy
      avatar.setTint(0xff0000);
      this.size -= 1;
    }
  }

  // Avatar collecting flowers
  collectItem(avatar, flower) {
    flower.destroy();
    avatar.clearTint();
    this.size += 10;
  }

  // Creating ending level screen
  reachGoal() {
    if (this.over === false) {
      this.cameras.main.stopFollow(this.avatar, true);
      this.rectangle = this.add.rectangle(
        this.avatar.x,
        this.avatar.y,
        720 * 16,
        2 * 600,
        0x000000
      );

      this.textEnding = this.add
        .bitmapText(
          this.avatar.x,
          this.avatar.y - 300,
          "pressStart",
          `Level 1 Completed\nGood Job! You found a baby cloud!`,
          20
        )
        .setOrigin(0)
        .setCenterAlign()
        .setAngle(-180);
    }
    this.over = true;
  }

  // // Updating properties of the game
  update(collectItem) {
    // Setting avatar velocity
    this.avatar.setVelocity(0);

    //Setting baby cloud velocity
    this.cloud.setVelocity(0);

    // Setting camera movements
    this.cam = this.cameras.main;
    if (this.moveCam) {
      if (this.cursors.left.isDown) {
        this.cam.scrollX -= 4;
      } else if (this.cursors.right.isDown) {
        this.cam.scrollX += 4;
      }

      if (this.cursors.space.isDown) {
        this.cam.scrollY -= 4;
      } else if (this.cursors.down.isDown) {
        this.cam.scrollY += 4;
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

    // Resetting health bar filling
    this.healthBar.clear();

    // Creating health bar properties
    this.healthBar.fillStyle(0x2dff2d);
    this.healthBar.fillRect(
      this.avatar.x - 50,
      this.avatar.y - 100,
      this.size,
      20
    );

    // Filling bar if collecting flowers
    if (collectItem) {
      this.healthBar.fillRect(
        this.avatar.x - 50,
        this.avatar.y - 100,
        this.size,
        20
      );
    }
    // Shrinking heatlh bar if colliding with an enemy
    else if (hitEnemy) {
      this.healthBar.fillStyle(0x2d2d2d);
      this.healthBar.fillRect(
        this.avatar.x - 50,
        this.avatar.y - 100,
        this.size,
        20
      );
    }

    // Stopping game if health bar empty
    if (this.size <= 0) {
      this.gameOver();
    }
  }

  // Setting game over screen
  gameOver() {
    if (this.over === false) {
      this.cameras.main.stopFollow(this.avatar, true);
      this.music.stop();
      this.rectangle = this.add.rectangle(
        this.avatar.x,
        this.avatar.y,
        720 * 16,
        2 * 600,
        0x000000
      );
      this.textGameOver = this.add
        .bitmapText(
          this.avatar.x,
          this.avatar.y - 300,
          "pressStart",
          `GAME OVER\nDon't give up Flufluf!\n The babies are waiting for you!`,
          20
        )
        .setOrigin(0)
        .setCenterAlign()
        .setAngle(-180);
    }
    this.over = true;
  }
  //
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
