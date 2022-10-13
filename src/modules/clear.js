export default function clearTasks() {
  const toDos = JSON.parse(localStorage.getItem('todos'));
  const filter = toDos.filter((todos) => todos.completed === false);
  localStorage.setItem('todos', JSON.stringify(filter));
}

module.exports = clearTasks;