import { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context";
import ProductListItem from "../components/products/productListItem";

const createRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export default function ProductListing() {
  const { loading, products } = useContext(Context);

  return (
    <View className="flex-1">
      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={"large"} />
          <Text className="mt-3">Loading...</Text>
        </View>
      ) : (
        <>
          {products ? (
            <View className="flex-1">
              <FlatList
                numColumns={2}
                horizontal={false}
                contentContainerStyle={{
                  marginTop: 30,
                  alignItems: "center",
                }}
                data={products}
                keyExtractor={(product) => product.id}
                renderItem={({ item, index }) => (
                  <ProductListItem item={item} color={createRandomColor()} />
                )}
              />
            </View>
          ) : (
            <View className="flex-1 items-center justify-center">
              <Text className="text-red-500">Failed to fetch products</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
