import React from 'react';
import Home from '../scenes/home/Home';
import Login from '../scenes/login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../scenes/login/SignUp';
import { RootStackParamList } from './RootStackParamList';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();
const StackNavigator = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'Crie sua conta!',
            headerShown: true,
            headerStyle: { backgroundColor: '#0E3361' },
            headerShadowVisible: false,
            headerTintColor: '#FA8837',
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
