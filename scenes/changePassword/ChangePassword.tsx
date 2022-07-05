import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, ToastAndroid, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { loginStyles } from '../login/loginStyles';
import { changePasswordStyles } from './changePasswordStyles';

const ChangePassword = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showHelperPassword, setShowHelperPassword] = useState(false);
  const [isSecure, setIsSecure] = useState(true);
  const [isConfirmSecure, setIsConfirmSecure] = useState(true);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (password === confirmPassword) {
      setShowHelperPassword(false);
    } else {
      setShowHelperPassword(true);
    }
  }, [password, confirmPassword]);
  return (
    <View style={changePasswordStyles.default}>
      <Text style={changePasswordStyles.title}>Alterar Senha</Text>
      <TextInput
        style={loginStyles.inputStyle}
        theme={{ roundness: 20 }}
        mode={'outlined'}
        placeholder="Nova Senha"
        onChangeText={newText => setPassword(newText)}
        secureTextEntry={isSecure}
        right={
          <TextInput.Icon
            name={isSecure ? 'eye' : 'eye-off'}
            onPress={() => setIsSecure(!isSecure)}
          />
        }
        value={password}
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
        value={confirmPassword}
        maxLength={16}
      />
      <HelperText
        style={loginStyles.errorStyle}
        type="error"
        visible={showHelperPassword}>
        As senhas não são iguais
      </HelperText>
      <Button
        style={buttonStyles.changePassword}
        text="Alterar Senha"
        onPress={() => {
          if (password && confirmPassword) {
            if (password === confirmPassword) {
              setPassword('');
              setConfirmPassword('');
              ToastAndroid.show(
                'Senha alterada com sucesso.',
                ToastAndroid.SHORT,
              );
              navigation.navigate('Account');
            }
          } else {
            ToastAndroid.show(
              'Os campos devem estar preenchidos.',
              ToastAndroid.SHORT,
            );
          }
        }}
      />
    </View>
  );
};

export default ChangePassword;
