import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Button from '../../components/button/Button';
import PCComponent from '../../components/pcComponent/PcComponent';
import TotalCost from '../../components/totalCost/TotalCost';
import { CartContext, ShoppingList } from '../../context/CartContext';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { pcBuildStyles } from '../pcBuild/pcBuildStyles';

const products = [
  {
    productID: '1',
    title:
      'Gabinete Gamer Redragon Wheel Jack, Mid Tower, Lateral e Frontal em Vidro',
    cost: 3599.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/104484/gabinete-gamer-redragon-wheel-jack-mid-tower-rgb-lateral-e-frontal-em-vidro-gc-606bk_gabinete-gamer-redragon-wheel-jack-mid-tower-rgb-lateral-e-frontal-em-vidro-gc-606bk_1571930874_p.jpg',
    description:
      'Gabinete Gamer Redragon Wheel Jack, Mid Tower - Descrição Padrão',
  },
  {
    productID: '2',
    title: 'Gabinete Redragon GRAPPLE, Branco',
    cost: 1299.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/130989/gabinete-redragon-grapple-branco-gc-607wh_1605008049_p.jpg',
    description: 'Gabinete Redragon GRAPPLE - Descrição Padrão',
  },
];

const ResumeOrder = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { clearOrder, cartItems } = useContext(CartContext) as ShoppingList;

  const order = products.map(product => (
    <PCComponent
      key={product.productID}
      productID={product.productID}
      title={product.title}
      cost={product.cost}
      imgURI={product.imgURI}
      description={product.description}
    />
  ));

  // const order = cartItems.map(id =>
  //   //const product = api.getProduct(id);
  //   product.map(attr => {
  //     <PCComponent
  //       key={attr.productID}
  //       productID={attr.productID}
  //       title={attr.title}
  //       cost={attr.cost}
  //       imgURI={attr.imgURI}
  //       description={attr.description}
  //     />;
  //   }),
  // );

  return (
    <View style={pcBuildStyles.page}>
      <Text style={pcBuildStyles.title}>Resumo do Pedido</Text>
      <TotalCost />
      <ScrollView contentContainerStyle={pcBuildStyles.scrollView}>
        {order}
      </ScrollView>
      <View style={pcBuildStyles.navigationView}>
        <Button
          style={pcBuildStyles.navigationButton}
          text="Voltar à Loja"
          textStyle={pcBuildStyles.navigationText}
          onPress={() => {
            //console.log(totalCost);
            clearOrder();
            navigation.navigate('TabHome', { screen: 'Loja' });
          }}
        />
        <Button
          style={pcBuildStyles.navigationButton}
          text="Finalizar Pedido"
          textStyle={pcBuildStyles.navigationText}
          onPress={() => {
            //api.createOrder(componentList);
            navigation.navigate('Payment');
          }}
        />
      </View>
    </View>
  );
};

export default ResumeOrder;
