/**************************************************
Template p5 project
Cassandra Rousseau
Here is a description of this template p5 project.
**************************************************/
"use strict";

// Setting setup of game
let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: `arcade`,
    arcade: {
      gravity: { y: 330 },
      debug: false,
    },
  },
  scene: [Boot, Play],
};

//Setting game engine
let game = new Phaser.Game(config);
