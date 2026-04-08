const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

let todos = [];

// Get todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Add todo
app.post('/todos', (req, res) => {
    const task = req.body.task;
    todos.push(task);
    res.json({ message: "Task added" });
});

// Delete todo
app.delete('/todos/:index', (req, res) => {
    const index = req.params.index;
    todos.splice(index, 1);
    res.json({ message: "Task deleted" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
