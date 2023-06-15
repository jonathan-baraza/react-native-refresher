import { View, Text, Image } from "react-native";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <View className="flex flex-row space-x-2">
      <Image
        source={{ uri: product.images[0] }}
        className="w-[100px] h-[80px]"
        resizeMode="contain"
      />
      <Text className="font-bold text-lg">{product.title}</Text>
    </View>
  );
};

export default ProductItem;
