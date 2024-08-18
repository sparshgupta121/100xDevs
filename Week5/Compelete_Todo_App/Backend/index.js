const express = require("express");
const { CreateTodo } = require("./types");
const { updateTodo } = require("./types");
const { Todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todos", async function (req, res) {
    try {
        const createPayload = req.body;
        const parsedPayload = CreateTodo.safeParse(createPayload);

        if (!parsedPayload.success) {
            return res.status(400).json({
                msg: "You entered the wrong inputs"
            });
        }

        await Todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        });

        res.status(201).json({
            msg: "Todo created successfully"
        });
    } catch (error) {
        res.status(500).json({
            msg: "An error occurred",
            error: error.message
        });
    }
});

app.get("/todos", async function (req, res) {
    try {
        const todos = await Todo.find({});
        res.json({
            todos
        });
    } catch (error) {
        res.status(500).json({
            msg: "An error occurred",
            error: error.message
        });
    }
});

app.post("/completed", async function (req, res) {
    try {
        const updatePayload = req.body;
        const parsedUpdatedPayload = updateTodo.safeParse(updatePayload);

        if (!parsedUpdatedPayload.success) {
            return res.status(400).json({
                msg: "You entered the wrong inputs"
            });
        }

        await Todo.updateOne(
            { _id: req.body.id },
            { completed: true }
        );

        res.status(200).json({
            msg: "Todo marked as completed"
        });
    } catch (error) {
        res.status(500).json({
            msg: "An error occurred",
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
