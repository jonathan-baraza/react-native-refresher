//create the context
//provide the context
//consume that context

import { createContext, useState, useEffect } from "react";
const Context = createContext(null);

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
    <Context.Provider value={{ products, loading }}>
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
