import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Notes from "./screens/Notes";

const App = () => {
  return (
    <View className="flex-1" style={styles.container}>
      <Notes />
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
