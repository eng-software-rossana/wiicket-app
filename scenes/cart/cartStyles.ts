import { StyleSheet } from 'react-native';

const cartStyles = StyleSheet.create({
  cartPage: { backgroundColor: '#005492', width: '100%', height: '100%' },
  cartOp: { display: 'flex', flexDirection: 'row', paddingLeft: 75 },
  cartProductPrice: {
    color: '#FA8837',
  },
  cartQuantity: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 8,
    marginHorizontal: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartFont: { color: '#FFFFFF' },
  cost: { margin: 10 },
  emptyCart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartImg: {
    maxWidth: 150,
    maxHeight: 150,
  },
  cartLabel: {
    margin: 10,
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Verdana',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  cartProduct: { backgroundColor: '#005492' },
  cartCurrentCost: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FA8837',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginTop: 10,
    height: 50,
    width: '70%',
  },
  cartContinue: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FA8837',
    padding: 10,
    marginBottom: 20,
    borderRadius: 30,
    height: 50,
    width: '50%',
  },
});

export { cartStyles };
