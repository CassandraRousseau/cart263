class Level2 extends Phaser.Scene {
  // Setting parameters of the level
  constructor() {
    super({
      key: `level2`,
    });
    this.size = 100;
    this.moveCam = false;
    this.over = false;
    this.map;
    this.layerGround;
    this.layerEnemies;
    this.enemiesLevel2;
    this.flower;
    let enemyLevel2;
  }

  // Creating properties of level
  create() {
    // A property to store the current input volume
    currentInputVolume = 0;

    // Sets background colour
    this.backgroundColor = "0xff0000";

    // Setting camera
    this.cameras.main.setBounds(0, 0, 720 * 16, 176);

    //Setting background
    for (let x = 0; x < 16; x++) {
      this.add.image(720 * x, 0, `backgroundLevel2`).setOrigin(0, 0);
    }

    // Setting tilemap
    this.map = this.make.tilemap({ key: "level2" });

    let groundTiles = this.map.addTilesetImage(
      "Platforms_Level2",
      "groundLevel2"
    );

    this.layerCloud = this.map.createLayer("Mini-Cloud2", `mini-cloud2`);
    this.layerGround = this.map.createLayer("Platforms_Level2", groundTiles);
    this.layerGround.setCollisionByExclusion(-1, true);

    // Setting soundtrack
    this.musicLevel2 = this.sound.add("themeLevel2");
    this.musicLevel2.loop = true;
    this.musicLevel2.play();

    // Creating flowers

    let flowersPositions = [
      {
        x: 400 * 6.5,
        y: 75,
      },
      {
        x: 400 * 10.5,
        y: 140,
      },
      {
        x: 400 * 14,
        y: 75,
      },
      {
        x: 400 * 18.6,
        y: 10,
      },
      {
        x: 400 * 22.5,
        y: 200,
      },
      {
        x: 400 * 22.5,
        y: 200,
      },
      {
        x: 400 * 26.5,
        y: 460,
      },
    ];
    this.flowers = this.physics.add.staticGroup();
    for (let i = 0; i < flowersPositions.length; i++) {
      this.flowers.create(
        flowersPositions[i].x,
        flowersPositions[i].y,
        `flowerLevel2`
      );
    }

    // Creating enemies
    let enemyPositions = [
      {
        x: 200 * 2.5,
        y: 250,
      },
      {
        x: 200 * 1.2,
        y: 425,
      },
      {
        x: 400 * 2.9,
        y: 425,
      },
      {
        x: 400 * 4.5,
        y: 425,
      },
      {
        x: 400 * 5.5,
        y: 425,
      },
      {
        x: 400 * 6,
        y: 425,
      },
      {
        x: 400 * 9.3,
        y: 425,
      },
      {
        x: 400 * 10.5,
        y: 425,
      },
      {
        x: 400 * 11.4,
        y: 425,
      },

      {
        x: 400 * 13,
        y: 425,
      },
      {
        x: 400 * 14,
        y: 425,
      },
      {
        x: 400 * 16,
        y: 425,
      },
      {
        x: 400 * 15.5,
        y: 125,
      },
      {
        x: 400 * 17,
        y: 425,
      },
      {
        x: 400 * 18.7,
        y: 100,
      },
      {
        x: 400 * 18,
        y: 425,
      },
      {
        x: 400 * 19.5,
        y: 425,
      },
      {
        x: 400 * 21,
        y: 425,
      },
      {
        x: 400 * 24,
        y: 425,
      },
      {
        x: 400 * 27,
        y: 425,
      },
      {
        x: 400 * 28,
        y: 425,
      },
      {
        x: 400 * 28.5,
        y: 425,
      },
    ];

    this.enemiesLevel2 = this.physics.add.group();

    for (let i = 0; i < enemyPositions.length; i++) {
      let enemyLevel2 = this.enemiesLevel2.create(
        enemyPositions[i].x,
        enemyPositions[i].y,
        `enemyLevel2`
      );

      this.tweens.add({
        targets: enemyLevel2,
        x: enemyLevel2.x + 100,
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
    this.avatar.body.setGravityY(8000);

    // Creating baby cloud sprite
    this.cloudLevel2 = this.physics.add.sprite(
      700 * 16,
      400,
      `mini-cloudLevel2`
    );

    // Creating baby cloud animation
    this.cloudLevel2.body.setGravityY(100);
    this.cloudLevel2.play(`cloudLevel2-moving`);

    // Created enemies animation
    this.enemiesLevel2.playAnimation("enemyLevel2-moving");

    // Creating health bar
    this.healthBar = this.add.graphics();

    // Setting camera following avatar
    this.cameras.main.startFollow(this.avatar, true);

    // // // Setting collision between avatar and platforms
    this.physics.add.collider(this.avatar, this.layerGround);
    //
    // // Setting collision between flowers and platforms
    this.physics.add.collider(this.flowers, this.layerGround);

    // Setting collision between baby cloud and main platform
    this.physics.add.collider(this.cloudLevel2, this.layerGround);

    // Setting collision between enemies and main platform
    this.physics.add.collider(this.enemiesLevel2, this.layerGround);

    // Setting collision between avatar and enemies
    this.physics.add.collider(
      this.avatar,
      this.enemiesLevel2,
      this.hitEnemy,
      null,
      this
    );

    // Setting collision between avatar and baby cloud
    this.physics.add.collider(
      this.avatar,
      this.cloudLevel2,
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
  hitEnemy(avatar, enemyLevel2) {
    if (avatar.body.y < enemyLevel2.body.y) {
      enemyLevel2.destroy();
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
      this.rectangle = this.add
        .rectangle(this.avatar.x, this.avatar.y, 720 * 16, 2 * 600, 0x000000)
        .setInteractive();

      // Sets ending level text
      this.textEnding = this.add
        .bitmapText(
          this.avatar.x,
          this.avatar.y - 300,
          "pressStart",
          `Level 2 Completed\nGood Job! You found Purple cloud!\n Purple cloud claims their headquarter\n is near a volcano!\n Let's go (Press your mouse)!`,
          20
        )
        .setOrigin(0)
        .setCenterAlign()
        .setAngle(-180);
    }
    this.over = true;
    this.rectangle.on("pointerdown", this.nextLevel, this);
  }

  // Makes transition to the next level
  nextLevel() {
    this.musicLevel2.stop();
    this.musicLevel2.loop = false;

    this.scene.start("level3");
  }

  // Updating properties of the game
  update(collectItem) {
    // Prove that we're getting a volume
    console.log(currentInputVolume);

    // Setting avatar velocity
    this.avatar.setVelocity(0);

    //Setting baby cloud velocity
    this.cloudLevel2.setVelocity(0);

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
      }

      // Setting the volume required to make the avatar  fly
      if (currentInputVolume >= 8) {
        this.avatar.setVelocityY(-225);
      } else {
        this.avatar.setVelocityY(0);
      }
      if (this.avatar.y >= 600) {
        this.avatar.setVelocityY(100);
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

    // Sets the enemies attacks
    this.enemiesLevel2.children.each((enemyLevel2) => {
      this.attackEnemies(enemyLevel2);
    });

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

  // Creates the enemies attacks
  attackEnemies(enemyLevel2) {
    if (
      Phaser.Math.Distance.Between(
        this.avatar.x,
        this.avatar.y,
        enemyLevel2.x,
        enemyLevel2.y
      ) <= 300
    ) {
      // Makes a transition to the animation of enemy's attack
      if (enemyLevel2.anims.getName() === "enemyLevel2-moving") {
        enemyLevel2.play("enemyLevel2-attack");
      }
    }
  }

  // Setting game over screen
  gameOver() {
    if (this.over === false) {
      this.cameras.main.stopFollow(this.avatar, true);
      this.musicLevel2.stop();
      this.rectangle = this.add.rectangle(
        this.avatar.x,
        this.avatar.y,
        720 * 16,
        2 * 600,
        0x000000
      );

      // Sets game over text
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
      key: `cloudLevel2-moving`,
      frames: this.anims.generateFrameNumbers(`mini-cloudLevel2`, {
        start: 0,
        end: 7,
      }),
      frameRate: 24,
      repeat: -1,
    });

    this.anims.create({
      key: `enemyLevel2-moving`,
      frames: this.anims.generateFrameNumbers(`enemyLevel2`, {
        start: 0,
        end: 7,
      }),
      frameRate: 24,
      repeat: -1,
    });
    this.anims.create({
      key: `enemyLevel2-attack`,
      frames: this.anims.generateFrameNumbers(`enemyLevel2Attack`, {
        start: 0,
        end: 16,
      }),
      frameRate: 24,
      repeat: -1,
    });
  }
}
