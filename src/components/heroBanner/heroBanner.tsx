import React from "react";
import { useProductContext } from "../../providers/productDataProvider";

export const HeroBanner: React.FC = () => {
  const { products, isLoading, isError } = useProductContext();

  console.log(products, "context data");

  return <div>banner</div>;
};
