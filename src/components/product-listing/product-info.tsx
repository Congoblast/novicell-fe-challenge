import React from "react";
import styled from "styled-components";

interface Props {
  /**
   * The specific product title
   */
  title: string;

  /**
   * The category text
   */
  category: string;
  /**
   * Price of the product
   */
  price: number;
}

/**
 * Product info for title card. Contains information about the product like
 * text, price and category
 */
const ProductInfo: React.FC<Props> = (props) => {
  const { title, price, category } = props;

  return (
    <Root>
      <Title>{title}</Title>
      <Category>{category}</Category>
      <Price>${price.toFixed(2)}</Price>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 15px;
  height: 150px;
`;

const Title = styled.h3`
  margin: 0;

  font-size: 18px;
  font-weight: 600;

  color: #333333;
`;

const Category = styled.p`
  font-size: 14px;

  color: #333333;

  margin: 5px 0;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 600;

  color: rgb(49, 49, 49);

  margin-top: auto;
`;

export default ProductInfo;
