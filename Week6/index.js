const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const todoarr = {
    "todos": [
        {
            id: 1,
            title: "Buy groceries",
            description: "Purchase vegetables, fruits, milk, and bread."
        },
        {
            id: 2,
            title: "Walk the dog",
            description: "Take the dog for a walk in the park."
        },
        {
            id: 3,
            title: "Finish homework",
            description: "Complete the math and science assignments."
        },
        {
            id: 4,
            title: "Clean the house",
            description: "Vacuum, dust, and organize the living room and kitchen."
        },
        {
            id: 5,
            title: "Read a book",
            description: "Start reading the novel that has been on the shelf for weeks."
        }
    ]
};

app.get("/", function (req, res) {
    res.json(todoarr);
});

app.get("/todo", function (req, res) {
    const id = parseInt(req.query.id); 

    const todoItem = todoarr.todos.find(todo => todo.id === id);

    if (todoItem) {
        res.json(todoItem);
    } else {
        res.json({
            msg: "No Todo Found"
        });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
