import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Notes from "./screens/Notes";
import Register from "./screens/Register";
import Products from "./screens/Products";
import Home from "./screens/Home";

const App = () => {
  return (
    <View className="flex-1" style={styles.container}>
      <Products />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
