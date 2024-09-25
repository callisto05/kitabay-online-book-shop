import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/CategoriesComponent.css"; // Import the CSS file for additional styles
import categoryImage1 from "../assets/images/BookCombos.webp";
import categoryImage3 from "../assets/images/Fantasy.webp";
import categoryImage4 from "../assets/images/Adventure.webp";
import categoryImage5 from "../assets/images/YoungAdult.webp";
import categoryImage6 from "../assets/images/Mystery.webp";
import categoryImage7 from "../assets/images/Romance.avif";
import categoryImage8 from "../assets/images/Philosophy.webp";
import categoryImage9 from "../assets/images/SelfHelp.webp";
// Import other category images similarly...

const categories = [
  { id: 1, title: "Biography", image: categoryImage1 },
  { id: 2, title: "Self help", image: categoryImage9 },
  { id: 3, title: "Philosophy", image: categoryImage8 },
  { id: 4, title: "Romance", image: categoryImage7 },
  { id: 5, title: "Mystery", image: categoryImage6 },
  { id: 6, title: "Young adult", image: categoryImage5 },
  { id: 7, title: "Fantasy", image: categoryImage3 },
  { id: 8, title: "Adventure", image: categoryImage4 },
];

const CategoriesComponent = () => {
  return (
    <Container className="categories-container">
      <Row>
        {categories.map((category) => (
          <Col
            key={category.id}
            xs={12}
            sm={6}
            md={3}
            className="category-item"
          >
            <Link to={`/category/${category.title}`}>
              <img
                src={category.image}
                alt={category.title}
                className="category-image"
              />
              <h4 className="category-title">{category.title}</h4>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoriesComponent;
