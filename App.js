import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Notes from "./screens/Notes";
import Register from "./screens/Register";
import Products from "./screens/Products";
import ProductListing from "./screens/ProductListing";

const App = () => {
  return (
    <View className="flex-1" style={styles.container}>
      <ProductListing />
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
