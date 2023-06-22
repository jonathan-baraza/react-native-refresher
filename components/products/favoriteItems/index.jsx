import { View, Text, FlatList } from "react-native";
import { useContext } from "react";
import { Context } from "../../../context";
import ProductItem from "../ProductItem";
const Favorites = () => {
  const { favoriteItems, addToFavorites } = useContext(Context);
  return (
    <View className="flex-1 px-6 ">
      {favoriteItems.length > 0 ? (
        <FlatList
          data={favoriteItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductItem product={item} />}
        />
      ) : (
        <View className="flex-1 items-center justify-center px-4">
          <Text className="text-yellow-500">
            You have no favorite products currently.
          </Text>
        </View>
      )}
    </View>
  );
};

export default Favorites;
