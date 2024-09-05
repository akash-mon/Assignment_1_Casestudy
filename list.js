function fetchTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json());
}

// Display the todos and add event listeners to checkboxes
function displayTodos(todos) {
    const todoList = document.getElementById('todo-list');
    let completedCount = 0;

    todos.forEach(todo => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed; // Check completed tasks initially

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                completedCount++;
            } else {
                completedCount--;
            }

            // Check if 5 tasks have been marked as completed
            checkFiveTasks(completedCount)
                .then(message => alert(message))
                .catch(() => {});
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(todo.title));
        todoList.appendChild(li);
    });
}

// Return a promise to check if 5 tasks have been completed
function checkFiveTasks(completedCount) {
    return new Promise((resolve, reject) => {
        if (completedCount === 5) {
            resolve("Congrats. 5 Tasks have been Successfully Completed");
        } else {
            reject();
        }
    });
}

// Fetch and display todos
fetchTodos().then(todos => {
    displayTodos(todos);
});