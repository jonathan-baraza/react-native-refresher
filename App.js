import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  StatusBar,
} from "react-native";
import Register from "./screens/Register";

export default function App() {
  return (
    <View style={styles.container}>
      <View className="px-4 py-8 flex-row space-x-2 items-center justify-between">
        <TextInput
          placeholder="Add your note here"
          className="border py-2 px-3 flex-1 rounded-xl  mr-2 border-gray-400"
        />
        <Button title="ADD NOTE" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
