import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const productPageStyles = StyleSheet.create({
  default: {
    alignItems: 'center',
    flex: 1,
  },
  descriptionLabel: {
    marginTop: 15,
    alignSelf: 'center',
  },
  descriptionContent: {
    fontFamily: 'Verdana',
    fontSize: 18,
    textAlign: 'center',
  },
});

export { productPageStyles };
