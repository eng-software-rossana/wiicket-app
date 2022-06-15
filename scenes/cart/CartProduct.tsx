import React, { useContext, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Card, Text, Title } from 'react-native-paper';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import { CartContext, ShoppingList } from '../../context/CartContext';
import { cartStyles } from './cartStyles';

type Props = {
  id: string;
};

//product = api.getProduct(id);
const product = {
  productID: '1',
  title:
    'Placa de Vídeo GALAX GeForce RTX 3060 (1-Click OC) LHR, 15 Gbps, 12GB GDDR6',
  cost: 3599.99,
  imgURI:
    'https://images.kabum.com.br/produtos/fotos/150657/placa-de-video-galax-geforce-rtx-3060-1-click-oc-15-gbps-12gb-gddr6-ray-tracing-dlss-36nol7md1voc_1614253646_gg.jpg',
  description: 'Placa de Vídeo RTX 3060 - Descrição Padrão',
};

const cartProductStyle = StyleSheet.create({
  imgStyle: {
    width: 180,
    height: 150,
  },
});
const CartProduct = (props: Props) => {
  const { removeCartItem, incrementCost, decrementCost } = useContext(
    CartContext,
  ) as ShoppingList;
  const [quantity, setQuantity] = useState<number>(1);

  function handleIncrement() {
    incrementCost(product.cost);
    let qty = quantity;
    setQuantity(qty + 1);
  }
  function handleDecrement() {
    let qty = quantity;

    if (qty !== 1) {
      setQuantity(qty - 1);
      decrementCost(product.cost);
    }
  }

  function handleRemove() {
    let qty = quantity;
    decrementCost(product.cost * qty);
    removeCartItem(props.id);
  }

  return (
    <Card style={cartStyles.cartProduct} mode="elevated" key={props.id}>
      <Card.Title
        titleNumberOfLines={5}
        titleStyle={cartStyles.cartFont}
        title={`${product.title}`}
      />
      <Card.Content>
        <Title
          style={cartStyles.cartProductPrice}>{`R$ ${product.cost}`}</Title>
        <Image
          source={{ uri: product.imgURI }}
          style={cartProductStyle.imgStyle}
        />
      </Card.Content>
      <Card.Actions>
        <Button
          style={buttonStyles.remove}
          text="Remover"
          onPress={handleRemove}
        />
        <View style={cartStyles.cartOp}>
          <Button
            textStyle={buttonStyles.cartOp}
            style={buttonStyles.cart}
            text="-"
            onPress={handleDecrement}
          />
          <Text style={cartStyles.cartQuantity}>{quantity}</Text>
          <Button
            textStyle={buttonStyles.cartOp}
            style={buttonStyles.cart}
            text="+"
            onPress={handleIncrement}
          />
        </View>
      </Card.Actions>
    </Card>
  );
};

export default CartProduct;
