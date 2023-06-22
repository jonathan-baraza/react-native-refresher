import { View, Text, FlatList } from "react-native";
import { useContext } from "react";
import { Context } from "../../../context";
import ProductItem from "../ProductItem";
const Favorites = () => {
  const { favoriteItems, addToFavorites } = useContext(Context);
  return (
    <View className="flex-1 px-6 py-4">
      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default Favorites;
