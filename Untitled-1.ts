const form = document.getElementById("add-task-form");
const list = document.getElementById("task-list");

// Retrieve existing tasks from localStorage
let itemArray = JSON.parse(localStorage.getItem("items")) || [];

// Function to render tasks
function renderTasks() {
  list.innerHTML = ""; // Clear list before re-rendering
  itemArray.forEach((element, index) => {
    const listItem = document.createElement("li");

    const taskTitle = document.createElement("h1");
    taskTitle.textContent = element.task; // Fixed key name

    const taskDesc = document.createElement("p");
    taskDesc.textContent = element.description; // Fixed key name

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    listItem.appendChild(taskTitle);
    listItem.appendChild(taskDesc);
    listItem.appendChild(deleteBtn);

    list.appendChild(listItem);
  });
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.getElementById("task-title").value;
  const desc = document.getElementById("task-desc").value;

  const obj = {
    task, // Fixed key name
    description: desc, // Fixed key name
  };

  itemArray.push(obj);
  localStorage.setItem("items", JSON.stringify(itemArray));
  form.reset(); // Clear input fields
  renderTasks(); // Re-render list
});

// Delete a task
function deleteTask(index) {
  itemArray.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(itemArray));
  renderTasks();
}

// Initial render
renderTasks();
