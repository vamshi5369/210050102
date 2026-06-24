const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

function showMessage(text, type) {
    message.textContent = text;
    message.className = type;

    setTimeout(() => {
        message.textContent = "";
    }, 3000);
}

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    // Validation
    if (taskText === "") {
        showMessage("Task cannot be empty!", "error");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("task-buttons");

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    editBtn.addEventListener("click", () => {
        const updatedTask = prompt("Edit task:", span.textContent);

        if (updatedTask === null) return;

        if (updatedTask.trim() === "") {
            showMessage("Task cannot be empty!", "error");
            return;
        }

        span.textContent = updatedTask.trim();
        showMessage("Task updated successfully!", "success");
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
        showMessage("Task deleted successfully!", "success");
    });

    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonDiv);

    taskList.appendChild(li);

    taskInput.value = "";

    showMessage("Task added successfully!", "success");
}