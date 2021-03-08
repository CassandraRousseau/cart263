$(`.header`).on(`click`, function (event) {
  $(this).css(`color`, `red`);
  $(`.header`).off(`click`);
});
