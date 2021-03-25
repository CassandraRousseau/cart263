/**************************************************
Activity 08: Desesperately Seeking Sadness
Cassandra Rousseau

We will create metaphor for how we seek out or are drawn to negative emotions.
This will be in the form of a spaceship in a kind of asteroid field! Obvi!
The user will fly around as an emoji, seeking out the single “thumbs down” in
a sea of “thumbs ups”. When they find it, another one will appear somewhere else
and the sad saga continues.
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
