function draw() {
  background(255);

  // Translate to the center (not really needed, but just for completeness)

  // Looks nicer
  noStroke();

  push();

  // Our central cube is white
  translate(0, -115, -600);
  fill(150);
  texture(windows);
  box(2000, height, 800);
  pop();
  push();
  // A red bar passing through the box
  translate(0, 250, 0);
  fill(100, 185, 225);
  box(windowWidth, 100, 600);
  pop();
  push();

  // Our central cube is white
  translate(-width / 4, 75, 200);
  fill(255, 255, 150);
  box(250, 100, 400);
  pop();

  push();

  // Our central cube is white
  translate(width / 4, 75, 200);
  fill(255, 255, 150);

  box(250, 100, 400);
  pop();
  push();
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  translate(100, 100, 100);
  model(cake);
  model(pizza);
  pop();
}
