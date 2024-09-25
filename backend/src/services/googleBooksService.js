// backend/src/services/googleBooksService.js
const axios = require("axios");

const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";
// Function to search for books using the Google Books API 
const searchBooks = async (query) => {
  try {
    // Make a GET request to the Google Books API with the query parameter and API key
    const response = await axios.get(GOOGLE_BOOKS_API_URL, {
      params: {
        q: query,
        key: process.env.GOOGLE_BOOKS_API_KEY, // Store your API key in an environment variable
      },
    });
    // Return the list of books found in the response data items array
    return response.data.items;
  } catch (error) {
    console.error("Error fetching data from Google Books API:", error);
    throw error;
  }
};

module.exports = {
  searchBooks,
};
