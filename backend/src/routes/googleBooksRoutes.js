// backend/src/routes/googleBooksRoutes.js
const express = require("express");
const router = express.Router();
const googleBooksController = require("../controllers/googleBooksController");

// Define the route to fetch and store books from the Google Books API for a given category
router.get("/fetch-and-store", googleBooksController.fetchAndStoreBooks);

module.exports = router;
