import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Button from '../../components/button/Button';
import TotalCost from '../../components/totalCost/TotalCost';
import { CartContext, ShoppingList } from '../../context/CartContext';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import CartProduct from './CartProduct';
import { cartStyles } from './cartStyles';
const cartImg = '../../assets/cart/cart.png';

const Cart = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { cartItems, cost } = useContext(CartContext) as ShoppingList;
  const [cart, setCart] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setCart(
      cartItems.map(product => <CartProduct key={product} id={product} />),
    );
  }, [cartItems]);

  return (
    <View style={cartStyles.cartPage}>
      {cost !== 0 ? <TotalCost /> : <></>}

      {cart.length === 0 ? (
        <>
          <View style={cartStyles.emptyCart}>
            <Image style={cartStyles.cartImg} source={require(cartImg)} />
            <Text style={cartStyles.cartLabel}>Seu carrinho está vazio :c</Text>
          </View>
        </>
      ) : (
        <>
          <ScrollView style={cartStyles.cartPage}>{cart}</ScrollView>
          <Button
            style={cartStyles.cartContinue}
            text="Finalizar"
            onPress={() => {
              navigation.navigate('Payment');
            }}
          />
        </>
      )}
    </View>
  );
};

export default Cart;
