import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";

const ProductDetails = ({ route, navigation }) => {
  const { itemIndex } = route.params;

  useEffect(() => {
    console.log("route.params");
    console.log(route.params);
  }, []);
  return (
    <View>
      <Text>ProductDetails {itemIndex}</Text>
      <Text>huhu</Text>
      <Button onPress={() => console.log(route.params)} title="press me" />
    </View>
  );
};

export default ProductDetails;
