import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  cartItems: [],
};

// Función para resetear estado
const resetState = (set) => set({ ...initialState });

export const useCartStore = create(
  persist(
    (set, get) => ({
      // Variables
      ...initialState,

      // Methods
      handleCartItems: (data) => {
        set((state) => ({
          cartItems: data,
        }));
      },
      resetCart: () => resetState(set),
    }),
    {
      name: "cart",
      onRehydrateStorage: () => (state) => {
        // console.log("Rehydrating cart state...", state);
      },
    }
  )
);
