import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Account from '../account/Account';
import Cart from '../cart/Cart';
import Home from './Home';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { StyleSheet } from 'react-native';

const TabHome = () => {
  const Tab = createMaterialBottomTabNavigator();
  const route = useRoute<RouteProp<RootStackParamList, 'TabHome'>>();
  return (
    <Tab.Navigator
      initialRouteName={route.params.screen}
      activeColor="#0E3361"
      inactiveColor="#FFFFFF"
      barStyle={TabHomeStyles.tabNavigator}>
      <Tab.Screen
        name="Loja"
        component={Home}
        options={{ tabBarIcon: 'home' }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Cart}
        options={{ tabBarIcon: 'cart' }}
      />
      <Tab.Screen
        name="Conta"
        component={Account}
        options={{ tabBarIcon: 'account' }}
      />
    </Tab.Navigator>
  );
};

export default TabHome;

const TabHomeStyles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: '#FA8837',
  },
});
