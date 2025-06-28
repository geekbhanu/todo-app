const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let tasks = [];

addTaskButton.addEventListener('click', ()=>{
  const taskText = todoInput.value.trim()
  if (taskText === "") return;
  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false    
  }
  tasks.push(newTask);
  todoInput.value = ""; //clear input field
  console.log(tasks);
})