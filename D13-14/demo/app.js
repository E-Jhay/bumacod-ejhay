const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const todoRoutes = require('./routes/todoRoutes');

// Express app
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

// Connect to MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Routes
app.use('/todos', todoRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
    connectToDatabase();
});