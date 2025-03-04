import { useEffect, useState } from "react";
import { useProductStore } from "@/store/products.store";
import { getProducts } from "@/services/productService";
import CardProduct from "@/components/CardProduct";
import { useCartStore } from "@/store/cart.store";
import { getCartItems } from "@/services/cartService";

const Home = () => {
  const productsList = useProductStore((state) => state.productsList);
  const handleProductsList = useProductStore(
    (state) => state.handleProductsList
  );
  const cartItems = useCartStore((state) => state.cartItems);
  const handleCartItems = useCartStore((state) => state.handleCartItems);

  const [loading, setLoading] = useState({});

  useEffect(() => {
    if (productsList === null) {
      getProducts({ setLoading, handleProductsList });
    }
    if (cartItems.length === 0) {
      getCartItems({ setLoading, handleCartItems });
    }
  }, []);
  return (
    <section className="w-full h-full px-[40px] py-[75px]">
      <article className="flex flex-col md:flex-row justify-start items-start flex-wrap gap-10">
        {productsList === null ? (
          <p className="text-center text-gray-500">Cargando productos...</p>
        ) : (
          productsList.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))
        )}
      </article>
    </section>
  );
};

export default Home;
