import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";

const ProductListItem = ({ item, color, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: color,
      }}
      activeOpacity={0.7}
      className={`w-[150px] m-2 rounded-lg shadow-xl shadow-gray-950  items-center justify-center px-4  h-[200px] border border-gray-200`}
    >
      <Text className="text-center font-bold text-white">{item.title}</Text>
    </TouchableOpacity>
  );
};

export default ProductListItem;
