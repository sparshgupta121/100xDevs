const mongoose = require("mongoose")
const { string } = require("zod")


mongoose.connect("db/url")

const Todoschema = mongoose.Schema({

    title:String,
    description:String,
    completed:Boolean

})

const Todo = mongoose.model("todos",Todoschema)

module.exports={
    Todo
}