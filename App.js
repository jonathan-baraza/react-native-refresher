import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  StatusBar,
  FlatList,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";
import Register from "./screens/Register";
import NoteItem from "./components/notes/NoteItem";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [allNotes, setAllNotes] = useState([]);
  const [note, setNote] = useState("");
  // const scrollRef = useRef(null);

  const handleAddNote = () => {
    // setAllNotes([...allNotes, note]);
    if (note) {
      // setAllNotes([note, ...allNotes]);
      setAllNotes([...allNotes, note]);
      setNote("");
    }
  };

  const handleDeleteNote = (index) => {
    setAllNotes(allNotes.filter((note, idx) => idx !== index));
  };

  const handleItemPressed = (index) => {
    Alert.alert("Warning", "Are you sure you want to delete this item ?", [
      { text: "CLOSE" },
      { text: "OK", onPress: () => handleDeleteNote(index) },
    ]);
  };

  // useEffect(() => {
  //   scrollRef?.current?.scrollToEnd({ animated: true });
  // }, [allNotes]);

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
          value={note}
          onChangeText={setNote}
        />
        <Button title="ADD NOTE" onPress={handleAddNote} />
      </View>
      <View className="bg-red-100 flex-1 px-6 py-4">
        {/* RenderItem's param must be called Item??? */}
        <FlatList
          scrollToOverflowEnabled
          data={allNotes}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => handleItemPressed(index)}>
              <NoteItem note={item} />
            </Pressable>
          )}
        />
        {/* <ScrollView ref={scrollRef}>
          {allNotes &&
            allNotes.map((note, index) => <NoteItem key={index} note={note} />)}
        </ScrollView> */}
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
