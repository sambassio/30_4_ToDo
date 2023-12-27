document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() !== '') {
        let taskList = document.getElementById('taskList');
        let newTask = document.createElement('li');
        newTask.classList.add('task');

        let taskText = document.createElement('span');
        taskText.innerText = taskInput.value;

        // Event listener to toggle the done class on the task text when the li is clicked
        newTask.addEventListener('click', function() {
            taskText.classList.toggle('done');
        });

        newTask.appendChild(taskText);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerText = 'Delete';
        deleteBtn.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the click from affecting the li element
            newTask.remove();
        });

        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}



function toggleDone(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    }
}

document.getElementById('taskInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
