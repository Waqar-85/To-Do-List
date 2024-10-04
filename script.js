const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskTitleInput = document.getElementById("taskTitle");
const taskDescriptionInput = document.getElementById("taskDescription");

let tasks = [];
let editIndex = -1; // Tasks ko editing kaliya

// Add ya Edit Task
addTaskBtn.addEventListener("click", () => {
    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();

    if (title === "" || description === "") {
        alert("Please enter both title and description");
        return;
    }

    if (editIndex === -1) {
        // Add new task
        tasks.push({ title, description });
    } else {
        // Edit existing task
        tasks[editIndex] = { title, description };
        editIndex = -1;
        addTaskBtn.textContent = "Edit Post";
    }

    taskTitleInput.value = "";
    taskDescriptionInput.value = "";

    renderTasks();
});

// Render Task List
function renderTasks() {                                                                                //                                                // function ka para meterka andar dusare function chalana ko HIH ORDER FUNCTION kahatahaan..
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        
        const taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");
        taskInfo.innerHTML = `<strong>${task.title}</strong><p>${task.description}</p>`;//-->
        li.appendChild(taskInfo);

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editTask(index);
        li.appendChild(editBtn);

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTask(index);
        li.appendChild(deleteBtn);                                                                         //                                           // append  del aor edit dtn ko aalak div nahi banana ko used huwa ha

        taskList.appendChild(li);
    });
}

// Edit Task
function editTask(index) {
    const task = tasks[index];
    taskTitleInput.value = task.title;
    taskDescriptionInput.value = task.description;
    editIndex = index;
    addTaskBtn.textContent = "Update Post";
}

// Delete Task
function deleteTask(index) {   
    tasks.splice(index, 1);     
    renderTasks();              
}
