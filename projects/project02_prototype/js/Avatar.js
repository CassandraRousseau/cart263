class Avatar extends Phaser.GameObjects.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, `avatar`);
    config.scene.add.existing(this);
    this.setTexture(`avatar`);
    this.setPosition(x, y);

    this.play(`avatar-idle`);

    this.alive = true;

    this.hp = new HealthBar(scene, x, y - 110);
  }
  damage(amount) {
    if (this.hp.decrease(amount)) {
      this.alive = false;
    } else if (this.hp.increase(amount)) {
      this.alive = true;
    }
  }

  movements() {
    // Setting keyboard outputs
    this.cursors = this.input.keyboard.createCursorKeys();
    // Setting keybord inputs on avatar
    if (this.cursors.left.isDown) {
      this.avatar.setVelocityX(-300);
    } else if (this.cursors.right.isDown) {
      this.avatar.setVelocityX(300);
    } else if (this.cursors.space.isDown) {
      this.avatar.setVelocityY(-200);
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
}
