import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "./NavbarComponent";
import BookComponent from "./BookComponent";
import { Container, Row, Col } from "react-bootstrap";

const CategoryPage = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/books/api/google-books/fetch-and-store?q=${category}`,
        );
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [category]);

  return (
    <div>
      <NavbarComponent />
      <Container>
        <h2>{category} Books</h2>
        <Row>
          {books.map((book) => (
            <Col key={book._id} xs={12} sm={6} md={4} lg={3}>
              <BookComponent book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryPage;
