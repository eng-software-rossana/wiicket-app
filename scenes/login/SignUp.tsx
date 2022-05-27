import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import { signUpStyles } from './signUpStyles';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { loginStyles } from './loginStyles';

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);
  const [isConfirmSecure, setIsConfirmSecure] = useState(true);
  const [showHelperPassword, setShowHelperPassword] = useState(false);
  const [showHelperUserID, setShowHelperUserID] = useState(false);

  const limitNumberInput = (newText: string): void => {
    newText = newText.replace(/[^0-9]/g, '');
    setUserID(newText);
  };

  const limitUserNameInput = (newText: string): void => {
    newText = newText.replace(/[^a-zA-Z ]*$/g, '');
    setUserName(newText);
  };

  const isSignUpValid = (): boolean => {
    let valid = false;
    if (userEmail && userName && userID && password && confirmPassword) {
      if (password === confirmPassword) {
        if (userID.length === 11) {
          valid = true;
        }
      }
    }
    return valid;
  };

  useEffect(() => {
    if (password === confirmPassword) {
      setShowHelperPassword(false);
    } else {
      setShowHelperPassword(true);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (userID.length === 11 || userID.length === 0) {
      setShowHelperUserID(false);
    } else {
      setShowHelperUserID(true);
    }
  }, [userID]);

  return (
    <View style={signUpStyles.default}>
      <TextInput
        style={loginStyles.inputStyle}
        placeholder="Email"
        onChangeText={newText => setUserEmail(newText)}
        defaultValue={userEmail}
        value={userEmail}
      />
      <TextInput
        style={loginStyles.inputStyle}
        placeholder="Nome Completo"
        onChangeText={newText => limitUserNameInput(newText)}
        defaultValue={userName}
        value={userName}
      />
      <TextInput
        style={loginStyles.inputStyle}
        placeholder="CPF"
        onChangeText={newText => limitNumberInput(newText)}
        keyboardType="numeric"
        value={userID}
        defaultValue={userID}
        maxLength={11}
      />

      {showHelperUserID ? (
        <HelperText
          style={loginStyles.errorStyle}
          type="error"
          visible={showHelperUserID}>
          O campo de CPF precisa de 11 dígitos
        </HelperText>
      ) : null}

      <TextInput
        style={loginStyles.inputStyle}
        placeholder="Senha"
        onChangeText={newText => setPassword(newText)}
        secureTextEntry={isSecure}
        right={
          <TextInput.Icon
            name={isSecure ? 'eye' : 'eye-off'}
            onPress={() => setIsSecure(!isSecure)}
          />
        }
        defaultValue={password}
        maxLength={16}
      />

      <TextInput
        style={loginStyles.inputStyle}
        placeholder="Confirme sua Senha"
        onChangeText={newText => setConfirmPassword(newText)}
        secureTextEntry={isConfirmSecure}
        right={
          <TextInput.Icon
            name={isConfirmSecure ? 'eye' : 'eye-off'}
            onPress={() => setIsConfirmSecure(!isConfirmSecure)}
          />
        }
        defaultValue={confirmPassword}
        maxLength={16}
      />

      <HelperText
        style={loginStyles.errorStyle}
        type="error"
        visible={showHelperPassword}>
        As senhas não são iguais
      </HelperText>

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
