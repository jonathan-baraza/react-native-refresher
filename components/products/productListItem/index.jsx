import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";

const ProductListItem = ({ item, color, onPress }) => {
  return (
    <Pressable
      android_ripple={{ color: "#ced474" }}
      onPress={onPress}
      activeOpacity={0.7}
      className={`w-[150px] m-2 rounded-lg shadow-xl shadow-gray-950  items-center justify-center  h-[200px] border border-gray-200`}
    >
      <ImageBackground
        resizeMode="cover"
        className="flex-1 w-full"
        source={{ uri: item.thumbnail }}
      >
        <View
          className="flex-1  rounded-lg px-4"
          style={{
            backgroundColor: color,
          }}
        >
          <Text
            className="text-center font-bold text-white  mx-auto my-auto"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.title}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default ProductListItem;
