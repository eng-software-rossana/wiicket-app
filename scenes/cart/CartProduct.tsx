import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, Text, Title } from 'react-native-paper';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';

type Props = {
  id: string;
};

const cartProductStyle = StyleSheet.create({
  imgStyle: {
    width: 150,
    height: 150,
  },
});

const CartProduct = (props: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  function handleIncrement() {
    let qty = quantity;
    setQuantity(qty + 1);
  }
  function handleDecrement() {
    let qty = quantity;
    setQuantity(qty - 1);
  }
  return (
    <Card mode="outlined" key={props.id}>
      <Card.Title title={`Fake title:${props.id}`} />
      <Card.Content>
        <Title>{'R$ 10000'}</Title>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={cartProductStyle.imgStyle}
        />
      </Card.Content>
      <Card.Actions>
        <Button style={buttonStyles.cart} text="-" onPress={handleDecrement} />
        <Text>{quantity}</Text>
        <Button style={buttonStyles.cart} text="+" onPress={handleIncrement} />
      </Card.Actions>
    </Card>
  );
};

export default CartProduct;
