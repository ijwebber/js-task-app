const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

// Getting all todos 
router.get('/', async (req, res) => {

    console.log("req.body.todo")
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Getting a todo
router.get('/:id', getTodo, (req, res) => {
    res.send(res.todo)
})

// Creating a todo
router.post('/', async (req, res) => {
    const todo = new Todo({
        todo: req.body.todo
    })

    try {
        const newTodo = await todo.save()
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Updating a todo 
router.patch('/:id', getTodo, async (req, res) => {
    if (req.body.todo != null) {
        res.todo.todo = req.body.todo
    }
    if (req.body.status != null) {
        res.todo.status = req.body.status
    }
    try {
        const updatedTodo = await res.todo.save()
        res.json(updatedTodo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// Deleteing a todo
router.delete('/:id', getTodo, async (req, res) => {
    try {
        await res.todo.remove()
        res.json({ message: "Deleted Todo" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

async function getTodo(req, res, next) {
    let todo
    try {
        todo = await Todo.findById(req.params.id)
        if (todo == null) {
            return res.status(404).json({ message: "Cannot find todo" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.todo = todo
    next()
}

module.exports = router