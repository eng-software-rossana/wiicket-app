import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import { signUpStyles } from './signUpStyles';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userCPF, setUserCPF] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={signUpStyles.default}>
      <TextInput
        placeholder="Email"
        onChangeText={newText => setUserEmail(newText)}
        defaultValue={userEmail}
      />
      <TextInput
        placeholder="Nome Completo"
        onChangeText={newText => setUserName(newText)}
        defaultValue={userName}
      />
      <TextInput
        placeholder="CPF"
        onChangeText={newText => setUserCPF(newText)}
        defaultValue={userCPF}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={newText => setPassword(newText)}
        secureTextEntry={true}
        defaultValue={password}
      />

      <Button
        style={buttonStyles.login}
        text="Cadastrar-se"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default SignUp;
