import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Notes from "./screens/Notes";

const App = () => {
  return (
    <View className="flex-1">
      <Notes />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
