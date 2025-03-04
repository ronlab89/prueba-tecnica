import { NavLink } from "react-router-dom";
import { useMenuStore } from "@/store/menu.store";
import Cart from "@/icons/Cart";
import Products from "@/icons/Products";
import Test from "@/icons/Test";
import { useCartStore } from "@/store/cart.store";

const Navbar = () => {
  const linkId = useMenuStore((state) => state.linkId);
  const handleLinkId = useMenuStore((state) => state.handleLinkId);
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <nav className="w-full h-16 text-white flex justify-between items-center px-[40px]">
      <h1 className="font-semibold flex items-center">
        <Test width={20} height={20} styles="mr-2" />
        Prueba Tecnica
      </h1>
      <ul className="flex space-x-10">
        <NavLink
          to="/"
          className={`${
            linkId === "products"
              ? "text-cyan-500"
              : "text-slate-100 hover:text-cyan-500 transition-colors duration-300"
          }`}
        >
          <li
            onClick={() => handleLinkId("products")}
            className="flex items-center"
          >
            <span>
              <Products width={16} height={16} styles="mr-2" />
            </span>
            <span>Productos</span>
          </li>
        </NavLink>
        <NavLink
          to="/carrito"
          className={`${
            linkId === "cart"
              ? "text-cyan-500"
              : "text-slate-100 hover:text-cyan-500 transition-colors duration-300"
          }`}
        >
          <li
            onClick={() => handleLinkId("cart")}
            className="flex items-center relative"
          >
            <span>
              <Cart width={16} height={16} styles="mr-2" />
            </span>
            <span>Carrito</span>
            <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-cyan-500 border-2 border-white rounded-full -top-3 -end-4 dark:border-gray-900">
              {cartItems.length}
            </div>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
