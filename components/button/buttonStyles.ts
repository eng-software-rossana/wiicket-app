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

  cart: {
    height: 40,
    width: 40,
    backgroundColor: '#FA8837',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  cartOp: {
    color: '#FFFFFF',
    fontSize: 28,
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
  remove: {
    backgroundColor: '#FA8837',
    alignItems: 'center',
    height: 30,
    width: 140,
    borderRadius: 15,
    marginLeft: 25,
  },
  removeText: {
    color: '#FFFFFF',
    fontFamily: 'Verdana',
  },
});

const textStyles = StyleSheet.create({
  default: {
    color: 'white',
    fontFamily: 'Verdana',
    fontSize: 20,
  },
});

export { textStyles };
export { buttonStyles };
