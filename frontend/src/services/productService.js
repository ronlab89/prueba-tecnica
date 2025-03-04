import axios from "axios";

const getProducts = async ({ setLoading, handleProductsList }) => {
  try {
    setLoading((prev) => ({ ...prev, products: true }));
    const res = await axios({
      method: "get",
      url: `${import.meta.env.VITE_API_URL}/products`,
    });
    // console.log("Res products: ", res);
    if (res.status === 200) {
      handleProductsList(res.data);
      return res.data.products;
    }
  } catch (error) {
    // console.error(error);
  } finally {
    setLoading((prev) => ({ ...prev, products: false }));
  }
};

export { getProducts };
