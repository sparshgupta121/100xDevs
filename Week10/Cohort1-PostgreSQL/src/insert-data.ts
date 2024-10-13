import { getClient } from "./utils";

async function createEntries() {
    const client = await getClient();
    const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
    const todoValues = ['Buy groceries', 'Milk, bread, and eggs','1', false];
    await client.query(insertTodoText, todoValues);

    console.log("Entries created!");
}



createEntries();