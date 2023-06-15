import { View, Text, Image } from "react-native";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <View className="flex-1 space-x-2 w-full flex-row">
      <Image
        source={{ uri: product.images[0] }}
        className="w-1/4 h-[80px]"
        resizeMode="contain"
      />
      <View className=" w-3/4 p-2 items-start justify-start">
        <Text className="font-bold text-lg w-full">{product.title}</Text>
        <Text className="text-gray-500 text-xs w-full">
          {product.description}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
