/**************************************************
Exercise 05: Haiku Generator++
Cassandra Rousseau
It is a song generator webpage that displays a generated song where each line is chosen at random
from a set of possibilities. The user has to found the lyrics by clicking on the screen.
 Once found, a randomly selected line will fade in. All accompanied with a landscape background and instrumental music.
**************************************************/
//Lyrics of the song ON
let on = [
  `With each step then again grows the shadow`,
  `Is it the shadow that's shaking`,
  `Or is it my feet that are trembling`,
  `Gotta go insane to stay sane`,
  `Throw myself whole into both worlds`,
  `My air and my light in the dark`,
  `Choosing to descend into the dark abyss`,
  `Even if my knees drop to the ground`,
  `As long as they don't get buried`,
];
//Lyrics of the song Spring day
let springDay = [
  `It's all winter here, even in August`,
  `How much longing should we see snowing down`,
  `To have the days of spring, Friend`,
  `Like the tiny dust, tiny dust floating in the air`,
  `Snowflakes fall down`,
  `And get farther away little by little`,
  `And how many sleepless nights do I have to spend`,
  `Passing by the edge of the cold winter`,
  `I hate this moment, this time flowing by`,
  `Yes I hate you, you left me`,
  `Honestly I miss you, but I'll erase you`,
  `'Cause it hurts less than to blame you `,
  `I try to exhale you in pain `,
  `Like smoke, like white smoke `,
  `The morning will come again`,
  `No darkness, no season is eternal`,
  `Maybe it's cherry blossoms`,
  `And this winter will be over`,
  `Wait a little bit, just a few more nights`,
  `Until the days of spring`,
  `Until the days of flower blossoms`,
];
//Lyrics of the song Fake love
let fakeLove = [
  `For you, I could pretend like I was happy when I was sad`,
  `For you, I could pretend like I was strong when I was hurt`,
  `I wish love was perfect as love itself`,
  `I wish all my weaknesses could be hidden`,
  `I grew a flower that can't be bloomed in a dream that can't come true`,
  `But I don't know me, Who are you?`,
  `The forest just for us, you weren't there`,
  `The route I took, I forgot`,
  `I even became quite unsure of who I was`,
  `Try babbling in the mirror, who the hell are you?`,
  `Mold a pretty lie for you`,
  `Trying to erase myself and make me your doll`,
  `Why you sad? I don't know. I don't know`,
  `Smile, say 'I love you'`,
  `Look at me, even I gave up on myself`,
  `You say I'm unfamiliar, changed into the one you used to like`,
];
//Lyrics of the song Singularity
let singularity = [
  `A sound of something breaking`,
  `I awake from sleep`,
  `A sound full of unfamiliarity`,
  `Try to cover my ears but can't go to sleep`,
  `The pain in my throat gets worse`,
  `Try to cover it`,
  `I don't have a voice`,
  `Today I hear that sound again`,
  `It's ringing again, that sound`,
  `A crack again on this frozen lake`,
  `I dumped myself into the lake`,
  `I buried my voice for you`,
  `Over the winter lake I was thrown`,
  `A thick ice has formed`,
  `In the dream I shortly went into`,
  `My agonizing phantom pain is still the same`,
  `Have I lost myself`,
  `Or have I gained you`,
  `I suddenly run to the lake`,
  `There's my face in it`,
  `Reach my hand out to cover the mouth`,
  `But in the end, spring will come someday`,
  `The ice will melt and flow away`,
  `Tell me if my voice isn't real`,
  `If I shouldn't have thrown myself away`,
  `Tell me if even this pain isn't real`,
  `What I was supposed to do back then`,
];
//Lyrics of the song The Truth Untold
let theTruthUntold = [
  `Full of loneliness`,
  `This garden bloomed`,
  `Full of thorns`,
  `I bind myself in this sand castle`,
  `I saw you hiding in this garden`,
  `The blue flower your hand was picking`,
  `Light on me`,
  `There's no name you can call me`,
  `I can't show you a ruined part of myself`,
  `Once again I put a mask on and go to see you`,
  `Bloomed in a garden of loneliness`,
  `I have to hide`,
  `I am afraid`,
  `I am shattered`,
  `In the garden`,
  `In this world`,
  `Is to bloom a pretty flower that resembles you`,
  `And to breathe as the me that you know`,
  `If I had the courage to stand before you`,
  `I'm crying`,
  `That's disappeared`,
  `That's fallen`,
  `Left alone in this sandcastle`,
  `Looking at this broken mask`,
];
//Lyrics of the song Blue and Grey
let blueAndGrey = [
  `Where is my angel?`,
  `The end of a tiring day`,
  `Someone come and save me, please`,
  `Is overshadowed by a sigh`,
  `'Cause I am blue and grey`,
  `The tears reflected in the mirror mean`,
  `My colors hid in the smile, blue and grey`,
  `I really don't know what went wrong`,
  `I grew up with a blue question mark in my mind`,
  `Maybe that's why I've been fighting for my life`,
  `But looking behind, I'm standing here dazed`,
  `The powerful shadow mark is still blue`,
  `Is it anxiety or depression?`,
  `Am I just an animal that regrets`,
  `Or is it me born out of loneliness?`,
  `I still don't know, the ferocious blue`,
  `I hope I don't get eaten away, I'll find the exit`,
  `I just wanna be happier`,
  `Melt me, I'm cold`,
  `I've reached out my hand countless times`,
  `The echo is colorless`,
  `Oh, this ground feels so heavier`,
  `I am singing by myself`,
  `Am I being too greedy?`,
  `I still feel my heart`,
  `I walked on the cold winter streets`,
  `Please don't leave me alone, it hurts too much`,
  `The road I always walk and the light I always receive`,
  `But today seems like an unfamiliar scene`,
  `Have I become used to it or have I collapsed?`,
  `A grey rhine approaches`,
  `I just stand there without focus`,
  `I don't feel like myself at this moment`,
  `I don't believe in God called conviction`,
  `Words like 'color' embarass me`,
  `The wide grey zone is comfortable`,
  `With hundreds of millions of grey faces`,
  `When it rains, I dance`,
  `Over this city, my world`,
  `Raise a toast to`,
  `The fog on clear days`,
  `And all the dust always`,
  `Here with me on rainy days`,
  `Please feel the warmth in my hands`,
  `They're cold, that's why I need more of you`,
  `If I laugh in the future far away`,
  `I'll tell you that I did`,
  `After secretly taking back words floating in the air`,
  `I now fall asleep at dawn, good night`,
];
//Lyrics of the song Butterfly
let butterfly = [
  `Don't think of anything`,
  `Don't say anything, not even a word`,
  `Just give me a smile`,
  `All of this seems like a dream`,
  `Don't try to disappear`,
  `You're so beautiful, that I'm scared`,
  `Will you stay by my side`,
  `If I let go of your hand, you'll fly away and break`,
  `Will you stop time`,
  `If this moment passes`,
  `As though it hadn't happened`,
  `I'm scared scared scared I'll lose you`,
  `From afar, I steel glances; if we touch hands, will I lose you?`,
  `You shine in this pitch darkness that is the butterfly effect`,
  `Your light touches, I forget the reality at once`,
  `It's like a wind that gently strokes me`,
  `It's like a dust that gently drifts along`,
  `You're there but for some reason, I can't reach you, stop`,
  `You, who's like a dream is a butterfly high to me`,
  `The small pieces guttered down darkly`,
  `From my heart, a barren noise`,
  `I don't know if this is reality or a dream`,
  `My Kafka on the shore`,
  `Don't go to those woods over there`,
  `My heart is still shattering on you`,
  `I just wanted to vaporize like this`,
];

//Creating variables for the songs lyrics
let intro = random(singularity);
let verseSingularity = random(singularity);
let verseSpringDay = random(springDay);
let verseBlueAndGrey = random(blueAndGrey);
let preChorus = random(on);
let chorus = random(butterfly);
let bridgeFakeLove = random(fakeLove);
let bridgeTheTruthUntold = random(theTruthUntold);
let outro = random(blueAndGrey);

//Creating variables for the lyrics in their respective position in the HTML webpage
let introSingularity = document.getElementsByClassName(`lineSingularity`);
let verseLineSingularity = document.getElementsByClassName(`lineSingularity`);
let verseLineSpringDay = document.getElementsByClassName(`lineSpringDay`);
let verseLineBlueAndGrey = document.getElementsByClassName(`lineBlueAndGrey`);
let preChorusSong = document.getElementsByClassName(`lineOn`);
let chorusSong = document.getElementsByClassName(`lineButterfly`);
let bridgeLineFakeLove = document.getElementsByClassName(`lineFakeLove`);
let bridgeLineTheTruthUntold = document.getElementsByClassName(
  `lineTheTruthUntold`
);
let outroSong = document.getElementsByClassName(`lineBlueAndGrey`);

//Assigning lyrics to their respective position in the HTML webpage and adding a fading effect

//Setting the intro
for (var i = 0; i < introSingularity.length; i++) {
  introSingularity[i].innerText = intro;
  intro = random(singularity);
  introSingularity[i].addEventListener(`click`, lineClicked);
}

//Setting the chrous
for (var i = 0; i < verseLineSingularity.length; i++) {
  verseLineSingularity[i].innerText = verseSingularity;
  verseSingularity = random(singularity);
  verseLineSingularity[i].addEventListener(`click`, lineClicked);
}
for (var i = 0; i < verseLineSpringDay.length; i++) {
  verseLineSpringDay[i].innerText = verseSpringDay;
  verseSpringDay = random(springDay);
  verseLineSpringDay[i].addEventListener(`click`, lineClicked);
}
for (var i = 0; i < verseLineBlueAndGrey.length; i++) {
  verseLineBlueAndGrey[i].innerText = verseBlueAndGrey;
  verseBlueAndGrey = random(blueAndGrey);
  verseLineBlueAndGrey[i].addEventListener(`click`, lineClicked);
}

//Setting the prechorus
for (var i = 0; i < preChorusSong.length; i++) {
  preChorusSong[i].innerText = preChorus;
  preChorus = random(on);
  preChorusSong[i].addEventListener(`click`, lineClicked);
}

//Setting the chorus
for (var i = 0; i < chorusSong.length; i++) {
  chorusSong[i].innerText = chorus;
  chorus = random(butterfly);
  chorusSong[i].addEventListener(`click`, lineClicked);
}

//Setting the bridge
for (var i = 0; i < bridgeLineFakeLove.length; i++) {
  bridgeLineFakeLove[i].innerText = bridgeFakeLove;
  bridgeFakeLove = random(fakeLove);
  bridgeLineFakeLove[i].addEventListener(`click`, lineClicked);
}
for (var i = 0; i < bridgeLineTheTruthUntold.length; i++) {
  bridgeLineTheTruthUntold[i].innerText = bridgeTheTruthUntold;
  bridgeTheTruthUntold = random(theTruthUntold);
  bridgeLineTheTruthUntold[i].addEventListener(`click`, lineClicked);
}

//Setting the outro
for (var i = 0; i < outroSong.length; i++) {
  outroSong[i].innerText = outro;
  outro = random(blueAndGrey);
  outroSong[i].addEventListener(`click`, lineClicked);
}

//Calling randomly the lyrics
function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}

//Lyrics fade out once their line is clicked
function lineClicked(event) {
  fadeIn(event.target, 0);
}

//Setting the apparition of a new line
function fadeIn(element, opacity) {
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  console.log(opacity);
  if (opacity < 1) {
    requestAnimationFrame(function () {
      fadeIn(element, opacity);
    });
  }
}
