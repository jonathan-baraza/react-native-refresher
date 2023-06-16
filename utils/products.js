import axios from "axios";

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    if (response) {
      return response.data.products;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
  // scrollRef.current.scrollToEnd({ animated: true });
};
