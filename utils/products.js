export const fetchAllProducts = async () => {
  const response = await axios.get("https://dummyjson.com/products");
  if (response) {
    return response.data.products;
  } else {
    return false;
  }
  // scrollRef.current.scrollToEnd({ animated: true });
};
