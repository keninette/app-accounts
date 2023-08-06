import React from "react";
import {Text, View} from "react-native";
import styles from "./expense-item.styles";
import {Checkbox} from "expo-checkbox";

const ExpenseItem = ({itemData}) => {
  return (
    <View
      style={styles.row}
    >
      <Checkbox value={itemData.checked} style={styles.checkbox}></Checkbox>
      <Text style={styles.text}>{itemData.label +(itemData.owner ? '(' + itemData.owner +')' : '')}</Text>
      <Text style={styles.amount}>{itemData.amount} €</Text>
    </View>
  );
};

export default ExpenseItem;