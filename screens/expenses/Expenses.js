import React from 'react'
import {Text, View} from "react-native";
import Menu from "../../components/menu/Menu";

const Expenses = (props) => {
  return (
    <View>
      <Text>Expanse</Text>
      <Menu navigation={props.navigation}></Menu>
    </View>
  );
};

export default Expenses;