import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text className="text-3xl text-red-500">Register</Text>
      {/* <Image style={styles.image} source={require("../assets/pic2.png")} /> */}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    objectFit: "contain",
  },
});
