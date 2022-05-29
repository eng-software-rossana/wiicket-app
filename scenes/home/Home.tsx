import { Text } from '@rneui/base';
import React from 'react';
import { View } from 'react-native';
import HeaderBar from '../../components/headerBar/HeaderBar';

//const productList = backend.getProducts();
const Home = () => {
  return (
    <View>
      <HeaderBar />
      <View>
        <Text>Wicket</Text>
      </View>
      <Text>Aqui é a home :D</Text>
    </View>
  );
};

export default Home;
