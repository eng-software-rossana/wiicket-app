import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react';
import { BackHandler, Text, View } from 'react-native';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import TotalCost from '../../components/totalCost/TotalCost';
import { CartContext, ShoppingList } from '../../context/CartContext';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { paymentStyles } from './paymentStyles';
import Clipboard from '@react-native-community/clipboard';
import { ToastAndroid } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const Payment = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  //const cost = useContext(CartContext) as ShoppingList;
  //api.newOrder(cost)
  //const orderID = api.getOrderId(?)
  // const pixCode = 'a56c-4928-93be-9b7bf14beeab';
  const orderID = '123456';

  const { finishOrder } = useContext(CartContext) as ShoppingList;

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={paymentStyles.paymentPage}>
      <TotalCost />
      <Text style={paymentStyles.orderID}>Pedido #{orderID}</Text>
      <QRCode
        value={orderID}
        size={200}
        color="white"
        backgroundColor="transparent"
      />
      <Button
        style={buttonStyles.copyPaymentCode}
        text="Copiar Código Pix"
        onPress={() => {
          Clipboard.setString(orderID);
          ToastAndroid.show(
            'Código Pix copiado para a área de transferência',
            ToastAndroid.SHORT,
          );
        }}
      />
      <Button
        style={buttonStyles.goBackStore}
        text="Voltar a Loja"
        onPress={() => {
          finishOrder();
          navigation.navigate('TabHome', { screen: 'Loja' });
        }}
      />
    </View>
  );
};

export default Payment;
