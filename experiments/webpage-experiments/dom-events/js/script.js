let mainHeading = document.getElementById(`paragraph`);

window.addEventListener(`offline`, function (event) {
  mainHeading.innerText = `:(`;
});
