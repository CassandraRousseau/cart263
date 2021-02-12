class Typewriter {
  // Sets the basic properties
  constructor() {
    // The full text this typewriter is currently typing out (empty to start)
    this.fullText = ``;
    // The current portion of the full text to actually display (empty to start)
    this.displayText = ``;
    // The index of the next character to add to the displayed text
    this.nextChar = 0;
    // How often to add a character (milliseconds)
    this.speed = 50;
    // The interval used to display the characters so we can cancel it
    this.interval = undefined;
    // The position to display the text at
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height / 2;
  }

  //  Displays the message at the specified position using a typewriter effect
  typewrite(message, x, y) {
    // reset the typewriter at the beginning for safety
    this.reset();

    // Sets the text
    this.fullText = message;

    // Set the position
    this.x = x;
    this.y = y;

    // Start  interval to call addNextCharacter repeatedly at the typewriter
    // speed to add characters to the displayed text over time
    this.interval = setInterval(this.addNextCharacter.bind(this), this.speed);
  }

  // Adds the next character to displayed text if possible
  addNextCharacter() {
    //  check if the end of the full text is reached
    if (this.nextChar >= this.fullText.length) {
      return;
    }
    // Add the next character of the full text to the displayed next

    //  charAt() allows to get the character at a specified
    // position in a string
    this.displayText += this.fullText.charAt(this.nextChar);
    // Increase the next character by one for next time
    this.nextChar = this.nextChar + 1;
  }

  // Display the current display text at the correct location
  display() {
    //Added text
    push();
    textFont(`Courier, monospace`);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.displayText, this.x, this.y, this.width, this.height);
    pop();
  }

  // Empty the texts and reset the counters and cancel the interval
  reset() {
    this.fullText = ``;
    this.displayText = ``;
    this.nextChar = 0;
    clearInterval(this.interval);
  }
}
