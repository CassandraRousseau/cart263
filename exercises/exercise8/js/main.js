/**************************************************
Exercise 08: Desesperately Seeking Sadness++
Cassandra Rousseau

The goal of the game is the lion catching its prey, a zebra.
This will be in the form of a spaceship in a kind of asteroid field! Obvi!
The user will fly around as a lion emoji, seeking out the single zebra in
the jungle, surrounded by tigers. When they find it, another one will appear somewhere else
and the saga continues.
**************************************************/
"use strict";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  physics: {
    default: `arcade`,
  },
  scene: [Boot, Play],
};
let game = new Phaser.Game(config);
