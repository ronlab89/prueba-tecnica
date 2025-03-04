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
        id: cartItems.length + 1,
        productId: item.id,
        quantity: item.quantity ?? 1,
        totalPrice: item.price * (item.quantity ?? 1),
      },
    });
    // console.log(res);
    if (res.status === 201) {
      getCartItems({ setLoading, handleCartItems });
      notify("success", res.data.message);
      return res.data;
    }
  } catch (error) {
    // console.log(error);
    notify("error", error?.response?.data?.message[0]);
  } finally {
    setLoading((prev) => ({ ...prev, addItem: false }));
  }
};

const getCartItems = async ({ setLoading, handleCartItems }) => {
  try {
    setLoading((prev) => ({ ...prev, cart: true }));
    const res = await axios({
      method: "get",
      url: `${import.meta.env.VITE_API_URL}/cart`,
    });
    // console.log(res);
    if (res.status === 200) {
      handleCartItems(res.data.data);
      return res.data;
    }
  } catch (error) {
    // console.log(error);
  } finally {
    setLoading((prev) => ({ ...prev, cart: false }));
  }
};

const deleteItemFromCart = async ({
  setLoading,
  id,
  cartItems,
  handleCartItems,
}) => {
  try {
    setLoading((prev) => ({ ...prev, deleteItemFromCart: true }));
    const res = await axios({
      method: "delete",
      url: `${import.meta.env.VITE_API_URL}/cart/${id}`,
    });
    // console.log(res);
    if (res.status === 200) {
      const filteredCartItems = cartItems.filter((item) => item.id !== id);
      handleCartItems(filteredCartItems);
      notify("success", res.data.message);
      return res.data;
    }
  } catch (error) {
    // console.log(error);
    notify("error", error?.response?.data?.message[0]);
  } finally {
    setLoading((prev) => ({ ...prev, deleteItemFromCart: false }));
  }
};

export { addItemtoCart, getCartItems, deleteItemFromCart };
