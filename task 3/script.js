document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('to-do-form');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const taskItem = e.target.parentElement;
            taskList.removeChild(taskItem);
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task">${task}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
    }
});
