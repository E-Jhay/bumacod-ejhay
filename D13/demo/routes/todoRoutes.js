const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Get all todos
router.get('/', todoController.getTodos);

// Create a new todo
router.post('/', todoController.createTodo);

module.exports = router;