window.addEventListener('DOMContentLoaded', function () {
  const ratingButtons = this.document.getElementsByClassName('selectRate');
  const submitButton = this.document.getElementById('submit');
  const startWindow = this.document.getElementById('startRating');
  const endWindow = this.document.getElementById('endRating');
  const resultWindow = this.document.getElementById('resultWindow');

  let score = 0;

  for (let button of ratingButtons) {
    button.addEventListener('click', function () {
      for (let element of ratingButtons) {
        element.classList.remove('selected');
      }

      button.classList.add('selected');

      score = parseFloat(button.innerHTML);
    });
  }

  submitButton.addEventListener('click', function () {
    if (score != 0) {
      startWindow.classList.remove('shown');
      startWindow.classList.add('hidden');

      endWindow.classList.remove('hidden');
      endWindow.classList.add('shown');

      resultWindow.innerHTML = `You selected ${score} out of 5`;
      resultWindow.classList.add('result');
    }
  });
});
