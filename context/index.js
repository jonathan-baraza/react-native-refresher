import { ToastAndroid } from "react-native";
import { fetchAllProducts } from "../utils/products";
import { createContext, useState, useEffect } from "react";
export const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorites = (product) => {
    const elementExists = favoriteItems.find((item) => item.id === product.id);
    if (elementExists) {
      return ToastAndroid.show(
        "Product already in favorites",
        ToastAndroid.SHORT
      );
    }
    setFavoriteItems([product, ...favoriteItems]);
    ToastAndroid.show("Added to favorites", ToastAndroid.SHORT);
  };

  const removeFromFavorites = (productId) => {
    setFavoriteItems(favoriteItems.filter((item) => item.id !== productId));
    ToastAndroid.show("Removed from favorites", ToastAndroid.SHORT);
  };

  const fetchProducts = async () => {
    const products = await fetchAllProducts();
    if (products) {
      setProducts(products);
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
      value={{
        products,
        loading,
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
