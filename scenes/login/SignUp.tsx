import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import { signUpStyles } from './signUpStyles';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, validatePathConfig } from '@react-navigation/native';
import { loginStyles } from './loginStyles';

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userCPF, setUserCPF] = useState('');
  const [password, setPassword] = useState('');

  const limitNumberInput = (newText: string): void => {
    newText = newText.replace(/[^0-9]/g, '');
    setUserCPF(newText);
  };

  const isSignUpValid = (): boolean => {
    let valid = false;
    if (userEmail && userName && userCPF && password) {
      valid = true;
    }
    return valid;
  };

  return (
    <View style={signUpStyles.default}>
      <TextInput
        style={loginStyles.inputStyle}
        placeholder="Email"
        onChangeText={newText => setUserEmail(newText)}
        defaultValue={userEmail}
      />
      <TextInput
        style={loginStyles.inputStyle}
        placeholder="Nome Completo"
        onChangeText={newText => setUserName(newText)}
        defaultValue={userName}
      />
      <TextInput
        style={loginStyles.inputStyle}
        placeholder="CPF"
        onChangeText={newText => limitNumberInput(newText)}
        keyboardType="numeric"
        value={userCPF}
        defaultValue={userCPF}
        maxLength={11}
      />
      <TextInput
        style={loginStyles.inputStyle}
        placeholder="Senha"
        onChangeText={newText => setPassword(newText)}
        secureTextEntry={true}
        defaultValue={password}
        maxLength={16}
      />

      <Button
        style={buttonStyles.login}
        text="Cadastrar-se"
        onPress={() => {
          if (isSignUpValid()) {
            navigation.navigate('Login');
          }
        }}
      />
    </View>
  );
};

export default SignUp;
