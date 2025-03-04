import { useEffect, useState } from "react";
import { useProductStore } from "@/store/products.store";
import { getProducts } from "@/services/productService";
import CardProduct from "@/components/CardProduct";

const Home = () => {
  const productsList = useProductStore((state) => state.productsList);
  const handleProductsList = useProductStore(
    (state) => state.handleProductsList
  );

  const [loading, setLoading] = useState({});

  useEffect(() => {
    if (productsList === null) {
      getProducts({ setLoading, handleProductsList });
    }
  }, []);
  return (
    <section className="w-full h-full px-[40px] py-[75px]">
      <article className="flex flex-col md:flex-row justify-start items-start flex-wrap gap-10">
        {productsList.map((product) => (
          <CardProduct key={product._id} product={product} />
        ))}
      </article>
    </section>
  );
};

export default Home;
