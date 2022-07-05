import { StyleSheet } from 'react-native';

const productStyles = StyleSheet.create({
  card: {
    width: 300,
    height: 400,
    backgroundColor: '#FFFFFF',
    margin: 10,
    flexDirection: 'column',
  },
  cardProductPage: {
    flex: 1,
    width: '100%',
    height: '50%',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export { productStyles };
