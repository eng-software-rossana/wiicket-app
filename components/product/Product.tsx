import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Card, Title } from 'react-native-paper';
import { CartContext, ShoppingList } from '../../context/CartContext';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { cartStyles } from '../../scenes/cart/cartStyles';
import Button from '../button/Button';
import { buttonStyles } from '../button/buttonStyles';
import { productStyles } from './productStyles';

interface Props {
  title: string;
  cost: number;
  imgURI?: string;
  productID: string;
  description: string;
}

const Product = (props: Props) => {
  const { cartItems, addCartItem, incrementCost } = useContext(
    CartContext,
  ) as ShoppingList;

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <Card
      mode="outlined"
      style={productStyles.card}
      onPress={() =>
        navigation.navigate('ProductPage', {
          productID: props.productID,
        })
      }>
      <Card.Cover source={{ uri: props.imgURI }} />
      <Card.Title title={props.title} titleNumberOfLines={3} />
      <Card.Content>
        <Title style={cartStyles.cartProductPrice}>{`R$ ${props.cost}`}</Title>
      </Card.Content>
      <Card.Actions>
        <Button
          style={buttonStyles.buy}
          text="Comprar"
          onPress={() => {
            addCartItem(props.productID);
            if (!cartItems.includes(props.productID)) {
              incrementCost(props.cost);
            }
            navigation.navigate('TabHome', {
              screen: 'Carrinho',
            });
          }}
        />
      </Card.Actions>
    </Card>
  );
};

export default Product;
