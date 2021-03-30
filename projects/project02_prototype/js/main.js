/**************************************************
Project 02(prototype):Anything
Cassandra Rousseau

This is a platform game where player's avatar needs to fight the enemies, collect the flowers to
regenerate and find the baby cloud in order to finish the level.
Players move the character through keyboard.The arrows to move left and right and the spacebar
to float in the air.
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
      debug: true,
    },
  },
  scene: [Boot, Play],
};

//Setting game engine
let game = new Phaser.Game(config);
