import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";

const NoteItem = ({ note, onPress, index }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(index)}>
      <View className="border-2 border-red-300 mt-3 rounded p-3 bg-white">
        <Text>{note}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NoteItem;
