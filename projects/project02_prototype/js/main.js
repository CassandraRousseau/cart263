/**************************************************
Template p5 project
Cassandra Rousseau
Here is a description of this template p5 project.
**************************************************/
"use strict";
let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: `arcade`,
  },
  scene: [Boot, Play],
};

let game = new Phaser.Game(config);
