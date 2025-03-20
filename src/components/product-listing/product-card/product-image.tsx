import React from "react";
import styled from "styled-components";

interface Props {
  /**
   * The specific product details
   */
  image: string;

  title: string;
}

/**
 * Product card for the plp listing
 */
const ProductImage: React.FC<Props> = (props) => {
  const { image, title } = props;

  /**
   * TODO: Handle a propper loading state so each card is loading individually
   */

  return (
    <Root>
      <Image src={image} alt={title} />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200px;

  background-color: rgb(255, 255, 255);
`;

const Image = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

export default ProductImage;
