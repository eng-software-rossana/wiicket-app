import { StyleSheet } from 'react-native';

const buttonStyles = StyleSheet.create({
  default: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
  },

  login: {
    alignItems: 'center',
    backgroundColor: '#FA8837',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    height: 50,
    width: '40%',
  },

  buy: {
    alignItems: 'center',
    backgroundColor: '#FA8837',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    height: 50,
    width: '40%',
  },
});

const textStyles = StyleSheet.create({
  default: {
    color: 'white',
    fontFamily: 'Cambria',
    fontSize: 20,
  },
});

export { textStyles };
export { buttonStyles };
