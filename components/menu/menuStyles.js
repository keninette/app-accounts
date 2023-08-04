import {StyleSheet} from 'react-native';
import Colors from "../../enums/Colors";

const menuStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.main,
    height: 50,
  },
  text: {
    color: '#fff'
  }
});

export default menuStyles;