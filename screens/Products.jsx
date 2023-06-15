import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useState, useEffect, useRef } from "react";
import ProductItem from "../components/products/ProductItem";

const Products = () => {
  const [allProducts, setAllProducts] = useState([
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
  ]);

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
        <Text className="font-bold text-3xl">🛒</Text>
      </View>

      <View className="bg-gray-100 flex-1 px-6 py-4">
        {/* RenderItem's param must be called Item??? */}
        <FlatList
          scrollToOverflowEnabled
          data={allProducts}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => handleProductPressed(index)}>
              <ProductItem product={item} />
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
