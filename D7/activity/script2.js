const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const clearAllButton = document.getElementById("clearAll");

document.addEventListener("DOMContentLoaded", loadTasks);

// Add a new task
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask({ id: Date.now(), text: taskText });
    taskInput.value = "";
  }
});

// Delete all tasks
clearAllButton.addEventListener("click", function () {
  localStorage.clear();
  taskList.innerHTML = "";
});

// Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTask(task, false));
}

// Add a task to the DOM and save it to localStorage if it's a new task
function addTask(task, saveToStorage = true) {
  const li = document.createElement("li");
  li.setAttribute("data-id", task.id); // Set the task's unique ID as a data attribute
  li.innerHTML = `${task.text} <button class="delete">Delete</button>`;
  taskList.appendChild(li);

  // Save task to localStorage only if it's newly added
  if (saveToStorage) {
    saveTaskToLocalStorage(task);
  }

  // Delete individual task
  li.querySelector(".delete").addEventListener("click", function () {
    li.remove();
    deleteTaskFromLocalStorage(task.id);
  });
}

// Save a task to localStorage
function saveTaskToLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Delete a task from localStorage by ID
function deleteTaskFromLocalStorage(taskId) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.id !== taskId); // Remove the task by ID
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
