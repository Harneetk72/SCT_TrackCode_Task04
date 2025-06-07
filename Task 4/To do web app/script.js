document.getElementById('addBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `${task} 
        <span>
            <button class="editBtn" onclick="editTask(this)">Edit</button>
            <button class="deleteBtn" onclick="deleteTask(this)">Delete</button>
        </span>`;

    taskList.appendChild(li);
}

function editTask(btn) {
    const li = btn.parentElement.parentElement;
    const taskText = li.firstChild.textContent.trim();
    const newTask = prompt("Edit Task:", taskText);
    
    if (newTask !== null && newTask.trim() !== "") {
        li.firstChild.textContent = newTask + " ";
    }
}

function deleteTask(btn) {
    const li = btn.parentElement.parentElement;
    li.remove();
}
