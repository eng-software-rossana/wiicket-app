import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { loginStyles } from './loginStyles';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={loginStyles.default}>
      <TextInput
        placeholder="Email"
        onChangeText={newText => setUserEmail(newText)}
        defaultValue={userEmail}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={newText => setPassword(newText)}
        secureTextEntry={true}
        defaultValue={password}
      />

      <Button
        style={buttonStyles.login}
        text="Login"
        onPress={() => navigation.navigate('Home')}
      />

      <Button
        style={buttonStyles.login}
        text="Cadastrar-se"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};
export default Login;
