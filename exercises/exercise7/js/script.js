/**************************************************
Exercise 07: Code Taker
Cassandra Rousseau

The user reads a poem and tries to fill the blanks with the words at the bottom of the poem.
If they drag the words in the correct order into a special solution area,
they completed the poem!
**************************************************/
"use strict";

// The dialog box opening once you complete the poem
$(`#solved-dialog`).dialog({
  autoOpen: false,
  // Response button
  buttons: {
    "I know.": function () {
      $(this).dialog(`close`);
    },
  },
});

// The draggable filling words
$(`.secret`).one(`mouseover`, function (event) {
  $(this).draggable({ helper: `clone` });
});

// The areas that are need to be filled with words
$(`.answer`).droppable({
  drop: function (event, ui) {
    let word = ui.draggable.text();

    // Put the word in the blank space if it's correct
    if (word === $(this).attr("correct")) {
      $(this).text(word);
      $(this).removeClass("answer");
      ui.draggable.draggable(`disable`);

      // Colors the word in the words box area if correctly placed
      ui.draggable.addClass(`found`, 500);
    }

    // Open dialog box if text filled completely and correctly
    if ($(".answer").length === 0) {
      $(`#solved-dialog`).dialog(`open`);
    }
  },
});
