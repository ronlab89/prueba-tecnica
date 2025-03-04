import { NavLink } from "react-router-dom";
import { useMenuStore } from "@/store/menu.store";
import { useCartStore } from "@/store/cart.store";
import Cart from "@/icons/Cart";
import Products from "@/icons/Products";
import Test from "@/icons/Test";
import Wallet from "@/icons/Wallet";

const Navbar = () => {
  const linkId = useMenuStore((state) => state.linkId);
  const handleLinkId = useMenuStore((state) => state.handleLinkId);
  const cartItems = useCartStore((state) => state.cartItems);

  const links = [
    {
      id: "products",
      name: "Productos",
      path: "/",
      icon: <Products width={16} height={16} styles="mr-1 md:mr-2" />,
    },
    {
      id: "budget",
      name: "Presupuesto",
      path: "/presupuesto",
      icon: <Wallet width={16} height={16} styles="mr-1 md:mr-2" />,
    },
    {
      id: "cart",
      name: "Carrito",
      path: "/carrito",
      icon: <Cart width={16} height={16} styles="mr-1 md:mr-2" />,
    },
  ];

  return (
    <nav className="w-full h-16 text-white flex justify-between items-center px-[40px]">
      <h1 className="font-semibold flex items-center">
        <Test width={20} height={20} styles="mr-2" />
        <span className="hidden md:block">Prueba Tecnica</span>
      </h1>
      <ul className="flex space-x-4 md:space-x-10">
        {links.map((link) => (
          <NavLink
            key={link?.id}
            to={link?.path}
            className={`${
              linkId === link?.id
                ? "text-cyan-500"
                : "text-slate-100 hover:text-cyan-500 transition-colors"
            } text-xs md:text-sm`}
          >
            <li
              onClick={() => handleLinkId(link.id)}
              className="flex items-center relative"
            >
              <span>{link?.icon}</span>
              <span>{link?.name}</span>
              {link?.id === "cart" ? (
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-cyan-500 border-2 border-white rounded-full -top-3 -end-5 md:-top-3 md:-end-4 dark:border-gray-900">
                  {cartItems.length}
                </div>
              ) : null}
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
