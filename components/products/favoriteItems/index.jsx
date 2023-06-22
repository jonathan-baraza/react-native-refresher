import { View, Text, FlatList, Pressable } from "react-native";
import { useContext } from "react";
import { Context } from "../../../context";
import ProductItem from "../ProductItem";
const Favorites = () => {
  const { favoriteItems, addToFavorites, removeFromFavorites } =
    useContext(Context);
  return (
    <View className="flex-1 px-6 ">
      {favoriteItems.length > 0 ? (
        <FlatList
          data={favoriteItems}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <Pressable
              onLongPress={() => {
                removeFromFavorites(item.id);
              }}
            >
              <ProductItem product={item} isFavorite={true} />
            </Pressable>
          )}
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
