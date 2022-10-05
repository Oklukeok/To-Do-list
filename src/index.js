import './style.css';

const container = document.querySelector('.placeHolder');

const toDoArray = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Complete To Do list project',
    completed: false,
    index: 2,
  },
  {
    description: 'Read the newspapper',
    completed: false,
    index: 3,
  },
];

toDoArray.forEach((item) => {
  const task = document.createElement('div');
  task.classList.add('taskToDo');
  container.appendChild(task);

  const checkTask = document.createElement('input');
  checkTask.setAttribute('type', 'checkbox');
  task.appendChild(checkTask);

  const taskName = document.createElement('p');
  taskName.innerText = item.description;
  task.appendChild(taskName);

  const taskPick = document.createElement('p');
  taskPick.innerText = '⁞';
  task.appendChild(taskPick);
});

const taskClear = document.createElement('button');
taskClear.innerText = 'Clear all completed';
container.appendChild(taskClear);