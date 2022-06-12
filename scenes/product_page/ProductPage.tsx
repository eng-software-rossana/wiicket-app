import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import { CartContext, ShoppingList } from '../../context/CartContext';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { productPageStyles } from './productPageStyles';

const ProductPage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ProductPage'>>();
  const productImg = '../../assets/product/placeholder.png';
  const productID = route.params.productID;
  // const product = api.getProduct(productID);
  const { addCartItem } = useContext(CartContext) as ShoppingList;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={productPageStyles.default}>
      <Text>Product Name</Text>
      <Image source={require(productImg)} />
      <Text>Product Price</Text>
      <Text>Description</Text>
      <Button
        style={buttonStyles.buy}
        text="Comprar"
        onPress={() => {
          if (productID) {
            addCartItem(productID);
          }
          console.log('Carrinho');
          navigation.navigate('TabHome', {
            screen: 'Carrinho',
          });
        }}
      />
    </View>
  );
};

export default ProductPage;
