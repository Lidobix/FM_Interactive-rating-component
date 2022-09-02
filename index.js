window.addEventListener('DOMContentLoaded', function () {
  const cardContent = this.document.getElementById('cardContent');
  const startWindow = this.document.getElementById('startRating');
  const endWindow = this.document.getElementById('endRating');
  const ratingButtons = this.document.getElementsByClassName('selectRate');
  const submitButton = this.document.getElementById('submit');
  const resultWindow = this.document.getElementById('resultWindow');

  let score = 0;

  cardContent.removeChild(endWindow);

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
      cardContent.removeChild(startWindow);
      cardContent.appendChild(endWindow);
      resultWindow.innerHTML = `You selected ${score} out of 5`;
      resultWindow.classList.add('result');
    }
  });
});
