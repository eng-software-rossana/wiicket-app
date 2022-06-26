import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const paymentStyles = StyleSheet.create({
  paymentPage: {
    paddingTop: 30,
    backgroundColor: '#005492',
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  orderID: {
    marginTop: 50,
    marginBottom: 30,

    color: 'white',
    fontFamily: 'Verdana',
    fontSize: 30,
    margin: 10,
  },
});

export { paymentStyles };
