import './style.css';

import DisplayTodos, { todos } from './modules/toDo.js';
import clear from './modules/clear.js';

window.addEventListener('load', () => {
  const newTodoForm = document.querySelector('#new-todo-form');

  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = {
      description: e.target.elements.content.value,
      completed: false,
      id: todos.length + 1,
    };

    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

    // Reset the form
    e.target.reset();

    DisplayTodos();
  });

  DisplayTodos();
});

const clearBtn = document.querySelector('#ClearAllButton');

clearBtn.addEventListener('click', () => {
  clear();
  location.reload(); // eslint-disable-line
});