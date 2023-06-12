import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex items-center ">
        <Image
          resizeMode="contain"
          className="w-full max-h-[30vh]"
          source={require("../assets/pic2.png")}
        />
        <Text className="font-bold  text-2xl">Register</Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
