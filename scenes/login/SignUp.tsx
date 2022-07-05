import React, { useEffect, useState } from 'react';
import { ToastAndroid, View } from 'react-native';
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
  const [userAddress, setUserAddress] = useState('');
  const [userCEP, setUserCEP] = useState('');
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
    if (
      userEmail &&
      userName &&
      userID &&
      password &&
      confirmPassword &&
      userAddress
    ) {
      if (password === confirmPassword) {
        if (userID.length === 11 && userCEP.length === 8) {
          valid = true;
        }
      }
    } else {
      ToastAndroid.show(
        'Um ou mais campos de cadastro estão preenchidos incorretamente.',
        ToastAndroid.SHORT,
      );
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

  const limitCepInput = (newText: string): void => {
    newText = newText.replace(/[^0-9]/g, '');
    setUserCEP(newText);
  };

  return (
    <View style={signUpStyles.default}>
      <TextInput
        style={loginStyles.inputStyle}
        theme={{ roundness: 20 }}
        mode={'outlined'}
        placeholder="Email"
        onChangeText={newText => setUserEmail(newText)}
        defaultValue={userEmail}
        value={userEmail}
      />
      <TextInput
        style={loginStyles.inputStyle}
        theme={{ roundness: 20 }}
        mode={'outlined'}
        placeholder="Nome Completo"
        onChangeText={newText => limitUserNameInput(newText)}
        defaultValue={userName}
        value={userName}
      />
      <TextInput
        style={loginStyles.inputStyle}
        theme={{ roundness: 20 }}
        mode={'outlined'}
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
        theme={{ roundness: 20 }}
        mode={'outlined'}
        placeholder="Endereço"
        onChangeText={newText => setUserAddress(newText)}
        defaultValue={userAddress}
      />

      <TextInput
        style={loginStyles.inputStyle}
        theme={{ roundness: 20 }}
        mode={'outlined'}
        placeholder="CEP"
        keyboardType="numeric"
        onChangeText={newText => limitCepInput(newText)}
        defaultValue={userCEP}
        maxLength={8}
      />

      <TextInput
        style={loginStyles.inputStyle}
        theme={{ roundness: 20 }}
        mode={'outlined'}
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
        theme={{ roundness: 20 }}
        mode={'outlined'}
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
            // const success : boolean = api.CreateAccount;
            //if (success) ToastAndroid.show('Conta criada com sucesso', ToastAndroid.SHORT);
            //Verificar se o email ao qual foi solicitado o cadastro já existe no nosso banco de dados
            ToastAndroid.show(
              'Cadastro realizado com sucesso.',
              ToastAndroid.SHORT,
            );
            navigation.navigate('Login');
          }
        }}
      />
    </View>
  );
};

export default SignUp;
