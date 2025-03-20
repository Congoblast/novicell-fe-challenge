import React from "react";
import { ProductDataProvider } from "../providers/products-data-provider";
import ProductListing from "../components/product-listing/product-listing";
import HeroCarousel from "../components/hero-carousel/hero-carousel";

export const Frontpage: React.FC = () => {
  return (
    <ProductDataProvider>
      <HeroCarousel />
      <ProductListing />
    </ProductDataProvider>
  );
};
