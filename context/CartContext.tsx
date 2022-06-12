import { createContext, useState } from 'react';
import React from 'react';

export type ShoppingList = {
  cartItems: string[];
  addCartItem: (cartItem: string) => void;
  removeCartItem: (cartItem: string) => void;
};

interface Props {
  children: React.ReactNode;
}

export const CartContext = createContext<ShoppingList | null>(null);

const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItem] = useState<string[]>([]);
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
  return (
    <CartContext.Provider value={{ cartItems, addCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
