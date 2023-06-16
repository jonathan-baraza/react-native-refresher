import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fetchAllProducts } from "../utils/products";

export default function componentName() {
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    const products = fetchAllProducts();
    if (products) {
      setAllProducts(products);
    } else {
      setAllProducts(null);
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
