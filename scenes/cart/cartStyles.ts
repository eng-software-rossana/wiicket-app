import { StyleSheet } from 'react-native';

const cartStyles = StyleSheet.create({
  cartOp: { display: 'flex', flexDirection: 'row', paddingLeft: 75 },
  cartQuantity: {
    fontSize: 18,
    color: '#FFFFFF',
    marginHorizontal: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartFont: { color: '#FFFFFF' },
  cartPage: { backgroundColor: '#005492' },
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
    color: '#000000',
    fontFamily: 'Verdana',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  cartProduct: { backgroundColor: '#005492' },
});

export { cartStyles };
