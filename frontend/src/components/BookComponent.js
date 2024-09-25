import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "../styles/BookComponent.css";

const BookComponent = ({ book }) => {
  return (
    <Card className="book-item">
      <Card.Img
        variant="top"
        src={book.coverImage}
        alt={book.title}
        className="book-cover"
      />
      <Card.Body>
        <Card.Title className="book-title">{book.title}</Card.Title>
        <Card.Text className="book-author">
          <strong>Author:</strong> {book.author}
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> ${book.price}
        </Card.Text>
      </Card.Body>
      <div className="book-buttons">
        <Button variant="warning" className="add-to-cart-btn">
          Add to Cart
        </Button>
        <Button variant="light" className="add-to-favorite-btn">
          <FaHeart />
        </Button>
      </div>
    </Card>
  );
};

BookComponent.propTypes = {
  book: PropTypes.shape({
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookComponent;
