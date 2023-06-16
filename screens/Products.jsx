import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import ProductItem from "../components/products/ProductItem";
import axios from "axios";
import { fetchAllProducts } from "../utils/products";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //   const scrollRef = useRef(null);

  const fetchProducts = async () => {
    const products = await fetchAllProducts();
    if (products) {
      setAllProducts(products);
      setLoading(false);
    }
    // scrollRef.current.scrollToEnd({ animated: true });
  };

  const handleDeleteProduct = (index) => {
    setAllProducts(allProducts.filter((_, idx) => idx !== index));
  };

  const handleProductPressed = (index) => {
    Alert.alert("Warning", "Are you sure you want to delete this product ?", [
      { text: "CLOSE" },
      { text: "OK", onPress: () => handleDeleteProduct(index) },
    ]);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   scrollRef?.current?.scrollToEnd({ animated: true });
  // }, [allProducts]);

  //   if (loading)
  //     return (
  //       <View className="flex-1 justify-center items-center">
  //         <Text className="mb-3 text-lg">Please wait...</Text>
  //         <ActivityIndicator size={"large"} />
  //       </View>
  //     );

  return (
    <View style={styles.container}>
      <View className="my-4 flex flex-row justify-center">
        <Text className="mr-2 font-bold text-2xl">My products</Text>
        <Text className="font-bold text-2xl">🛒</Text>
      </View>

      <View className="bg-gray-100 flex-1 px-6 py-4">
        {/* RenderItem's param must be called Item??? */}
        {loading ? (
          <View className="flex-1 justify-center items-center">
            <Text className="mb-3 text-lg">Fetching products...</Text>
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <FlatList
            // ref={scrollRef}

            showsVerticalScrollIndicator={false}
            data={allProducts}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <Pressable onPress={() => handleProductPressed(index)}>
                <ProductItem product={item} />
              </Pressable>
            )}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Products;
