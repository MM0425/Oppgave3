const planetImages = document.querySelectorAll(".planet_img img");

function toggleOpen(e) {
  e.stopPropagation(); 
  this.closest('.planet_article').classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

planetImages.forEach(img => img.addEventListener('click', toggleOpen));
document.querySelectorAll('.planet_article').forEach(planet => 
  planet.addEventListener('transitionend', toggleActive)
);