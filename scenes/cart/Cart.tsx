import React, { useContext } from 'react';
import { View } from 'react-native';
import { CartContext, ShoppingList } from '../../context/CartContext';
import CartProduct from './CartProduct';

const Cart = () => {
  const { cartItems, removeCartItem } = useContext(CartContext) as ShoppingList;
  const cart = cartItems.map(product => (
    <CartProduct key={product} id={product} />
  ));
  return <View>{cart}</View>;
};

export default Cart;
