import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/FooterComponent.css"; // Import the CSS file for additional styles

const FooterComponent = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className="footer-social">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
          <Col md={6} className="footer-policies">
            <h5>Policies</h5>
            <ul>
              <li>
                <a href="#privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="#shipping-return">Shipping and Return</a>
              </li>
              <li>
                <a href="#payments-refund">Payments and Refund</a>
              </li>
              <li>
                <a href="#track-order">Track Your Order</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
