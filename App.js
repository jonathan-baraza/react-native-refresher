import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  StatusBar,
  FlatList,
} from "react-native";
import Register from "./screens/Register";
import NoteItem from "./components/notes/NoteItem";
import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState(["one", "two"]);

  const handleAddNote=()=>{
    
  }
  return (
    <View style={styles.container}>
      <View className="my-4 flex flex-row justify-center">
        <Text className="mr-2 font-bold text-3xl">Nota~Bella</Text>
        <Text className="font-bold text-3xl">📖</Text>
      </View>
      <View className="px-4 pb-8 pt-2 flex-row space-x-2 items-center justify-between">
        <TextInput
          placeholder="Add your note here"
          className="border py-2 px-3 flex-1 rounded-xl  mr-2 border-gray-400"
        />
        <Button title="ADD NOTE" onPress={handleAddNote} />
      </View>
      <View className="bg-red-100 flex-1 px-6">
        {/* RenderItem's param must be called Item??? */}
        <FlatList
          data={notes}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <NoteItem note={item} />}
        />
        {/* {notes && notes.map((note, index) => <NoteItem note={note} />)} */}
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
