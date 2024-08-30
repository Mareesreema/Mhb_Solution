const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3009;

app.use(express.json());
app.use(cors());

// Setup multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads/';
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath);
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Rename the file to avoid conflicts
    }
});

const upload = multer({ storage });

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mhb_solution'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

// Create a new blog/news entry with image upload
app.post('/blogs', upload.single('image'), (req, res) => {
    const { title, description, date } = req.body;
    const image = req.file ? req.file.filename : null; // Get the uploaded file name

    const sql = `INSERT INTO blogs_news (image, title, description, date) VALUES (?, ?, ?, ?)`;
    db.query(sql, [image, title, description, date], (err, result) => {
        if (err) {
            console.error('Error creating blog/news entry:', err);
            res.status(500).send('Error creating blog/news entry');
        } else {
            res.status(201).send('Blog/news entry created successfully');
        }
    });
});

// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Read all blog/news entries
app.get('/blogs', (req, res) => {
    const sql = `SELECT * FROM blogs_news`;
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching blog/news entries:', err);
            res.status(500).send('Error fetching blog/news entries');
        } else {
            const formattedResults = results.map(blog => ({
                ...blog,
                image: blog.image ? `${req.protocol}://${req.get('host')}/uploads/${blog.image}` : null
            }));
            res.status(200).json(formattedResults);
        }
    });
});

// Read a specific blog/news entry by ID
app.get('/blogs/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM blogs_news WHERE id = ?`;
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Error fetching blog/news entry:', err);
            res.status(500).send('Error fetching blog/news entry');
        } else if (results.length === 0) {
            res.status(404).send('Blog/news entry not found');
        } else {
            const blog = results[0];
            blog.image = blog.image ? `${req.protocol}://${req.get('host')}/uploads/${blog.image}` : null;
            res.status(200).json(blog);
        }
    });
});

// Update a blog/news entry by ID
app.put('/blogs/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { title, description, date } = req.body;
    const image = req.file ? req.file.filename : null; // Get the uploaded file name

    let sql;
    let params;

    if (image) {
        sql = `UPDATE blogs_news SET image = ?, title = ?, description = ?, date = ? WHERE id = ?`;
        params = [image, title, description, date, id];
    } else {
        sql = `UPDATE blogs_news SET title = ?, description = ?, date = ? WHERE id = ?`;
        params = [title, description, date, id];
    }

    db.query(sql, params, (err, result) => {
        if (err) {
            console.error('Error updating blog/news entry:', err);
            res.status(500).send('Error updating blog/news entry');
        } else if (result.affectedRows === 0) {
            res.status(404).send('Blog/news entry not found');
        } else {
            res.status(200).send('Blog/news entry updated successfully');
        }
    });
});

// Delete a blog/news entry by ID
app.delete('/blogs/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM blogs_news WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting blog/news entry:', err);
            res.status(500).send('Error deleting blog/news entry');
        } else if (result.affectedRows === 0) {
            res.status(404).send('Blog/news entry not found');
        } else {
            res.status(200).send('Blog/news entry deleted successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
