import React, { useContext, useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { CartContext, ShoppingList } from '../../context/CartContext';
import CartProduct from './CartProduct';
import { cartStyles } from './cartStyles';
const cartImg = '../../assets/cart/cart.png';

const Cart = () => {
  const { cartItems, cost } = useContext(CartContext) as ShoppingList;
  const [cart, setCart] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setCart(
      cartItems.map(product => <CartProduct key={product} id={product} />),
    );
  }, [cartItems]);

  return (
    <View>
      {cost !== 0 ? (
        <Text style={cartStyles.cost}>{`Preço Total: ${cost}`}</Text>
      ) : (
        <></>
      )}

      {cart.length === 0 ? (
        <>
          <View style={cartStyles.emptyCart}>
            <Image style={cartStyles.cartImg} source={require(cartImg)} />
            <Text style={cartStyles.cartLabel}>Seu carrinho está vazio :c</Text>
          </View>
        </>
      ) : (
        <ScrollView style={cartStyles.cartPage}>{cart}</ScrollView>
      )}
    </View>
  );
};

export default Cart;
