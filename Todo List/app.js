// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
window.addEventListener('DOMContentLoaded', previousItems);
// functions

function addTodo(event) {
  event.preventDefault();
  // const todoDiv = document.createElement('div');
  // todoDiv.classList.add('todo');
  // todoDiv.innerHTML = `<li class="todo-item">${todoInput.value}</li>
  //         <button class= "complete-btn">
  //         <i class="fas fa-check"></i>
  //         </button >
  //         <button class= "trash-btn">
  //         <i class="fas fa-trash"></i>
  //         </button>`;
  // todoList.appendChild(todoDiv);
  generateItem(todoInput.value);
  saveLocalTodos(todoInput.value);
  todoInput.value = '';
  //   console.log(todoInput.currentTarget.value);
}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    // add animation
    todo.classList.add('fall');
    removeFromLocalStorage(todo);
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }

  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
    console.log(todo.classList);
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(e.target.value);

  todos.forEach(function (todo) {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'uncompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  let todos = getItems();
  // console.log(todos);
  // if (localStorage.getItem('todos') === null) {
  //   todos = [];
  // } else {
  //   todos = JSON.parse(localStorage.getItem('todos'));
  // }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getItems() {
  if (localStorage.getItem('todos') === null) {
    return (todos = []);
  } else {
    return (todos = JSON.parse(localStorage.getItem('todos')));
  }
}

function generateItem(value) {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  todoDiv.innerHTML = `<li class="todo-item">${value}</li>
          <button class= "complete-btn">
          <i class="fas fa-check"></i>
          </button >
          <button class= "trash-btn">
          <i class="fas fa-trash"></i>
          </button>`;
  todoList.appendChild(todoDiv);
}

function previousItems() {
  let items = getItems();
  if (items) {
    items.forEach(function (item) {
      generateItem(item);
    });
  }
}

function removeFromLocalStorage(todo) {
  let todos = getItems();
  console.log(todos);
  const index = todo.children[0].innerText;
  console.log(todos.indexOf(index));
  todos.splice(todos.indexOf(index), 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}
