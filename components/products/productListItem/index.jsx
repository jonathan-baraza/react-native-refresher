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
        className="flex-1 w-full items-center justify-center"
        source={{ uri: item.thumbnail }}
      >
        <View
          className="  rounded-lg px-4 py-2"
          style={{
            backgroundColor: color,
          }}
        >
          <Text
            style={{
              backgroundColor: color,
              opacity: 1,
            }}
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
