//using selectors inside the element

const plusBtn = document.querySelectorAll('.question-btn');
const mainDiv = document.querySelectorAll('.question');
plusBtn.forEach(function (item, index) {
  item.addEventListener('click', function () {
    console.log(index);
    for (let j = 0; j < mainDiv.length; j++) {
      if (index != j) {
        mainDiv[j].classList.remove('show-text');
      }
    }
    mainDiv[index].classList.toggle('show-text');
  });
});
// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const question = e.currentTarget.pareentElement.pareentElement;
//     question.classList.toggle('show-text');
//   });
// });
