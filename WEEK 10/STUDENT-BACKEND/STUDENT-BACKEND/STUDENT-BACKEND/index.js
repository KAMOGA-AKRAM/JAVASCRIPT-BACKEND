// index.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const PORT = 4100;

// Parse JSON request bodies
app.use(bodyParser.json());

// Create a MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'akram2003', // Replace with your MySQL password
    database: 'school'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Create a new student
app.post('/students', (req, res) => {
    const { name, email, age, course } = req.body;
    const sql = 'INSERT INTO students (name, email, age, course) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, age, course], (err, result) => {
        if (err) {
            console.error('Error inserting student:', err);
            return res.status(500).json({ error: 'Failed to create student' });
        }
        res.status(201).json({ id: result.insertId, name, email, age, course });
    });
});


// Get a student by ID
app.get('/students/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM students WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Error fetching student:', err);
            return res.status(500).json({ error: 'Failed to retrieve student' });
        }
        if (results.length === 0) return res.status(404).json({ error: 'Student not found' });
        res.json(results[0]);
    });
});


// Update a student's information
app.put('/students/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, age, course } = req.body;
    const sql = 'UPDATE students SET name = ?, email = ?, age = ?, course = ? WHERE id = ?';
    db.query(sql, [name, email, age, course, id], (err, result) => {
        if (err) {
            console.error('Error updating student:', err);
            return res.status(500).json({ error: 'Failed to update student' });
        }
        res.json({ message: 'Student updated successfully' });
    });
});

// Delete a student
app.delete('/students/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM students WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting student:', err);
            return res.status(500).json({ error: 'Failed to delete student' });
        }
        res.json({ message: 'Student deleted successfully' });
    });
});




app.post('/students', (req, res) => {
    const { name, email, age, course } = req.body;
    const sql = 'INSERT INTO students (name, email, age, course) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, age, course], (err, result) => {
        if (err) {
            console.error('Error inserting student:', err);
            return res.status(500).json({ error: 'Failed to create student' });
        }
        res.status(201).json({ id: result.insertId, name, email, age, course });
    });
});
