import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: '#00000080',
  },
  innerView: {
    height: 145,
    width: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#006400',
    fontSize: 20,
    marginTop: 10,
  },
  sentence: {
    marginTop: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'green',
    width: 270,
  },
  buttonText: {
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
