import { useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator, Image } from "react-native";
import { fetchProductDetails } from "../../../utils/products";
import { useRoute } from "@react-navigation/native";
const ProductDetails = ({ route, navigation }) => {
  const { itemId } = route.params;
  //alternatively
  // const route=useRoute();
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const product = await fetchProductDetails(itemId);
      setProduct(product);
      //optional update title
      // navigation.setOptions({ title: product.title });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
        <View>
          <Text className="text-xl m-3 underline font-bold">
            {product.title}
          </Text>
          <Image
            resizeMode="contain"
            className="w-full  h-[40vh]"
            source={{ uri: product.images[0] }}
          />
          <Text>Brand :</Text>
          <Text> {product.brand}</Text>
          <Text>Category :</Text>
          <Text> {product.category}</Text>
          <Text>Description: </Text>
          <Text> {product.description}</Text>
        </View>
      ) : (
        <View className="flex-1 items-center justify-center">
          <Text className="text-red-500">Could not fetch product</Text>
        </View>
      )}
    </View>
  );
};

export default ProductDetails;
