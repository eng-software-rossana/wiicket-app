import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackParamList';
import { StatusBar } from 'react-native';
import Home from '../scenes/home/Home';
import TabHome from '../scenes/home/TabHome';
import SignUp from '../scenes/login/SignUp';
import Login from '../scenes/login/Login';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <>
      <StatusBar translucent={false} backgroundColor={'#0E3361'} />
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
        <Stack.Screen
          name="TabHome"
          component={TabHome}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </>
  );
};

export default StackNavigator;
