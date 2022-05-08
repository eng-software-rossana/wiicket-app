import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import LoginStyles from './Style-Login';

const Login = ({ navigation }: { navigation: any }) => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <TextInput
        style={LoginStyles.textBox}
        placeholder="Email"
        onChangeText={newText => setUserEmail(newText)}
        defaultValue={userEmail}
      />
      <TextInput
        style={LoginStyles.textBox}
        placeholder="Senha"
        onChangeText={newText => setPassword(newText)}
        secureTextEntry={true}
        defaultValue={password}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Home', { name: 'home' })}
      />
    </View>
  );
};

export default Login;
