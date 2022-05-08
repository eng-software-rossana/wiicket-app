import { StyleSheet } from 'react-native';

const buttonStyles = StyleSheet.create({
  default: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
  },

  login: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
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
