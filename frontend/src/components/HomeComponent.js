import React from "react";
import NavbarComponent from "./NavbarComponent";
import HomeImagesCarousel from "./HomeImagesCarousel";
import CategoriesComponent from "./CategoriesComponent";
import FooterComponent from "./FooterComponent";

const HomeComponent = () => {
  return (
    <div>
      <NavbarComponent />
      <HomeImagesCarousel />
      <CategoriesComponent />
      <FooterComponent />
    </div>
  );
};

export default HomeComponent;
