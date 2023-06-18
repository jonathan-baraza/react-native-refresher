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

export default function ProductListing() {
  const { loading, products } = useContext(Context);
  const colors = [
    "red",
    "pink",
    "green",
    "orange",
    "blue",
    "yellow",
    "teal",
    "violet",
  ];

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
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                      backgroundColor: colors[index],
                    }}
                    className={`w-[150px] m-2 rounded-lg shadow-xl shadow-gray-950  items-center justify-center  h-[200px] border border-gray-200`}
                  >
                    <Text className="text-center">
                      {item.title} {colors[index]}
                    </Text>
                  </TouchableOpacity>
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
