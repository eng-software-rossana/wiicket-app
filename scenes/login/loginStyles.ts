import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  loginScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#C4C4C4',
  },

  inputStyle: {
    width: '80%',
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
  },

  registerStyle: {
    justifyContent: 'flex-start',
    color: '#0759de',
    paddingTop: 20,
  },

  titleStyle: {
    flex: 1,
    resizeMode: 'contain',
    aspectRatio: 0.8,
  },

  loginFields: {
    paddingBottom: 200,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { loginStyles };
