/**************************************************
Activity 05: Raving Redactionist
Cassandra Rousseau

This is a webpage of text with some passages. If the user moves his mouse over
certain letters, it will reveal a secret code. The user has to enter the secret
password to reveal the secret item.
**************************************************/
"use strict";

//Hide the secret video
$(`#video`).hide();

//Create the mouse over effect
$(`.top-secret`).mouseover(`mouseover`, function (event) {
  // Reveal the secret message
  $(this).addClass(`revealed`);
});

// Reveal the secret message after a certain time
setInterval(revelation, 500);

//Reveals the secret element
$(`#button`).on(`click`, function (event) {
  let input = $(`#text-input`).val();
  if (input === `cheesecake`) {
    $(`#secret-document`).hide();
    $(`#button`).hide();
    $(`#text-input`).hide();
    $(`#video`).show();
  }
});
// Reference: Emojoie, “The Best New York Cheesecake Recipe|Emojoie Cuisine,” YouTube, 2017, video, 6:16, https://www.youtube.com/watch?v=tspdJ6hxqnc&t=10s&ab_channel=Emojoie%E3%81%88%E3%82%82%E3%81%98%E3%82%87%E3%82%8F.
