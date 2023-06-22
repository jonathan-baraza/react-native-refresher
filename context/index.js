import { ToastAndroid } from "react-native";
import { fetchAllProducts } from "../utils/products";
import { createContext, useState, useEffect } from "react";
export const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorites = (product) => {
    setFavoriteItems([product, ...favoriteItems]);
    ToastAndroid.show("Added to favorites", ToastAndroid.SHORT);
  };
  const fetchProducts = async () => {
    const products = await fetchAllProducts();
    if (products) {
      setProducts(products);
      setFavoriteItems(products.slice(0, 5));
    } else {
      setProducts(null);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Context.Provider
      value={{ products, loading, favoriteItems, addToFavorites }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
