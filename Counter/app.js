var count = 0;
let value = document.querySelector('#value');
let btns = document.querySelectorAll('.btn');

btns.forEach(function (e) {
  e.addEventListener('click', function (event) {
    let className = event.currentTarget.classList[1];
    if (className === 'increase') {
      count++;
    } else if (className === 'decrease') {
      count--;
    } else if (className === 'reset') {
      count = 0;
    }

    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else if (count === 0) {
      value.style.color = 'black';
    }

    value.textContent = count;
  });
});
