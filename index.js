const planets = document.querySelectorAll(".planet_article");

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

planets.forEach(planet => planet.addEventListener('click', toggleOpen));
planets.forEach(planet => planet.addEventListener('transitionend', toggleActive));