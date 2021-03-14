/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
$(`#escape-tunnel`).hide();
$(`#introduction-dialog`).dialog({
  model: true,
  resizable: false,
  buttons: {
    imagination: function () {
      $(this).dialog(`close`);
      $(`#prisoner`).draggable(`option`, `containment`, `none`);
    },
    "Escape tunnel": function () {
      $(`#escape-tunnel`).show({
        effect: `blind`,
      });
      $(this).dialog(`close`);
    },
  },
});
$(`#prisoner`).effect({
  effect: `shake`,
  duration: 2000,
  times: 15,
  distance: 7,
  complete: makePrisonerDraggable,
});

$(`#escape-tunnel`).droppable({
  drop: function (event, ui) {
    ui.draggable.remove();
    $(this).hide({
      effect: `blind`,
      duration: 500,
    });
  },
});
function makePrisonerDraggable() {
  $(`#prisoner`).draggable({
    containment: `#prison`,
    start: function (event, ui) {
      $(this).addClass(`prisoner-dragging`, 750);
    },
    stop: function () {
      $(this).removeClass(`prisoner-dragging`, 750);
    },
  });
}
