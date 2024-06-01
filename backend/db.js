const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://nahushsingh7:nMnt9NDGIa6A9clq@cluster0.0brzxyn.mongodb.net/organizeme")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}
