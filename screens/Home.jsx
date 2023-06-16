import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { fetchAllProducts } from "../utils/products";

export default function componentName() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const products = await fetchAllProducts();
    if (products) {
      setAllProducts(products);
    } else {
      setAllProducts(null);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts();
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
            <View className="flex-1">
              <FlatList
                data={allProducts}
                keyExtractor={(product) => product.id}
                renderItem={({ item }) => (
                  <View>
                    <Text>{item.title}</Text>
                  </View>
                )}
              />
            </View>
          ) : (
            <View className="flex-1 items-center justify-center">
              <Text className="text-red-500">Failed to fetch products</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
