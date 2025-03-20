import React, { useState } from "react";
import { useProductContext } from "../../providers/products-data-provider";
import styled from "styled-components";
import { Skeleton } from "../skeletons/skeleton";
import HeroImage from "./hero-image";

/**
 * Carousel to display a series of products
 */
const HeroCarousel: React.FC = () => {
  const { products, isLoading } = useProductContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show loading state if products are being fetched
  if (isLoading) return <Skeleton />;

  // Pick a specific part of the array to display the products on the carousel
  const limitedProducts = products.slice(6, 9);

  // Function to slide right
  const slideRight = () => {
    if (currentIndex < limitedProducts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to slide left
  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Root>
      <Slider onClick={slideLeft} disabled={currentIndex === 0}>
        {"<"}
      </Slider>
      <HeroImage products={limitedProducts} currentIndex={currentIndex} />

      <Slider onClick={slideRight} disabled={currentIndex === limitedProducts.length - 1}>
        {">"}
      </Slider>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

const Slider = styled.button`
  align-self: center;

  background: rgba(0, 0, 0, 0.5);
  color: white;

  border: none;
  border-radius: 5px;

  padding: 10px 15px;

  cursor: pointer;

  font-size: 18px;

  z-index: 1;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export default HeroCarousel;
