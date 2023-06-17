import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Notes from "./screens/Notes";
import Register from "./screens/Register";
import Products from "./screens/Products";
import ProductListing from "./screens/ProductListing";
import Favorites from "./components/products/favoriteItem/index.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "./components/products/productDetails";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View className="flex-1" style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="productListing" component={ProductListing} />
          <Stack.Screen name="productDetails" component={ProductDetails} />
          <Stack.Screen name="favorites" component={Favorites} />
        </Stack.Navigator>
      </NavigationContainer>
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
