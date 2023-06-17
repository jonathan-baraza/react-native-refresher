import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Notes from "./screens/Notes";
import Register from "./screens/Register";
import Products from "./screens/Products";
import ProductListing from "./screens/ProductListing";
import Favorites from "./components/products/favoriteItem/index.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <View className="flex-1" style={styles.container}>
          <ProductListing />
          <Favorites />
        </View>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
