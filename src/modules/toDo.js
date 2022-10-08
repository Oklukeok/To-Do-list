export let todos = JSON.parse(localStorage.getItem('todos')) || [];

export default function DisplayTodos() {
  const todoList = document.querySelector('#todo-list');
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const content = document.createElement('div');
    const actions = document.createElement('div');
    const edit = document.createElement('button');
    const deleteButton = document.createElement('button');

    input.type = 'checkbox';
    input.checked = todo.completed;
    span.classList.add('bubble');

    content.classList.add('todo-content');
    actions.classList.add('actions');
    edit.classList.add('edit');
    deleteButton.classList.add('delete');

    content.innerHTML = `<input type="text" value="${todo.description}" readonly>`;
    edit.innerHTML = 'Edit';
    deleteButton.innerHTML = 'Delete';
    deleteButton.setAttribute('id', 'delete');

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);

    if (todo.completed) {
      todoItem.classList.add('completed');
      content.innerHTML = `<input type="text" style="text-Decoration:line-through" value="${todo.description}" readonly>`;
    }

    input.addEventListener('change', (e) => {
      todo.completed = e.target.checked;
      localStorage.setItem('todos', JSON.stringify(todos));
      input.classList.add('completed');
      if (todo.completed) {
        todoItem.classList.add('completed');
        
        
      } else {
        todoItem.classList.remove('completed');
      }

      DisplayTodos();
    });

    edit.addEventListener('click', (e) => {
      const input = content.querySelector('input');
      input.removeAttribute('readonly');
      input.focus();
      input.addEventListener('blur', (e) => {
        input.setAttribute('readonly', true);
        todo.description = e.target.value;
        localStorage.setItem('todos', JSON.stringify(todos));
        DisplayTodos();
      });
    });

    deleteButton.addEventListener('click', (e) => {
      todos = todos.filter((t) => t != todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      DisplayTodos();

      for (let i = 0; i < JSON.parse(localStorage.getItem('todos')).length; i++) {
        todos[i].id = i + 1;
        localStorage.setItem('todos', JSON.stringify(todos));
      }
    });



    





  });
}