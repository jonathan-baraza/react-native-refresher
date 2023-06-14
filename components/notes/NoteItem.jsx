import { View, Text } from "react-native";
import React from "react";

const NoteItem = ({ note }) => {
  return (
    <View className="border-2 border-red-300 mt-3 rounded p-3 bg-white">
      <Text>{note}</Text>
    </View>
  );
};

export default NoteItem;
