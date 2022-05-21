import React from 'react';
import Home from '../scenes/home/Home';
import Login from '../scenes/login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../scenes/login/SignUp';
import { RootStackParamList } from './RootStackParamList';

const Stack = createNativeStackNavigator<RootStackParamList>();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Faça seu Login', headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
