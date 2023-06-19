import { useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { fetchProductDetails } from "../../../utils/products";

const ProductDetails = ({ route, navigation }) => {
  const { itemIndex } = route.params;
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const product = await fetchProductDetails();
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
    <View>
      <Text>ProductDetails {itemIndex}</Text>
    </View>
  );
};

export default ProductDetails;
