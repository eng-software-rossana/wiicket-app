import { createContext, useState } from 'react';
import React from 'react';

export type ShoppingList = {
  cartItems: string[];
  cost: number;
  addCartItem: (cartItem: string) => void;
  removeCartItem: (cartItem: string) => void;
  incrementCost: (productCost: number) => void;
  decrementCost: (productCost: number) => void;
};

interface Props {
  children: React.ReactNode;
}

export const CartContext = createContext<ShoppingList | null>(null);

const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItem] = useState<string[]>([]);
  const [cost, setCost] = useState<number>(0);
  const addCartItem = (cartItem: string) => {
    if (!cartItems.includes(cartItem)) {
      setCartItem([...cartItems, cartItem]);
    }
  };
  const removeCartItem = (cartItem: string) => {
    let newShoppingList = [...cartItems].filter(function (value) {
      return value !== cartItem;
    });
    setCartItem(newShoppingList);
  };
  const incrementCost = (productCost: number) => {
    let newCost = Number((cost + productCost).toFixed(2));
    setCost(newCost);
  };
  const decrementCost = (productCost: number) => {
    let newCost = Number((cost - productCost).toFixed(2));
    setCost(newCost);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        cost,
        addCartItem,
        removeCartItem,
        incrementCost,
        decrementCost,
      }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
