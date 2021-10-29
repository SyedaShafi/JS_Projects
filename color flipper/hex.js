const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const clickBtn = document.getElementById('btn');
const colorsName = document.getElementById('color');

clickBtn.addEventListener('click', randomColor);

// function randomColor() {
//   var genColor = ['#'];
//   for (let i = 0; i < 6; i++) {
//     let randIndex = Math.floor(Math.random() * hex.length);
//     genColor += hex[randIndex];
//   }

//   document.body.style.backgroundColor = genColor;
//   colorsName.textContent = genColor;
// }

function randomColor() {
  let getColor = ['#'];
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hex.length);
    getColor += hex[randomIndex];
  }

  document.body.style.backgroundColor = getColor;
  colorsName.textContent = getColor;
}
