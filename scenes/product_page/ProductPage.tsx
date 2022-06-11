import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';
import { Surface } from 'react-native-paper';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { productPageStyles } from './productPageStyles';

const ProductPage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ProductPage'>>();
  // interface Props {
  //   title: string;
  //   cost: string;
  //   imgURI?: string;
  //   productID?: string;
  //   description: string;
  // }
  const productImg = '../../assets/product/placeholder.png';
  const productID = route.params.productID;
  // const product = api.getProduct(productID);
  return (
    <View style={productPageStyles.default}>
      <Text>Product Name</Text>
      <Image source={require(productImg)} />
      <Text>Product Price</Text>
      <Text>Description</Text>
      <Button
        style={buttonStyles.buy}
        text="Comprar"
        onPress={() =>
          //navigation.navigate('Cart')
          console.log('Carrinho')
        }
      />
    </View>
  );
};

export default ProductPage;
