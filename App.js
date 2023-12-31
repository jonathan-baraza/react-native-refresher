import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  Pressable,
  ToastAndroid,
} from "react-native";
import React from "react";
import Notes from "./screens/Notes";
import Register from "./screens/Register";
import Products from "./screens/Products";
import ProductListing from "./screens/ProductListing";
import Favorites from "./components/products/favoriteItems/index.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "./components/products/productDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductContext from "./context";
import AnimationIndex from "./screens/AnimationIndex";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: "Products List",
        }}
        name="productsListing"
        component={ProductListing}
      />
      <Tab.Screen
        options={{ title: "Favorites" }}
        name="favorites"
        component={Favorites}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return <AnimationIndex />;
};

// const App = () => {
//   return (
//     <ProductContext>
//       <View className="flex-1" style={styles.container}>
//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen
//               options={{ headerShown: false }}
//               name="bottomTabs"
//               component={BottomTabs}
//             />
//             <Stack.Screen
//               options={{
//                 title: "Product",
//               }}
//               name="productDetails"
//               component={ProductDetails}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </View>
//     </ProductContext>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
