const express = require('express');
const app = express();
const PORT = 3000;

function generateRandomTodos(count) {
    const todos = [];
    const sampleTasks = [
        'Buy groceries',
        'Walk the dog',
        'Complete homework',
        'Read a book',
        'Go to the gym',
        'Water the plants',
        'Call a friend',
        'Write some code'
    ];

    for (let i = 0; i < count; i++) {
        const randomTask = sampleTasks[Math.floor(Math.random() * sampleTasks.length)];
        todos.push({
            id: i + 1,
            task: randomTask,
            completed: Math.random() < 0.5 
        });
    }
    return todos;
}

app.get('/', (req, res) => {
    const minTodos = 1; 
    const maxTodos = 10;
    const randomCount = Math.floor(Math.random() * (maxTodos - minTodos + 1)) + minTodos;
    
    const todos = generateRandomTodos(randomCount); 
    res.json(todos);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
