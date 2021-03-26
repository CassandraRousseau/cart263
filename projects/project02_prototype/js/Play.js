class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`,
    });
  }
  create() {
    this.add.image(0, 0, `background`).setOrigin(0, 0);
    this.platforms = this.physics.add.group({
      key: `ground`,
      immovable: true,
      quantity: 4,
    });
    this.platforms.children.each(function (platform) {
      let x = Math.random() * this.sys.canvas.width;
      let y = Math.random() * this.sys.canvas.height;
      platform.setPosition(x, y);
    }, this);

    this.enemies = this.physics.add.group({
      key: `enemy`,
      quantity: 4,
    });
    this.enemies.children.each(function (enemy) {
      let x = Math.random() * this.sys.canvas.width;
      let y = Math.random() * this.sys.canvas.height;
      enemy.setPosition(x, y);
    }, this);

    this.flowers = this.physics.add.group({
      key: `flower`,
      immovable: true,
      quantity: 10,
    });
    this.flowers.children.each(function (flower) {
      let x = Math.random() * this.sys.canvas.width;
      let y = Math.random() * this.sys.canvas.height;
      flower.setPosition(x, y);
    }, this);
    // this.platforms.create(400, 568, "ground").setScale(2).refreshBody();

    // this.platforms.create(600, 400, "ground");
    // this.platforms.create(50, 250, "ground");
    // this.platforms.create(750, 220, "ground");

    //
    //
    //     stars = this.physics.add.group({
    //     key: 'star',
    //     repeat: 11,
    //     setXY: { x: 12, y: 0, stepX: 70 }
    // });
    //
    // stars.children.iterate(function (child) {
    //
    //     child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    //
    // });
    this.avatar = this.physics.add.sprite(200, 200, `avatar`);
    this.enemies = this.physics.add.sprite(200, 200, `enemy`);
    this.createAnimations();
    // this.avatar.body.setGravityY(100);
    this.avatar.setVelocityX(100);
    this.avatar.play(`avatar-moving`);

    this.enemies.setVelocityX(100);
    this.enemies.play(`enemy-moving`);
    this.avatar.setCollideWorldBounds(true);
    this.enemies.setCollideWorldBounds(true);

    this.physics.add.collider(this.avatar, this.platforms);
    this.physics.add.overlap(
      this.avatar,
      this.flowers,
      this.collectItem,
      null,
      this
    );

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  collectItem(avatar, flower) {
    flower.destroy();
  }
  update() {
    this.avatar.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.avatar.setVelocityX(-300);
    } else if (this.cursors.right.isDown) {
      this.avatar.setVelocityX(300);
    }
    if (this.cursors.up.isDown) {
      this.avatar.setVelocityY(-300);
    } else if (this.cursors.down.isDown) {
      this.avatar.setVelocityY(300);
    }

    if (
      this.avatar.body.velocity.x !== 0 ||
      this.avatar.body.velocity.y !== 0
    ) {
      this.avatar.play(`avatar-moving`, true);
    } else {
      this.avatar.play(`avatar-idle`, true);
    }
  }

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
