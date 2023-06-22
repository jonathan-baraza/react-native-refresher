import { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
  Pressable,
  ToastAndroid,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { fetchProductDetails } from "../../../utils/products";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Context } from "../../../context";
const ProductDetails = () => {
  const { addToFavorites, favoriteItems } = useContext(Context);
  const route = useRoute();
  const { itemId } = route.params;
  //alternatively
  const navigation = useNavigation();

  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [reason, setReason] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchProduct = async () => {
    try {
      const product = await fetchProductDetails(itemId);
      setProduct(product);
      //optional update title
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();

    const itemIsFavorite = favoriteItems?.find(
      (item) => item.id === product.id
    );

    setIsFavorite(Boolean(itemIsFavorite));
  }, [favoriteItems]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          android_ripple={{ color: "rgba(255,255,255,0.3)" }}
          onPress={() => {
            if (isFavorite) {
              setReason(
                favoriteItems.find((item) => item.id === product.id)[0].reason
              );
            }
            setModalVisible(true);
          }}
          className={`${
            isFavorite ? "bg-yellow-400" : "bg-[#007acc]"
          } rounded-lg p-2`}
        >
          <Text className="text-white">
            {!isFavorite ? "Add to favorites" : "Update favorite"}
          </Text>
        </Pressable>
      ),
    });
  }, [isFavorite]);

  const handleAddToFavorite = async () => {
    if (!reason)
      return ToastAndroid.show(
        "Please enter a reason for adding to favorites...",
        ToastAndroid.SHORT
      );
    addToFavorites({ ...product, reason });
    setIsFavorite(true);
    setReason("");
    setModalVisible(false);

    //test redirect after adding
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
        <Text className="mt-3">Fetching product details...</Text>
      </View>
    );
  }
  return (
    <View className="flex-1">
      {product ? (
        <>
          <View>
            <Text className="text-xl m-3 underline font-bold">
              {product.title}
            </Text>
            <Image
              resizeMode="contain"
              className="w-full  h-[40vh]"
              source={{ uri: product.images[0] }}
            />
            <View className="px-4">
              <View className="">
                <Text className="font-bold  text-base underline mb  mt-2">
                  Brand{" "}
                </Text>
                <Text className="text-gray-500  text-base">
                  {" "}
                  {product.brand}
                </Text>
              </View>
              <View className="">
                <Text className="font-bold  text-base underline mb  mt-2">
                  Category{" "}
                </Text>
                <Text className="text-gray-500  text-base">
                  {" "}
                  {product.category}
                </Text>
              </View>
              <View className="">
                <Text className="font-bold  text-base underline mb  mt-2">
                  Description{" "}
                </Text>
                <Text className="text-gray-500  text-base">
                  {" "}
                  {product.description}
                </Text>
              </View>
              <View className="flex-row items-center mt-2">
                <Text className="font-bold  text-base  ">Price</Text>
                <Text className="text-gray-500 ml-1  text-base">
                  {" "}
                  Ksh{product.price}/=
                </Text>
              </View>
              <View className="flex-row items-center mt-2">
                <Text className="font-bold  text-base  ">Rating</Text>
                <Text className="text-gray-500 ml-1 text-base">
                  {product.rating}/5.0
                </Text>
              </View>
            </View>
          </View>
          <Modal
            style={{
              backgroundColor: "red",
            }}
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View
              className="flex-1"
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              <View className="h-[35vh] rounded-xl my-auto mx-8 bg-white shadow-2xl p-3 border  border-gray-100">
                <Text className="text-center mx-auto font-bold text-base mt-2 mb-3">
                  {!isFavorite ? " Adding to favories" : "Update reason"}
                </Text>
                <TextInput
                  className="border  h-[55%] border-gray-100 rounded-xl p-2"
                  placeholder="Why do you like this product?"
                  value={reason}
                  onChangeText={setReason}
                />

                <View className="p-2 my-2 flex-row justify-around">
                  <Pressable
                    className="bg-red-400 w-[40%] text-center flex items-center rounded-xl p-2 cursor-pointer "
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text className="text-white">Close</Text>
                  </Pressable>
                  <Pressable
                    className={`bg-${
                      !isFavorite ? "green" : "yellow"
                    }-500 w-[40%] text-center flex items-center rounded-xl p-2 cursor-pointer `}
                    onPress={handleAddToFavorite}
                  >
                    <Text className="text-white">
                      {!isFavorite ? "Add" : "Update"}
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-red-500">Could not fetch product</Text>
        </View>
      )}
    </View>
  );
};

export default ProductDetails;
