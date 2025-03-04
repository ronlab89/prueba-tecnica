import { lazy, Suspense, useState } from "react";
import { formatterus } from "@/utils/formatter";
import { addItemtoCart } from "@/services/cartService";
import { useCartStore } from "@/store/cart.store";
const Loader = lazy(() => import("@/components/Loader"));
import Star from "@/icons/Star";
import Plus from "@/icons/Plus";
import Minus from "@/icons/Minus";

const CardProduct = ({ product }) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const handleCartItems = useCartStore((state) => state.handleCartItems);
  const [loading, setLoading] = useState({});
  const [quantity, setQuantity] = useState({ id: product.id, value: 1 });

  const handleAddItem = (product) => {
    addItemtoCart({
      setLoading,
      item: { ...product, quantity: quantity.value },
      cartItems,
      handleCartItems,
    });
  };

  return (
    <section className="w-full max-w-sm bg-slate-700 border-0 border-slate-100 rounded-lg shadow-sm pt-5">
      <article className="px-5 pb-5">
        <div className="flex justify-between items-center">
          <h5 className="text-sm md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <span className="text-lg md:text-3xl font-bold text-white">
            {formatterus.format(product.price)}
          </span>
        </div>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                width={16}
                height={16}
                styles={`${index === 4 ? "text-gray-400" : "text-yellow-300"}`}
              />
            ))}
          </div>
          <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-end gap-5">
          <div className="text-slate-800 bg-slate-200 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center gap-2">
            <span
              onClick={() => {
                if (quantity.value <= 1) return;
                setQuantity({ id: product.id, value: quantity.value - 1 });
              }}
              className="text-slate-800 hover:text-cyan-400 cursor-pointer"
            >
              <Minus width={16} height={16} styles="" />
            </span>
            <span>{quantity.id === product.id ? quantity.value : 1}</span>
            <span
              onClick={() => {
                setQuantity({ id: product.id, value: quantity.value + 1 });
              }}
              className="text-slate-800 hover:text-cyan-400 cursor-pointer"
            >
              <Plus width={16} height={16} styles="" />
            </span>
          </div>
          <button
            onClick={() => handleAddItem(product)}
            type="button"
            className="text-white cursor-pointer bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </button>
        </div>
      </article>
      {loading.addItem ? (
        <Suspense fallback={""}>
          <Loader type={""} />
        </Suspense>
      ) : null}
    </section>
  );
};

export default CardProduct;
