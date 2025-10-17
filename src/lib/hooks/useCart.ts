import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '@/types';

interface CartStore {
  items: CartItem[];
  total: number;
  itemCount: number;
  
  // Actions
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  
  // Computed values
  getItemQuantity: (productId: string) => number;
  isInCart: (productId: string) => boolean;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      itemCount: 0,

      addItem: (product: Product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(item => item.productId === product.id);
          
          if (existingItem) {
            // Update existing item quantity
            const updatedItems = state.items.map(item =>
              item.productId === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
            
            const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const newItemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
            
            return {
              items: updatedItems,
              total: newTotal,
              itemCount: newItemCount,
            };
          } else {
            // Add new item
            const newItem: CartItem = {
              productId: product.id,
              product,
              quantity,
              price: product.price,
            };
            
            const updatedItems = [...state.items, newItem];
            const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const newItemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
            
            return {
              items: updatedItems,
              total: newTotal,
              itemCount: newItemCount,
            };
          }
        });
      },

      removeItem: (productId: string) => {
        set((state) => {
          const updatedItems = state.items.filter(item => item.productId !== productId);
          const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
          const newItemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
          
          return {
            items: updatedItems,
            total: newTotal,
            itemCount: newItemCount,
          };
        });
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set((state) => {
          const updatedItems = state.items.map(item =>
            item.productId === productId
              ? { ...item, quantity }
              : item
          );
          
          const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
          const newItemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
          
          return {
            items: updatedItems,
            total: newTotal,
            itemCount: newItemCount,
          };
        });
      },

      clearCart: () => {
        set({
          items: [],
          total: 0,
          itemCount: 0,
        });
      },

      getItemQuantity: (productId: string) => {
        const item = get().items.find(item => item.productId === productId);
        return item ? item.quantity : 0;
      },

      isInCart: (productId: string) => {
        return get().items.some(item => item.productId === productId);
      },
    }),
    {
      name: 'terp-haus-cart',
      version: 1,
    }
  )
);

// Custom hook for easier usage
export function useCart() {
  const store = useCartStore();
  
  return {
    ...store,
    // Additional computed values
    isEmpty: store.itemCount === 0,
    hasItems: store.itemCount > 0,
    
    // Helper methods
    addToCart: (product: Product, quantity = 1) => {
      store.addItem(product, quantity);
    },
    
    removeFromCart: (productId: string) => {
      store.removeItem(productId);
    },
    
    setQuantity: (productId: string, quantity: number) => {
      store.updateQuantity(productId, quantity);
    },
    
    incrementQuantity: (productId: string) => {
      const currentQuantity = store.getItemQuantity(productId);
      store.updateQuantity(productId, currentQuantity + 1);
    },
    
    decrementQuantity: (productId: string) => {
      const currentQuantity = store.getItemQuantity(productId);
      if (currentQuantity > 1) {
        store.updateQuantity(productId, currentQuantity - 1);
      } else {
        store.removeItem(productId);
      }
    },
  };
}
