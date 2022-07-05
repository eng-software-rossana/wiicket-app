import { StyleSheet } from 'react-native';

const accountStyles = StyleSheet.create({
  default: {
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E3361',
    flex: 1,
  },
  title: {
    fontSize: 30,
    alignSelf: 'flex-start',
    fontFamily: 'Verdana',
    color: '#FA8837',
    paddingLeft: 30,
    marginBottom: 100,
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
  exitButton: {
    backgroundColor: '#FA8837',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: 25,
    marginLeft: 180,
    height: 40,

    width: '20%',
  },
  navigationText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Verdana',
  },
  exitText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Verdana',
  },
});

export { accountStyles };
