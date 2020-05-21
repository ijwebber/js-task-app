const express = require('express')
const router = express.Router()

// Getting all todos 
router.get('/', (req, res) => {
    res.send('Hello World')
})
// Creating a todo
router.post('/', (req, res) => {

})
// Updating a todo 
router.patch('/:id', (req, res) => {

})
// Deleteing a todo
router.delete('/:id', (req, res) => {

})

module.exports = router