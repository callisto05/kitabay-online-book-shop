const googleBooksService = require("../services/googleBooksService");
const Book = require("../models/index");

const fetchAndStoreBooks = async (req, res) => {
  // Extract the query parameter from the request
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    // Check if books for the category already exist in the database
    const existingBooks = await Book.find({ category: query });
    if (existingBooks.length > 0) {
      return res.json(existingBooks);
    }

    // Fetch books from Google Books API and store them in the database if not already present
    const books = await googleBooksService.searchBooks(query);
    if (!books || books.length === 0) {
      console.error("No books found for the query:", query);
      return res.status(404).json({ error: "No books found" });
    }
    const storedBooks = await Promise.all(
      books.map(async (book) => {
        const { title, authors, description, imageLinks } = book.volumeInfo;
        const price = book.saleInfo.listPrice
          ? book.saleInfo.listPrice.amount
          : 20;
        const coverImage = imageLinks
          ? imageLinks.thumbnail
          : "default-image-url"; // Use a default image if none is provided
        const newBook = new Book({
          title,
          author: authors ? authors.join(", ") : "Unknown",
          price,
          description,
          category: query,
          coverImage,
        });
        return await newBook.save();
      })
    );
    res.json(storedBooks);
  } catch (error) {
    console.error("Error fetching and storing books:", error);
    res.status(500).json({ error: "Failed to fetch and store books" });
  }
};

module.exports = {
  fetchAndStoreBooks,
};
