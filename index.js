window.addEventListener('DOMContentLoaded', function () {
  const boutons = this.document.getElementsByClassName('selectRate');

  //   console.log(boutons);

  for (let bouton of boutons) {
    bouton.addEventListener('click', function () {
      for (let element of boutons) {
        element.classList.remove('selected');
      }

      bouton.classList.add('selected');
      const score = parseFloat(bouton.innerHTML);
      console.log(score);
    });
  }
});
