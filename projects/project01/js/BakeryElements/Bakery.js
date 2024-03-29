class Bakery extends State {
  //Setting bakery parameters
  constructor({
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
    bakeryBackgroundData,
    ceilingBakery,
  }) {
    super({
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
      bakeryBackgroundData,
      ceilingBakery,
    });

    //Creating floor
    this.floor = new FloorBakery(wood);

    //Creating objects arrays
    this.counters = [];
    this.walls = [];

    //Creating pie texture
    this.texturePie = crust;

    //Creating cake texture
    this.textureCake = frosting;

    //Creating strudel texture
    this.textureStrudel = crustStrudel;

    //Creating bun texture
    this.textureBun = cinnamonBun;

    //Creating pizza texture
    this.texturePizza = pepperoni;

    //Creating doughnut texture
    this.textureDoughnut = doughnutTexture;

    //Creating vanilla cake obj file
    this.vanillaCake = vanillaCake;

    //Creating pie obj file
    this.pie = pie;

    //Creating strudel obj file
    this.strudel = appleStrudel;

    //Creating ceiling
    this.ceiling = ceilingBakery;

    //Creating bun obj file
    this.bun = bun;

    //Creating pizza obj file
    this.pizza = pizza;

    //Creating doughnut obj file
    this.doughnut = doughnut;

    //Creating counters
    for (let i = 0; i < countersData.counters.length; i++) {
      let data = countersData.counters[i];
      this.counter = new Counters(data.x, wood);
      this.counters.push(this.counter);
    }

    //Creating background
    for (let i = 0; i < bakeryBackgroundData.walls.length; i++) {
      let backgroundData = bakeryBackgroundData.walls[i];
      this.wall = new BakeryBackground(
        backgroundData.x,
        backgroundData.z,
        backgroundData.w,
        backgroundData.rotateY,
        bakeryShop
      );
      this.walls.push(this.wall);
    }
  }

  //Preloading images and obj files
  preload() {
    super.preload();
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
    for (let i = 0; i < this.walls.length; i++) {
      this.walls[i].display();
    }

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
    translate(-width / 7, height / 30, 900);
    rotateX(100);
    rotateY(360);
    rotateZ(-50);
    scale(20, 20, 20);
    texture(this.texturePie);
    model(this.pie);
    pop();

    //Creating cake
    push();
    translate(width / 8, height / 30, 970);
    rotateX(175);
    rotateY(360);
    rotateZ(0);
    scale(1.25, 1.25, 1.25);
    texture(this.textureCake);
    model(this.vanillaCake);
    pop();

    //Creating strudel
    push();
    translate(width / 10, height / 40, 950);
    texture(this.textureStrudel);
    scale(50, 50, 50);
    model(this.strudel);
    pop();

    //Creating bun
    push();
    translate(-width / 12, height / 41, 975);
    texture(this.textureBun);
    model(this.bun);
    pop();

    //Creating pizza
    push();
    translate(width / 9, height / 35, 960);
    rotateX(175);
    rotateY(360);
    rotateZ(0);
    texture(this.texturePizza);
    scale(75, 75, 75);
    model(this.pizza);
    pop();

    //Creating doughnut
    push();
    translate(-width / 7, height / 25, 810);
    rotateX(175);
    rotateY(360);
    rotateZ(0);
    texture(this.textureDoughnut);
    scale(1, 1, 1);
    model(this.doughnut);
    pop();
  }
}
