import { useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator, Image } from "react-native";
import { fetchProductDetails } from "../../../utils/products";

const ProductDetails = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const product = await fetchProductDetails(itemId);
      setProduct(product);
      console.log("product");
      console.log(product);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
        <Text className="mt-3">Fetching product details...</Text>
      </View>
    );
  }
  return (
    <View className="flex-1">
      {product ? (
        <View>
          <Image source={{ uri: product.images[0] }} />
          <Text>Brand: {product.brand}</Text>
          <Text>Category: {product.category}</Text>
          <Text>Description: {product.description}</Text>
        </View>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-red-500">Could not fetch product</Text>
        </View>
      )}
    </View>
  );
};

export default ProductDetails;
