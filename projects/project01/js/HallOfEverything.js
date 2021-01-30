function draw() {
  background(225, 175, 255);
  directionalLight(220, width / 2, 90, -10000);
  // Translate to the center (not really needed, but just for completeness)

  // Looks nicer
  noStroke();
  push();
  specularMaterial(100, 100);
  // Our central cube is white
  translate(-width / 5, 75, -500);
  fill(245, 255, 175);
  box(300, windowHeight);
  pop();

  push();
  specularMaterial(100, 100);
  // Our central cube is white
  translate(-width / 7, 75, -500);
  fill(245, 255, 175);
  box(100, 700);
  pop();

  push();
  specularMaterial(150, 150);
  // Our central cube is white
  translate(-width / 150, 100, -600);
  fill(245, 255, 175);
  box(300, 900);
  pop();

  push();
  specularMaterial(100, 100);
  // Our central cube is white
  translate(width / 7, 75, -500);
  fill(245, 255, 175);
  box(100, 700);
  pop();
  push();
  specularMaterial(100, 100);
  // Our central cube is white
  translate(width / 5, 75, -500);
  fill(245, 255, 175);
  box(300, windowHeight);
  pop();

  push();
  // A red bar passing through the box
  translate(0, 250, 0);
  fill(100, 185, 225);
  texture(grassBlue);
  box(windowWidth, 175, 300);
  pop();
}
