const express = require("express");
const router = express.Router();
// Import the book controller
const bookController = require("../controllers/index");
// Import the Google Books routes
const googleBooksRoutes = require("./googleBooksRoutes");

// Health check route
router.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// Define routes for book-related operations
router.get("/books", bookController.getAllBooks);
router.get("/books/:id", bookController.getBookById);
router.post("/books", bookController.createBook);
router.put("/books/:id", bookController.updateBook);
router.delete("/books/:id", bookController.deleteBook);

// Mount the Google Books routes at the /api/google-books path
router.use("/api/google-books", googleBooksRoutes);

module.exports = router;
