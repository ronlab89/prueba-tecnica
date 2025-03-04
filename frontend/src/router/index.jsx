import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "@/layouts/LayoutPublic";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
const Cart = lazy(() => import("@/pages/Cart"));
const Budget = lazy(() => import("@/pages/Budget"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "carrito",
        element: (
          <Suspense fallback={""}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "presupuesto",
        element: (
          <Suspense fallback={""}>
            <Budget />
          </Suspense>
        ),
      },
    ],
  },
]);
