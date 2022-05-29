import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { loginStyles } from './loginStyles';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);
  const [showHelperLogin, setShowHelperLogin] = useState(false);

  const loginValidations = () => {
    let valid = false;
    let validUser =
      userEmail === 'comprador@gmail.com' && password === 'wiicket123';
    if (userEmail && password) {
      if (validUser) {
        valid = true;
      }
    }
    return valid;
  };

  return (
    <View style={loginStyles.loginScreen}>
      <Image
        style={loginStyles.titleStyle}
        source={require('../../assets/login/logo_wiicket.png')}
      />
      <View style={loginStyles.loginFields}>
        <TextInput
          style={loginStyles.inputStyle}
          theme={{ roundness: 20 }}
          mode={'outlined'}
          placeholder="Email"
          onChangeText={newText => setUserEmail(newText)}
          defaultValue={userEmail}
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
        />

        <HelperText
          style={loginStyles.errorStyle}
          type="error"
          visible={showHelperLogin}>
          Email ou senha inválido
        </HelperText>

        <Button
          style={buttonStyles.login}
          text="Entrar"
          onPress={() => {
            if (loginValidations()) {
              setShowHelperLogin(false);
              navigation.navigate('Home');
            } else {
              setShowHelperLogin(true);
            }
          }}
        />
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={loginStyles.registerStyle}>
          Novo no Wiicket? Cadastre-se
        </Text>
      </View>
    </View>
  );
};
export default Login;
