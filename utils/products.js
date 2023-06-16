export const fetchAllProducts = async () => {
  const response = await axios.get("https://dummyjson.com/products");
  //   if (response) {
  //     setAllProducts(response.data.products);
  //     setLoading(false);
  //   }
  return response.data.products;
  // scrollRef.current.scrollToEnd({ animated: true });
};
