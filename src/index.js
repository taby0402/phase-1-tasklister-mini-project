const createTaskForm = document.getElementById("create-task-form");
createTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const newTaskInput = document.getElementById("new-task-description");
  const newTask = newTaskInput.value;
  
  const listItem = document.createElement("li");
  listItem.textContent = newTask;
  
  const list = document.getElementById('list');
  list.appendChild(listItem);
  
  console.log(newTask);
  