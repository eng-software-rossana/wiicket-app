import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Account from '../account/Account';
import Cart from '../cart/Cart';
import Home from './Home';
import { StyleSheet } from 'react-native';

const TabHome = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      activeColor="#0E3361"
      inactiveColor="#cfc8c8"
      barStyle={TabHomeStyles.tabNavigator}>
      <Tab.Screen
        name="Início"
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
