const mongoose = require("mongoose")
const { string } = require("zod")


mongoose.connect("mongodb+srv://sparsh121:KRq6PxAffYsUxUt5@cluster0.lvze7me.mongodb.net/todos")

const Todoschema = mongoose.Schema({

    title:String,
    description:String,
    completed:Boolean

})

const Todo = mongoose.model("todos",Todoschema)

module.exports={
    Todo
}