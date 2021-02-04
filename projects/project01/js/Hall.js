function draw() {
  background(255);

  // Translate to the center (not really needed, but just for completeness)

  // Looks nicer
  noStroke();
  push();
  // A red bar passing through the box
  translate(0, 250, 0);
  fill(100, 185, 225);
  texture(floor);
  box(windowWidth, 100, 3000);
  pop();
  push();

  // Our central cube is white
  translate(-width / 3, 75, -500);
  fill(150);
  texture(windows);
  box(300, windowHeight);
  pop();

  push();

  // Our central cube is white
  translate(-width / 4, 75, -500);
  fill(150);
  texture(windows);
  box(100, 700);
  pop();

  push();

  // Our central cube is white
  translate(-width, 0, -600);
  fill(150);
  texture(windows);
  box(300, height, 800);
  pop();

  push();

  // Our central cube is white
  translate(width / 4, 75, -500);
  fill(150);
  texture(windows);
  box(200, 700);
  pop();
  push();

  // Our central cube is white
  translate((3 * width) / 5, 0, -400);
  fill(150);
  texture(windows);
  box(500, 700, 800);
  pop();
}
