import React from "react";
import { useProductContext } from "../../providers/products-data-provider";
import ProductCard from "./product-card/product-card";
import styled from "styled-components";
import { Skeleton } from "../skeletons/skeleton";

/**
 * Contains the list of products to display
 */
const ProductListing: React.FC = () => {
  const { products, isLoading } = useProductContext();

  // Show loading state if products are being fetched
  if (isLoading) return <Skeleton />;

  return (
    <Root>
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;

  gap: 20px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default ProductListing;
