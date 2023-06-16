import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { fetchAllProducts } from "../utils/products";

export default function componentName() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const products = fetchAllProducts();
    if (products) {
      setAllProducts(products);
    } else {
      setAllProducts(null);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <View className="flex-1">
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={"large"} />
          <Text className="mt-3">Loading...</Text>
        </View>
      ) : (
        <>
          {allProducts ? (
            <View>
              <Text>{allProducts.length}</Text>
            </View>
          ) : (
            <View>
              <Text className="text-red-500">Failed to fetch products</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
