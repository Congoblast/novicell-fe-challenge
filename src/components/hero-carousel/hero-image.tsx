import React from "react";
import styled from "styled-components";
import { Product } from "../../types/productTypes";

interface Props {
  products: Product[];
  currentIndex: number;
}

const HeroImage: React.FC<Props> = (props) => {
  const { products, currentIndex } = props;

  return (
    <Wrapper>
      <ImageTrack style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {products.map(({ image, title, id }) => (
          <ImageWrapper key={id}>
            <Image src={image} alt={title} />
          </ImageWrapper>
        ))}
      </ImageTrack>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: hidden;
`;

const ImageTrack = styled.div`
  display: flex;
  width: 100%;
  max-height: 350px;
  transition: transform 0.5s ease-in-out;
`;

const ImageWrapper = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const Image = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

export default HeroImage;
