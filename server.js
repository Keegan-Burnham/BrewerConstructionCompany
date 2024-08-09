const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Qn24O!POQ22JlS&ut&ANzn!xhy*ZmS',
    database: 'brewer_construction_database'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});