class Bakery extends State {
  //Setting bakery parameters
  constructor(
    vanillaCake,
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
    doughnutTexture,
    bakeryShop,
    wood,
    countersData,
    ceilingBakery
  ) {
    super(
      vanillaCake,
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
      doughnutTexture,
      bakeryShop,
      wood,
      countersData,
      ceilingBakery
    );
    this.background = bakeryShop;
    this.floor = new FloorBakery(wood);
    this.counters = [];
    this.texturePie = crust;
    this.textureCake = frosting;
    this.textureStrudel = crustStrudel;
    this.vanillaCake = vanillaCake;
    this.pie = pie;
    this.strudel = appleStrudel;
    this.ceiling = ceilingBakery;
    this.bun = bun;
    this.pizza = pizza;
    this.doughnut = doughnut;
    this.textureBun = cinnamonBun;
    this.texturePizza = pepperoni;
    this.textureDoughnut = doughnutTexture;
    for (let i = 0; i < countersData.counters.length; i++) {
      let data = countersData.counters[i];
      this.counter = new Counters(data.x, wood);
      this.counters.push(this.counter);
    }
  }

  //Preloading images and obj files
  preload() {
    super.preload();
    this.background.preload();
    this.vanillaCake.preload();
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
    this.floor.preload();
  }

  //Setting the location
  draw() {
    super.draw();
    background(255);
    angleMode(DEGREES);
    noStroke();
    push();

    //Displaying the background
    push();
    texture(this.background);
    translate(2 * width, -height / 3, -2000);
    rotateY(-90);
    plane(5 * width, 2 * height);
    pop();
    push();

    texture(this.background);
    translate(-2 * width, -height / 3, -2000);
    rotateY(90);
    plane(5 * width, 2 * height);
    pop();
    push();

    texture(this.background);
    translate(0, -height / 3, -2500);
    plane(4 * width, 2 * height);
    pop();

    //Creating the ceiling
    push();
    texture(this.ceiling);
    translate(0, -height, -1000);
    rotateX(90);
    plane(4 * width, 2 * height);
    pop();
    //Creating floor
    this.floor.display();

    //Creating counters
    for (let i = 0; i < this.counters.length; i++) {
      this.counters[i].display();
    }
    //Creating pie
    push();
    translate(-width / 7, height / 30, 510);
    rotateX(100);
    rotateY(360);
    rotateZ(-50);
    scale(20, 20, 20);
    texture(this.texturePie);
    model(this.pie);
    pop();

    //Creating cake
    push();
    translate(width / 8, height / 30, 630);
    rotateX(175);
    rotateY(360);
    rotateZ(0);
    scale(1.25, 1.25, 1.25);
    texture(this.textureCake);
    model(this.vanillaCake);
    pop();

    //Creating strudel
    push();
    translate(width / 10, height / 50, 650);
    texture(this.textureStrudel);
    scale(50, 50, 50);
    model(this.strudel);
    pop();

    //Creating bun
    push();
    translate(-width / 12, height / 49, 660);
    texture(this.textureBun);
    model(this.bun);
    pop();

    //Creating pizza
    push();
    translate(width / 9, height / 45, 620);
    rotateX(175);
    rotateY(360);
    rotateZ(0);
    texture(this.texturePizza);
    scale(75, 75, 75);
    model(this.pizza);
    pop();

    //Creating doughnut
    push();
    translate(-width / 7, height / 30, 600);
    rotateX(175);
    rotateY(360);
    rotateZ(0);
    texture(this.textureDoughnut);
    scale(1, 1, 1);
    model(this.doughnut);
    pop();
  }
}
