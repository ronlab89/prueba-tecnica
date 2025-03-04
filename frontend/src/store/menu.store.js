import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  linkId: "products",
};

// Función para resetear estado
const resetState = (set) => set({ ...initialState });

export const useMenuStore = create(
  persist(
    (set, get) => ({
      // Variables
      ...initialState,

      // Methods
      handleLinkId: (id) => {
        // console.log(`Setting linkId to: ${id}`);
        set((state) => ({
          linkId: id,
        }));
      },
      resetMenu: () => resetState(set),
    }),
    {
      name: "menu",
      onRehydrateStorage: () => (state) => {
        // console.log("Rehydrating menu state...", state);
      },
    }
  )
);
