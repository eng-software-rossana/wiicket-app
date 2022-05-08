import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Button from '../../components/button/Button';
import { buttonStyles, textStyles } from '../../components/button/buttonStyles';
import { loginStyles } from './loginStyles';

const Login = ({ navigation }: { navigation: any }) => {
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
        onPress={() => navigation.navigate('Home', { name: 'home' })}
      />
    </View>
  );
};
export default Login;
