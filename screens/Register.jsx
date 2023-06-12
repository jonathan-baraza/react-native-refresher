import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

const Register = () => {
  return (
    <View className="flex items-center ">
      <Text className="">Register</Text>
      <Image
        resizeMode="contain"
        className="w-full max-h-[30vh]"
        source={require("../assets/pic2.png")}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
