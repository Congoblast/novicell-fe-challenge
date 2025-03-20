import React from "react";
import styled, { keyframes } from "styled-components";

/**
 * Shows a simple loading skeleton state
 */
export const Skeleton: React.FC = () => {
  return (
    <SkeletonWrapper>
      <SkeletonImage />
    </SkeletonWrapper>
  );
};

const SkeletonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 20px;
`;

const shimmer = keyframes`
  0% {
    background-position: -150% 0;
  }
  100% {
    background-position: 150% 0;
  }
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 120px;

  border-radius: 8px;

  animation: ${shimmer} 1.5s infinite ease-in-out;

  background: linear-gradient(45deg, #eee 40%, #fafafa 50%, #eee 60%);
  background-color: #c0c0c0;
  background-size: 300%;
`;
