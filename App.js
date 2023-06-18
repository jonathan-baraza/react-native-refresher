import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import React from "react";
import Notes from "./screens/Notes";
import Register from "./screens/Register";
import Products from "./screens/Products";
import ProductListing from "./screens/ProductListing";
import Favorites from "./components/products/favoriteItem/index.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "./components/products/productDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="productsListing" component={ProductListing} />
      <Tab.Screen name="favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <View className="flex-1" style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="bottomTabs"
            component={BottomTabs}
          />
          <Stack.Screen name="productDetails" component={ProductDetails} />
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
