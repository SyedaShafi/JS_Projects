const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const clickBtn = document.getElementById('btn');
const colorName = document.getElementById('color');

clickBtn.addEventListener('click', bgColor);

function bgColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];
  document.body.style.backgroundColor = color;
  colorName.textContent = color;
}
