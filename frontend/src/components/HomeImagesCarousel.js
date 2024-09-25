import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/HomeImagesCarousel.css"; // Import the CSS file for additional styles
import bookAssetOne from "../assets/images/bookAssetOne.jpg";
import bookAssetTwo from "../assets/images/bookAssetTwo.jpg";

const HomeImagesCarousel = () => {
  return (
    <Carousel className="home-carousel">
      <Carousel.Item>
        <img className="d-block w-100" src={bookAssetTwo} alt="First slide" />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bookAssetOne} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bookAssetTwo} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeImagesCarousel;
