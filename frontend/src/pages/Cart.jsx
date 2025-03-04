import { lazy, useState, Suspense } from "react";
import { useCartStore } from "@/store/cart.store";
import { formatterus } from "@/utils/formatter";
import { deleteItemFromCart } from "@/services/cartService";
const Loader = lazy(() => import("@/components/Loader"));
import Delete from "@/icons/Delete";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const handleCartItems = useCartStore((state) => state.handleCartItems);
  const [loading, setLoading] = useState({});

  return (
    <section className="w-full h-full px-[40px] py-[50px]">
      <article className="w-full flex justify-center items-center gap-60 mb-10">
        <h2 className="font-semibold text-2xl text-center">
          Articulos en el carrito
        </h2>
        <p className="font-bold text-2xl">
          Total:{" "}
          {formatterus.format(cartItems.reduce((a, b) => a + b.totalPrice, 0))}
        </p>
      </article>
      <article className="w-full h-full flex flex-col justify-start items-center">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 font-semibold text-2xl mt-20">
            No tienes productos en tu carrito
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-full md:max-w-2xl bg-slate-600 border-0 border-slate-100 rounded-lg shadow-sm py-5 px-10 mb-4 flex justify-between items-center"
            >
              <div className="flex items-center gap-5">
                <span>Articulo: {item?.productId?.name}</span>
                <span>Cantidad: {item?.quantity}</span>
                <span>Valor: {item?.totalPrice}</span>
              </div>
              <div
                className="cursor-pointer "
                onClick={() => {
                  deleteItemFromCart({
                    setLoading,
                    id: item.id,
                    cartItems,
                    handleCartItems,
                  });
                }}
              >
                <Delete
                  width={16}
                  height={16}
                  styles="text-red-400 hover:text-red-500 transition-colors"
                />
              </div>
            </div>
          ))
        )}
      </article>
      {loading.deleteItemFromCart ? (
        <Suspense fallback={""}>
          <Loader type={""} />
        </Suspense>
      ) : null}
    </section>
  );
};

export default Cart;
