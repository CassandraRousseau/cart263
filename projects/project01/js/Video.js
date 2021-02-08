class Video {
  constructor(video) {
    this.translateX = -275;
    this.translateY = -400;
    this.translateZ = -300;
    this.texture = video;
    this.x = 0;
    this.y = 0;
    this.width = 600;
    this.height = 400;
  }
  display() {
    push();
    noFill();
    translate(this.translateX, this.translateY, this.translateZ);
    texture(this.texture);
    rect(this.x, this.y, this.width, this.height);

    pop();
  }
}
