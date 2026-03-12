const openButton = document.querySelector('.open');
const closeButton = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

openButton.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});
closeButton.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  overlay.classList.add('hidden');

});
modal.addEventListener('click', (e) => {
  e.stopPropagation();
});