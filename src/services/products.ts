import { Product } from "../types/productTypes";

export const baseUrl = process.env.REACT_APP_PRODUCT_BASE_URL;

/**
 * Handles  calling the fake product list for returning data
 */
export const fetchProducts = async (): Promise<Product[]> => {
  const url = `${baseUrl}/products`;

  try {
    const response = await fetch(url);
    const result: Product[] = await response.json();

    return result;
  } catch (err) {
    console.error("Error fetching champion rank:", err);
    throw err;
  }
};
