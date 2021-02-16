class Bakery extends State {
  //Setting bakery parameters
  constructor(
    chocolateCake,
    pie,
    crust,
    frosting,
    appleStrudel,
    crustStrudel,
    bun,
    cinnamonBun,
    pizza,
    pepperoni,
    doughnut,
    doughnutTexture
  ) {
    super(
      chocolateCake,
      pie,
      crust,
      frosting,
      appleStrudel,
      crustStrudel,
      bun,
      cinnamonBun,
      pizza,
      pepperoni,
      doughnut,
      doughnutTexture
    );
    this.background = new BakeryBackground(windows);
    this.floor = new FloorBakery();
    this.counters = [];
    this.texturePie = crust;
    this.textureCake = frosting;
    this.textureStrudel = crustStrudel;
    this.chocolateCake = chocolateCake;
    this.pie = pie;
    this.strudel = appleStrudel;
    this.bun = bun;
    this.pizza = pizza;
    this.doughnut = doughnut;
    this.textureBun = cinnamonBun;
    this.texturePizza = pepperoni;
    this.textureDoughnut = doughnutTexture;
    //Creating the right side rock
    for (let i = 0; i < numCounters; i++) {
      this.counterRight = new CounterRight();

      this.counters.push(this.counterRight);
    }
    //Creating the right side rock
    for (let i = 0; i < numCounters; i++) {
      this.counterLeft = new CounterLeft();

      this.counters.push(this.counterLeft);
    }
  }

  //Preloading images and obj files
  preload() {
    super.preload();
    // this.background.preload();
    this.chocolateCake.preload();
    this.texturePie.preload();
    this.textureCake.preload();
    this.textureBun.preload();
    this.textureDooughnut.preload();
    this.pie.preload();
    this.pizza.preload();
    this.strudel.preload();
    this.textureStrudel.preload();
    this.bun.preload();
    this.texturePizza.preload();
    this.doughnut.preload();
  }

  //Setting the location
  draw() {
    super.draw();
    background(255);
    angleMode(DEGREES);
    // Translate to the center (not really needed, but just for completeness)

    // Looks nicer
    noStroke();
    push();

    //Creating background
    this.background.display();

    //Creating floor
    this.floor.display();

    //Creating counters
    push();
    for (let i = 0; i < this.counters.length; i++) {
      let countersObject = this.counters[i];

      countersObject.display();
    }
    pop();

    //Creating pie
    push();
    translate(-width / 10, height / 50, 350);
    rotateX(100);
    rotateY(360);
    rotateZ(-50);
    scale(20, 20, 20);
    texture(this.texturePie);
    model(this.pie);
    pop();

    //Creating cake
    push();
    translate(width / 20, height / 30, 450);
    rotateX(175);
    rotateY(360);
    rotateZ(0);
    scale(1.25, 1.25, 1.25);
    texture(this.textureCake);
    model(this.chocolateCake);
    pop();

    //Creating strudel
    push();
    translate(width / 20, height / 50, 425);
    texture(this.textureStrudel);
    scale(50, 50, 50);
    model(this.strudel);
    pop();

    //Creating bun
    push();
    translate(-width / 15, height / 50, 425);
    texture(this.textureBun);
    model(this.bun);
    pop();

    //Creating pizza
    push();
    translate(width / 25, height / 100, 425);
    rotateX(175);
    rotateY(360);
    rotateZ(0);
    texture(this.texturePizza);
    scale(75, 75, 75);
    model(this.pizza);
    pop();

    //Creating doughnut
    push();
    translate(-width / 15, height / 30, 435);
    rotateX(175);
    rotateY(360);
    rotateZ(0);
    texture(this.textureDoughnut);
    scale(1, 1, 1);
    model(this.doughnut);
    pop();
  }
}
// new Bakery(
//   chocolateCake,
//   pie,
//   crust,
//   frosting,
//   appleStrudel,
//   crustStrudel,
//   bun,
//   cinnamonBun,
//   pizza,
//   pepperoni,
//   doughnut,
//   doughnutTexture
