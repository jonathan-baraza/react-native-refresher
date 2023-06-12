import { Text, View, StyleSheet } from "react-native";
import Register from "./screens/Register";

export default function App() {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
