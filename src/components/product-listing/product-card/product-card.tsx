import React from "react";
import styled from "styled-components";
import { Product } from "../../../types/productTypes";
import ProductInfo from "./product-info";
import ProductImage from "./product-image";

interface Props {
  /**
   * The specific product details
   */
  product: Product;
}

/**
 * Product card for the plp listing
 */
const ProductCard: React.FC<Props> = ({ product }) => {
  const { title, image, price, category } = product;

  /**
   * TODO: Handle a propper loading state so each card is loading individually
   */

  return (
    <Root>
      <ProductImage image={image} title={title} />

      <ProductInfo title={title} category={category} price={price}></ProductInfo>
    </Root>
  );
};

const Root = styled.div`
  background-color: #f7f7f7;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  border-radius: 15px;

  overflow: hidden;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

export default ProductCard;
