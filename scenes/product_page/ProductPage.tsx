import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import { productStyles } from '../../components/product/productStyles';
import { CartContext, ShoppingList } from '../../context/CartContext';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { cartStyles } from '../cart/cartStyles';
import { productPageStyles } from './productPageStyles';

const ProductPage = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ProductPage'>>();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const productID = route.params.productID;
  const json_data = {
    productID: '1',
    title:
      'Placa de Vídeo GALAX GeForce RTX 3060 (1-Click OC) LHR, 15 Gbps, 12GB GDDR6',
    cost: 3599.99,
    imgURI:
      'https://images.kabum.com.br/produtos/fotos/150657/placa-de-video-galax-geforce-rtx-3060-1-click-oc-15-gbps-12gb-gddr6-ray-tracing-dlss-36nol7md1voc_1614253646_gg.jpg',
    description:
      'Como todas as GPUs GeForce RTX Series, a GeForce RT 3060 oferece suporte à trifeta das inovações em jogos da GeForce: NVIDIA DLSS, NVIDIA Reflex e NVIDIA Broadcast, que aceleram o desempenho e melhoram a qualidade da imagem. Juntamente com o rastreamento de raios em tempo real, essas tecnologias são a base da plataforma de jogos GeForce, que oferece desempenho e recursos incomparáveis para jogos e jogadores em todos os lugares. Equipado com ventoinhas gêmeas de 90 mm e design prático especial para dissipação de calor, a textura e aparência de carbono exclusivas trazem o máximo de frescor da placa.',
  };
  const { cartItems, addCartItem, incrementCost } = useContext(
    CartContext,
  ) as ShoppingList;

  return (
    <View style={productPageStyles.default}>
      <ScrollView>
        <Card mode="outlined" style={productStyles.cardProductPage}>
          <Card.Cover source={{ uri: json_data.imgURI }} />
          <Card.Title titleNumberOfLines={5} title={json_data.title} />
          <Card.Content>
            <Title
              style={
                cartStyles.cartProductPrice
              }>{`R$ ${json_data.cost}`}</Title>
            <Button
              style={buttonStyles.buy}
              text="Comprar"
              onPress={() => {
                if (productID) {
                  addCartItem(productID);
                  if (!cartItems.includes(productID)) {
                    incrementCost(json_data.cost);
                  }
                  navigation.navigate('TabHome', {
                    screen: 'Carrinho',
                  });
                }
              }}
            />
            <Title style={productPageStyles.descriptionLabel}>Descrição:</Title>
            <Paragraph style={productPageStyles.descriptionContent}>
              {json_data.description}
            </Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

export default ProductPage;
