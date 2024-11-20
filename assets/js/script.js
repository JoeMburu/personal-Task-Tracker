document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = '';

        // Mark task as complete
        taskSpan.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        // Delete task
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    });
});
