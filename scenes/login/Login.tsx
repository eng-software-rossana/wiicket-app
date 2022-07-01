import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import { AccountDetails, UserContext } from '../../context/UserContext';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { loginStyles } from './loginStyles';

const logoPath = '../../assets/login/logo_wiicket.png';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);
  const [showHelperLogin, setShowHelperLogin] = useState(false);

  const { updateEmail } = useContext(UserContext) as AccountDetails;

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
      <Image style={loginStyles.titleStyle} source={require(logoPath)} />
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
            if (true) {
              setShowHelperLogin(false);
              updateEmail(userEmail);
              navigation.navigate('TabHome', { screen: 'Loja' });
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
