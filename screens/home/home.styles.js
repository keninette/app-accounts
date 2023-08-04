import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    display: 'flex',
    alignSelf: 'flex-start',
    objectFit: 'contain',
    width: '100%',
    height: '40%',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: '#fff'
  },
  'text--red': {
    color: 'red'
  },
  'text--green': {
    color: 'green'
  },
});

export default styles;