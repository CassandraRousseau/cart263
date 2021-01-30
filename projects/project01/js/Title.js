function draw() {
  background(225, 175, 255);

  // Translate to the center (not really needed, but just for completeness)

  // Looks nicer
  noStroke();
  push();
  // Our central cube is white
  translate(-width / 2, 75, -150);
  fill(150, 155, 255);
  texture(grassPurple);
  ellipsoid(300, 230);
  pop();
  push();
  // Our central cube is white
  translate(width / 35, 100, -550);
  fill(115, 175, 255);
  texture(grassPink);
  ellipsoid(600, 230);
  pop();
  push();
  // Our central cube is white
  translate(width / 2, 75, -150);
  fill(150, 175, 255);
  push();
  texture(grassPurple);
  ellipsoid(300, 230);
  pop();
  pop();
  push();
  // A red bar passing through the box
  translate(0, 250, 0);
  fill(100, 185, 225);
  texture(grassBlue);
  box(windowWidth, 175, 300);
  pop();
}
