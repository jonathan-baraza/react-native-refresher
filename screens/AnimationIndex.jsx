import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

const AnimationIndex = () => {
  return (
    <View style={styles.container} className="flex-1">
      <Text>AnimationIndex</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default AnimationIndex;
