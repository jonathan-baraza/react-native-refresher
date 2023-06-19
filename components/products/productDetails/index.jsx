import { useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { fetchProductDetails } from "../../../utils/products";

const ProductDetails = ({ route, navigation }) => {
  const { itemIndex } = route.params;
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {};

  useEffect(() => {
    fetchProduct();
  }, []);
  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size={"large"} />
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
