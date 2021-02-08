class Buildings {
  constructor(windows) {
    this.translateX = translateWidth;
    this.translateY = translateHeight;
    this.translateZ = translateDepth;
    this.texture = windows;
    this.width = width;
    this.height = height;
    this.depth = depth;
  }
  preload() {
    this.texture.preload();
  }
  display() {}
}
// Translate to the center (not really needed, but just for completeness)

// Looks nicer

push();

// Our central cube is white
translate(-width / 3, 75, -500);

texture(windows);
box(300, windowHeight);
pop();

push();

// Our central cube is white
translate(-width / 4, 75, -500);

texture(windows);
box(100, 700);
pop();

push();

// Our central cube is white
translate(-width, 0, -600);

texture(windows);
box(300, height, 800);
pop();

push();

// Our central cube is white
translate(width / 4, 75, -500);

texture(windows);
box(200, 700);
pop();
push();

// Our central cube is white
translate((3 * width) / 5, 0, -400);

texture(windows);
box(500, 700, 800);
pop();
