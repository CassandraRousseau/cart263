/**************************************************
Activity 05: Raving Redactionist
Cassandra Rousseau

We will create a webpage of text with some passages “redacted” (covered in black bars).
Over time the redactions will disappear, revealing the shocking secret text beneath them.
The user is in charge of keeping the information secret, so they click the secret text to restore the redaction
**************************************************/
"use strict";

$(`.top-secret`).on(`click`, redact);
setInterval(revelation, 500);

function redact(event) {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
}

function revelation() {
  $(`.redacted`).each(attemptReveal);
}
function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}
