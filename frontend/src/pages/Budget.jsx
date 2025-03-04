import { useState } from "react";
import products from "@/data/productsBudget.json";
import { formatterus } from "@/utils/formatter";

const Budget = () => {
  const [productsList, setProductsList] = useState(products);
  const [budget, setBudget] = useState(0);
  const [bestCombination, setBestCombination] = useState(null);

  const findBestCombination = (products, budget) => {
    const allCombinations = getAllCombinations(products);
    const validCombinations = allCombinations.filter(
      (combination) =>
        combination.reduce((total, product) => total + product.price, 0) <=
        budget
    );
    const bestCombination = validCombinations.reduce((best, current) => {
      const currentTotal = current.reduce(
        (total, product) => total + product.price,
        0
      );
      const bestTotal = best.reduce(
        (total, product) => total + product.price,
        0
      );
      return currentTotal > bestTotal ? current : best;
    }, []);
    return setBestCombination(bestCombination);
  };

  const getAllCombinations = (arr) => {
    return arr.reduce(
      (combinations, current) =>
        combinations.concat(
          combinations.map((combination) => [...combination, current])
        ),
      [[]]
    );
  };

  return (
    <section className="w-full h-full px-[40px] py-[50px] flex flex-col md:flex-row md:justify-between gap-10">
      <article className="w-full h-full">
        <h2 className="text-lg md:text-xl font-semibold text-slate-100">
          Presupuesto
        </h2>
        <p className="text-slate-300 mb-5 text-sm md:text-md">
          Encuentra la mejor combinación de productos para tu presupuesto
        </p>
        <p className="font-semibold text-sm md:text-md mb-2">
          Productos disponibles:
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-20">
          <ul className="p-4 rounded-lg shadow-md bg-slate-700 w-fit text-sm md:text-md">
            {productsList.map((product) => (
              <li key={product.id} className="mb-1">
                {product.name} - {formatterus.format(product.price)}
              </li>
            ))}
          </ul>
          <div>
            <div className="flex flex-col gap-2 pt-3.5">
              <label htmlFor="budget" className="text-lg md:text-xl">
                Tu presupuesto:
              </label>
              <input
                onChange={(e) => setBudget(e.target.value)}
                type="number"
                id="budget"
                name="budget"
                className="w-40 px-3 py-2.5 text-sm text-slate-100 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                placeholder="Ingresa tu presupuesto"
              />
            </div>
          </div>
          <div className="md:self-center">
            <button
              onClick={() => {
                findBestCombination(productsList, budget);
              }}
              className="text-white cursor-pointer bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Calcular
            </button>
          </div>
        </div>
      </article>
      <article className="w-full h-full">
        <h3 className="w-fit text-lg md:text-xl font-semibold text-slate-100 flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-40">
          <span>{bestCombination ? "Resultado" : "Esperando resultados"}</span>
          <span>
            Con un Total de:{" "}
            {bestCombination
              ? formatterus.format(
                  bestCombination?.reduce((acc, value) => acc + value.price, 0)
                )
              : formatterus.format(0)}
          </span>
        </h3>
        {bestCombination && (
          <div>
            <p className="text-slate-300 mb-5 text-sm md:text-md">
              Mejor combinación
            </p>
            <p className="font-semibold text-sm md:text-md mb-2">
              Productos combinados:
            </p>
            <div className="flex gap-20">
              <ul className="p-4 rounded-lg shadow-md bg-slate-700 w-fit text-sm md:text-md">
                {bestCombination.map((product) => (
                  <li key={product.id} className="mb-1">
                    {product.name} - {formatterus.format(product.price)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default Budget;
