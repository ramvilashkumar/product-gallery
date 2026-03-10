import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CartState {
  items: Record<string, number>;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  getTotalCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: {},
      addToCart: productId =>
        set(state => ({
          items: {
            ...state.items,
            [productId]: (state.items[productId] || 0) + 1,
          },
        })),
      removeFromCart: productId =>
        set(state => {
          const newItems = { ...state.items };
          if (newItems[productId] > 1) {
            newItems[productId] -= 1;
          } else {
            delete newItems[productId];
          }
          return { items: newItems };
        }),
      getTotalCount: () =>
        Object.values(get().items).reduce((a, b) => a + b, 0),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => ({ items: state.items }),
    },
  ),
);
