import { StyleSheet } from 'react-native';

const pcBuildStyles = StyleSheet.create({
  page: { backgroundColor: '#005492', flex: 1 },
  title: {
    fontSize: 36,
    alignSelf: 'center',
    fontFamily: 'Verdana',
    color: '#FA8837',
    fontWeight: 'bold',
  },
  category: {
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: 'Verdana',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  scrollView: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  continue: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FA8837',
    padding: 10,
    margin: 20,
    borderRadius: 30,
    height: 50,
    width: '50%',
  },
});

export { pcBuildStyles };
