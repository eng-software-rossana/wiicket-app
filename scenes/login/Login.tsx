import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import Button from '../../components/button/Button';
import { buttonStyles } from '../../components/button/buttonStyles';
import { RootStackParamList } from '../../navigation/RootStackParamList';
import { loginStyles } from './loginStyles';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSecure, setIsSecure] = useState(true);
  const register = 'Cadastrar-se';
  return (
    <View style={loginStyles.loginScreen}>
      {/* <Text style={loginStyles.titleStyle}>Wiicket</Text> */}
      <Image
        style={loginStyles.titleStyle}
        source={require('../../assets/login/logo_wiicket.png')}
      />
      <View style={loginStyles.loginFields}>
        <TextInput
          style={loginStyles.inputStyle}
          placeholder="Email"
          onChangeText={newText => setUserEmail(newText)}
          defaultValue={userEmail}
        />

        <TextInput
          style={loginStyles.inputStyle}
          placeholder="Senha"
          onChangeText={newText => setPassword(newText)}
          secureTextEntry={isSecure}
          defaultValue={password}
        />

        <Button
          style={buttonStyles.login}
          text="Entrar"
          onPress={() => {
            if (
              userEmail === 'comprador@gmail.com' &&
              password === 'wiicket123'
            ) {
              navigation.navigate('Home');
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
