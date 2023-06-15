import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState, useEffect, useRef } from "react";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  // const scrollRef = useRef(null);

  const handleDeleteProduct = (index) => {
    setAllProducts(allProducts.filter((_, idx) => idx !== index));
  };

  const handleProductPressed = (index) => {
    Alert.alert("Warning", "Are you sure you want to delete this product ?", [
      { text: "CLOSE" },
      { text: "OK", onPress: () => handleDeleteProduct(index) },
    ]);
  };

  // useEffect(() => {
  //   scrollRef?.current?.scrollToEnd({ animated: true });
  // }, [allProducts]);

  return (
    <View style={styles.container}>
      <View className="my-4 flex flex-row justify-center">
        <Text className="mr-2 font-bold text-3xl">My products</Text>
        <Text className="font-bold text-3xl">📖</Text>
      </View>

      <View className="bg-gray-100 flex-1 px-6 py-4">
        {/* RenderItem's param must be called Item??? */}
        <FlatList
          scrollToOverflowEnabled
          data={allProducts}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => handleProductPressed(index)}>
              <Text>One</Text>
            </Pressable>
          )}
        />
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
