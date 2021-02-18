class Bubble {
  //Added bubble parameters
  constructor(bubbleImage) {
    this.x = random(0, width);
    this.y = height;
    this.w = 100;
    this.h = 100;
    this.image = bubbleImage;
    this.vx = random(-5, 5);
    this.vy = random(-3, -5);
    this.active = true;
  }

  //Added bubble movements
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  //Added how the bubble come back in the canvas/screen
  resetBubble() {
    if (this.y < 0) {
      this.x = random(0, width);
      this.y = height;
    } else if (this.x > width) {
      this.vx = -5;
    } else if (this.x < 0) {
      this.vx = 5;
    }
  }

  //Added how to reset the bubble
  resetGame() {
    if (!this.active) {
      this.x = random(width);
      this.y = height;
    }
  }
  delete(frameCount, framecountSim, gamelength) {
    if (frameCount >= framecountSim + gamelength) {
      this.active = false;
    }
  }
  //Creating how to pop bubbles in the simulation
  poppingBubble(tipX, tipY) {
    //Pops the bubble once the pin and the bubble overlaps
    let d = dist(tipX, tipY, this.x, this.y);
    if (d < this.w / 2 && d < this.h / 2) {
      this.active = false;
    }
  }
  //Setting how the bubble is displayed
  display() {
    push();

    noStroke();
    image(this.image, this.x, this.y, this.w, this.h);

    pop();
  }
}
