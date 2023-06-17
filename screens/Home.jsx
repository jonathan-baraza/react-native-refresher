import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { fetchAllProducts } from "../utils/products";

export default function componentName() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const colors = [
    "red",
    "pink",
    "green",
    "orange",
    "blue",
    "yellow",
    "teal",
    "violet",
  ];

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
                numColumns={2}
                horizontal={false}
                contentContainerStyle={{
                  marginTop: 30,
                  alignItems: "center",
                }}
                data={allProducts}
                keyExtractor={(product) => product.id}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={{ backgroundColor: colors[index] }}
                    className={`w-[150px] m-2 rounded-lg   items-center justify-center  h-[200px] border border-gray-200`}
                  >
                    <Text className="text-center">
                      {item.title} {colors[index]}
                    </Text>
                  </TouchableOpacity>
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
