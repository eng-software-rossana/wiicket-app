import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CartContext, ShoppingList } from '../../context/CartContext';
import { cartStyles } from '../../scenes/cart/cartStyles';
import { textStyles } from '../button/buttonStyles';

const TotalCost = () => {
  const { cost } = useContext(CartContext) as ShoppingList;
  return (
    <TouchableOpacity
      disabled={true}
      style={cartStyles.cartCurrentCost}
      onPress={() => {
        true;
      }}>
      <Text style={textStyles.default}>{`Preço Total: R$ ${cost.toFixed(
        2,
      )}`}</Text>
    </TouchableOpacity>
  );
};

export default TotalCost;
