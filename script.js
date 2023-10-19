// Get references to HTML elements
const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add');
const taskList = document.getElementById('taskList');

// Event listener for adding tasks
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.setAttribute('data-status', 'in-progress');
        li.draggable = true;
        li.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = ''; // Clear the input field
    }
});

// Event listener for deleting tasks
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
    }
});

// Function to handle the checkbox change event
taskList.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        const task = event.target.parentElement;
        if (event.target.checked) {
            task.setAttribute('data-status', 'completed');
        } else {
            task.setAttribute('data-status', 'in-progress');
        }
    }
});
