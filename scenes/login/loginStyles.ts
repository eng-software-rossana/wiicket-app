import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  loginScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#0E3361',
  },

  inputStyle: {
    width: '80%',
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },

  registerStyle: {
    justifyContent: 'flex-start',
    color: '#FA8837',
    paddingTop: 20,
    fontSize: 18,
  },

  errorStyle: {
    justifyContent: 'flex-start',
    color: '#FA0202',
    paddingBottom: 20,
    fontSize: 14,
    //transform: [{ translateY: 1 }],
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
