import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Card, Title } from 'react-native-paper';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import Button from '../button/Button';
import { buttonStyles } from '../button/buttonStyles';
import { productStyles } from './productStyles';

interface Props {
  title: string;
  cost: string;
  imgURI?: string;
  productID?: string;
  description: string;
}

const Product = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <Card
      mode="outlined"
      style={productStyles.card}
      onPress={
        () =>
          navigation.navigate('ProductPage', {
            productID: props.productID,
          })
        //console.log('Product Page')
      }>
      <Card.Cover source={{ uri: props.imgURI }} />
      <Card.Title title={props.title} />
      <Card.Content>
        <Title>{props.cost}</Title>
      </Card.Content>
      <Card.Actions>
        <Button
          style={buttonStyles.buy}
          text="Comprar"
          onPress={() =>
            //navigation.navigate('Cart')
            console.log('Carrinho')
          }
        />
      </Card.Actions>
    </Card>
  );
};

export default Product;
