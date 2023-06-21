import { useEffect, useState } from "react";
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
} from "react-native";
import { fetchProductDetails } from "../../../utils/products";
import { useRoute, useNavigation } from "@react-navigation/native";
const ProductDetails = () => {
  const route = useRoute();
  const { itemId } = route.params;
  //alternatively
  const navigation = useNavigation();

  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

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
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Favorites"
          onPress={() => {
            setModalVisible(true);
            // ToastAndroid.show("hello there", ToastAndroid.SHORT);
            // ToastAndroid.showWithGravity(
            //   "Added to favorites",
            //   ToastAndroid.SHORT,
            //   ToastAndroid.BOTTOM
            // );
          }}
        >
          <Text>Favorite</Text>
        </Button>
      ),
    });
    fetchProduct();
  }, []);
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
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View className="min-h-[40vh] rounded-xl my-auto mx-8 bg-white shadow-2xl p-3 border border-gray-100">
              <TextInput placeholder="Why do you like this product?" />
              <View>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Text>Hide Modal</Text>
                </Pressable>
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
