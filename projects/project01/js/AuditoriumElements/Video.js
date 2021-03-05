class Video {
  //Creating video parameters
  constructor(video) {
    this.translateX = -325;
    this.translateY = -375;
    this.translateZ = -300;
    this.texture = video;
    this.x = 0;
    this.y = 0;
    this.width = 700;
    this.height = 400;
  }
  //Preloading video
  preload() {
    this.texture.preload();
  }
  //Displaying video
  display() {
    push();
    noFill();
    translate(this.translateX, this.translateY, this.translateZ);
    texture(this.texture);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
