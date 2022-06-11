import React from 'react';
import { Card, Title } from 'react-native-paper';
import Button from '../button/Button';
import { buttonStyles } from '../button/buttonStyles';
import { productStyles } from './productStyles';

interface Props {
  title: string;
  cost: string;
  imgURI?: string;
  productID?: string;
}

const Product = (props: Props) => {
  return (
    <Card mode="outlined" style={productStyles.card}>
      <Card.Cover source={{ uri: props.imgURI }} />
      <Card.Title title={props.title} />
      <Card.Content>
        <Title>{props.cost}</Title>
      </Card.Content>
      <Card.Actions>
        <Button
          style={buttonStyles.buy}
          text="Comprar"
          onPress={() => console.log(`Comprar ${props.productID}`)}
        />
      </Card.Actions>
    </Card>
  );
};

export default Product;
