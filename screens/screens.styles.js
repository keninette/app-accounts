import {StyleSheet} from 'react-native';
import Colors from "../enums/Colors";

const screenStyles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: Colors.main,
  },
  content: {
    display: 'flex',
    flexGrow: 1
  }
});

export default screenStyles;
