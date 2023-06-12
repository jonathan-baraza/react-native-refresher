import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex items-center px-6">
        <Image
          resizeMode="contain"
          className="w-full max-h-[30vh]"
          source={require("../assets/pic2.png")}
        />
        <Text className="font-bold  text-2xl mb-4">Register</Text>

        <TextInput
          inputMode=""
          className="border px-4 py-2 border-gray-300 rounded-3xl w-full"
          placeholder="Email"
        />
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
