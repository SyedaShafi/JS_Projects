// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openModalBtn = document.querySelector('.modal-btn');
const overlayBtn = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', function () {
  overlayBtn.classList.add('open-modal');
});

closeBtn.addEventListener('click', function () {
  overlayBtn.classList.remove('open-modal');
});
