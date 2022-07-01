import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import CartProvider from './context/CartContext';
import UserProvider from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
