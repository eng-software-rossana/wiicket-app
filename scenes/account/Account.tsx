import { AccountDetails, UserContext } from '../../context/UserContext';
import { Text, ToastAndroid, View } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import { HelperText, TextInput } from 'react-native-paper';
import { loginStyles } from '../login/loginStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import { accountStyles } from './accountStyles';

const Account = () => {
  const { email } = useContext(UserContext) as AccountDetails;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [userEmail, setUserEmail] = useState<string>(email);
  const [userName, setUserName] = useState<string>('Cornélio Gomes da Silva');
  const [userID, setUserID] = useState<string>('43266989007');
  const [userAddress, setUserAddress] = useState<string>(
    'Rua dos Jacarandás, José Valter Fortaleza-CE',
  );
  const [userCEP, setUserCEP] = useState<string>('60748409');
  const [showHelperUserCEP, setShowHelperUserCEP] = useState<boolean>(false);

  const isAccountUpdateValid = (): boolean => {
    let valid = false;
    if (userEmail && userName && userID) {
      if (userCEP.length === 8) {
        valid = true;
      }
    } else {
      ToastAndroid.show(
        'Um ou mais campos de cadastro estão preenchidos incorretamente.',
        ToastAndroid.SHORT,
      );
    }
    return valid;
  };

  const limitNumberInput = (newText: string): void => {
    newText = newText.replace(/[^0-9]/g, '');
    setUserCEP(newText);
  };
  const limitUserNameInput = (newText: string): void => {
    newText = newText.replace(/[^a-zA-Z ]*$/g, '');
    setUserName(newText);
  };

  useEffect(() => {
    console.log('Entrou');
    if (userCEP.length === 8 || userCEP.length === 0) {
      setShowHelperUserCEP(false);
    } else {
      console.log('true');
      setShowHelperUserCEP(true);
    }
  }, [userCEP]);

  return (
    <View style={accountStyles.default}>
      <Text style={accountStyles.title}>Dados Pessoais</Text>
      <TextInput
        style={loginStyles.inputStyle}
        theme={{ roundness: 20 }}
        mode={'outlined'}
        placeholder="Email"
        onChangeText={newText => setUserEmail(newText)}
        value={userEmail}
      />

      <TextInput
        style={loginStyles.inputStyle}
        theme={{ roundness: 20 }}
        mode={'outlined'}
        placeholder="Nome Completo"
        onChangeText={newText => limitUserNameInput(newText)}
        value={userName}
        disabled={true}
      />

      <TextInput
        style={loginStyles.inputStyle}
        theme={{ roundness: 20 }}
        mode={'outlined'}
        placeholder="CPF"
        onChangeText={newText => limitNumberInput(newText)}
        keyboardType="numeric"
        value={userID}
        maxLength={11}
        disabled={true}
      />

      <TextInput
        style={loginStyles.inputStyle}
        theme={{ roundness: 20 }}
        mode={'outlined'}
        placeholder="Endereço"
        onChangeText={newText => setUserAddress(newText)}
        value={userAddress}
      />

      <TextInput
        style={loginStyles.inputStyle}
        theme={{ roundness: 20 }}
        mode={'outlined'}
        placeholder="CEP"
        onChangeText={newText => limitNumberInput(newText)}
        keyboardType="numeric"
        value={userCEP}
        maxLength={8}
      />
      {showHelperUserCEP ? (
        <HelperText
          style={loginStyles.errorStyle}
          type="error"
          visible={showHelperUserCEP}>
          O campo de CEP precisa de 8 dígitos
        </HelperText>
      ) : null}

      <Button
        style={buttonStyles.login}
        text="Salvar"
        onPress={() => {
          ToastAndroid.show(
            'Modificações atualizadas com sucesso.',
            ToastAndroid.SHORT,
          );
        }}
      />
    </View>
  );
};

export default Account;
