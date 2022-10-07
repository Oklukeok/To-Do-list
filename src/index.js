import DisplayTodos, { todos } from './modules/toDo.js';

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
