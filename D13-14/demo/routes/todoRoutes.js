const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todoController');

// Create a new todo
router.post('/', TodoController.createTodo);

// Get all todos
router.get('/', TodoController.getAllTodos);

// Get single todos
router.get('/:id', TodoController.getTodoById);

// Update todo
router.put('/:id', TodoController.updateTodo);

// Delete todo
router.delete('/:id', TodoController.deleteTodo);

module.exports = router;