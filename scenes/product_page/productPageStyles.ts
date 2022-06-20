import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

const productPageStyles = StyleSheet.create({
  default: {
    alignItems: 'center',
    flex: 1,
  },
  descriptionLabel: {
    marginTop: 5,
    alignSelf: 'center',
  },
  descriptionContent: {
    fontFamily: 'Verdana',
    fontSize: 18,
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: Colors.grey400,
    borderRadius: 5,
    borderWidth: 1,
  },
});

export { productPageStyles };
