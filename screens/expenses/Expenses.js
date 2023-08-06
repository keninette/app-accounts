import React from 'react'
import {ScrollView, View} from "react-native";
import Menu from "../../components/menu/Menu";
import ExpenseItem from "../../components/expense-item/ExpenseItem";
import screenStyles from "../screens.styles";
import expensesData from "../../components/data-fetcher/DataFetcher";


const Expenses = (props) => {
  return (
    <View style={screenStyles.container}>
      <ScrollView style={screenStyles.content}>
        { expensesData.map((itemData) => <ExpenseItem key={'expense_' + itemData.id} itemData={itemData}/>) }
      </ScrollView>
      <Menu navigation={props.navigation}></Menu>
    </View>
  );
};

export default Expenses;