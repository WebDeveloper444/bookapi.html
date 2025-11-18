const express = require("express");
const app = express();
app.use(express.json());

let books = []; // In-memory storage (database ki need nahi)


// GET all books
app.get("/books", (req, res) => {
    res.json(books);
});


// POST add a new book
app.post("/books", (req, res) => {
    books.push(req.body);
    res.json({ message: "Book added", books });
});


// PUT update a book
app.put("/books/:id", (req, res) => {
    const id = req.params.id;
    books[id] = req.body;
    res.json({ message: "Book updated", books });
});


// DELETE a book
app.delete("/books/:id", (req, res) => {
    const id = req.params.id;
    books.splice(id, 1);
    res.json({ message: "Book deleted", books });
});


// Server start
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
