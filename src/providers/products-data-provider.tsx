import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../services/product-service";
import { Product } from "../types/productTypes";

interface ProductContextType {
  /**
   * Boolean to determine if the data is loading
   */
  isLoading: boolean;
  /**
   * List of products containing the type of product
   */
  products: Product[];
  /**
   * Boolean to determine if an error has occoured
   */
  isError: boolean;
}

const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductDataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);

      try {
        const product = await fetchProducts();
        setProducts(product);
      } catch (error) {
        console.error("Error fetching products data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const contextValue: ProductContextType = {
    products,
    isLoading,
    isError,
  };

  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
