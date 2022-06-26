import { StyleSheet } from 'react-native';

const pcComponentStyles = StyleSheet.create({
  card: {
    flex: 1,
    width: '80%',
    height: 350,
    backgroundColor: '#FFFFFF',
    margin: 10,
    flexDirection: 'column',
  },
  selectedCard: {
    flex: 1,
    width: '80%',
    height: 350,
    backgroundColor: '#FFFFFF',
    margin: 10,
    flexDirection: 'column',
    borderColor: '#FA8837',
    borderWidth: 5,
  },
  cost: {
    color: '#FA8837',
  },
});

export { pcComponentStyles };
