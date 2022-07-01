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
  navigationView: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 10,
  },
  navigationButton: {
    backgroundColor: '#FA8837',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginHorizontal: 10,
    height: 40,

    width: '32%',
  },
  navigationText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Verdana',
  },
});

export { pcBuildStyles };
