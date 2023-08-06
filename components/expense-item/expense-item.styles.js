import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  amount: {
    display: 'flex',
    color: 'red',
    fontWeight: 'bold',
  },
  checkbox: {
    display: 'flex',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    width: '100%',
    height: 25,
    backgroundColor: 'white',
  },
  text: {
    display: 'flex',
    color: 'black'
  }
});

export default styles;