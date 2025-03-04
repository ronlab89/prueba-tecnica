import axios from "axios";
import { notify } from "@/utils/alertNotify";

const addItemtoCart = async ({
  setLoading,
  item,
  cartItems,
  handleCartItems,
}) => {
  try {
    setLoading((prev) => ({ ...prev, addItem: true }));
    const res = await axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/cart`,
      data: {
        id: getCartItems.length + 1,
        productId: item.id,
        quantity: 1,
        price: item.price,
      },
    });
    console.log(res);
    if (res.status === 201) {
      const newCartItems = [...cartItems, res.data];
      handleCartItems(newCartItems);
      notify("success", res.data.message);
      return res.data;
    }
  } catch (error) {
    console.log(error);
    notify("error", error?.response?.data);
  } finally {
    setLoading((prev) => ({ ...prev, addItem: false }));
  }
};

const getCartItems = async (setLoading) => {
  try {
    setLoading((prev) => ({ ...prev, cart: true }));
    const res = await axios({
      method: "get",
      url: `${import.meta.env.VITE_API_URL}/cart`,
    });
    console.log(res);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading((prev) => ({ ...prev, cart: false }));
  }
};

export { addItemtoCart, getCartItems };
