const fs = require('fs')

const data = fs.readFileSync("todo.json", "utf-8")
const todoList = JSON.parse(data)

console.log(todoList[1])