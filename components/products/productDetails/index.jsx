import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { fetchProductDetails } from "../../../utils/products";

const ProductDetails = ({ route, navigation }) => {
  const { itemIndex } = route.params;
  const [product, setProduct] = useState("");

  const fetchProduct = async () => {};

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <View>
      <Text>ProductDetails {itemIndex}</Text>
    </View>
  );
};

export default ProductDetails;
