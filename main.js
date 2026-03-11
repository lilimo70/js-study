const openButton = document.querySelector('.open');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close');


openButton.addEventListener('click',()=>{
  overlay.classList.remove('hidden');
});

closeButton.addEventListener('click',()=>{
  overlay.classList.add('hidden');
});

