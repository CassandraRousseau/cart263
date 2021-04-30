/**************************************************
Project 02:Anything
Cassandra Rousseau

Flufluf is a platform game where player's avatar needs to fight the enemies, collect the flowers to
regenerate and find the baby cloud in order to finish the level.
Players move the character through keyboard.The left and right arrows move the avatar. The player can activate the ability
of the character to fly by blowing air through their microphone, and the character floats in the air.
**************************************************/
"use strict";
let currentInputVolume;
// Setting setup of game
let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: `arcade`,
    arcade: {
      gravity: { y: 2000 },
      debug: false,
    },
  },
  scene: [Boot, Intro, Level1, Level2, Level3, Ending],
};
//Setting game engine
let game = new Phaser.Game(config);
