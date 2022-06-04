import React from 'react';
import PropTypes from 'prop-types';
import { Card, Title } from 'react-native-paper';
import Button from '../button/Button';
import { buttonStyles } from '../button/buttonStyles';
import { productStyles } from './productStyles';

//Product

//name
//image
//price
//add to cart
//product page

interface Props {
  title: string;
  cost: string;
  imgURI?: string;
  productID?: string;
  //'../assets/product/placeholder.png'
}

const Product = (props: Props) => {
  return (
    <Card mode="outlined" style={productStyles.card}>
      <Card.Cover source={{ uri: props.imgURI }} />
      <Card.Title
        title={props.title}
        //left={LeftContent}
      />
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
