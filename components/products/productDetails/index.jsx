import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";

const ProductDetails = ({ route, navigation }) => {
  const { itemIndex } = route.params;

  useEffect(() => {}, []);
  return (
    <View>
      <Text>ProductDetails {itemIndex}</Text>
    </View>
  );
};

export default ProductDetails;
