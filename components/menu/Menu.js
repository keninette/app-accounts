import React from 'react'
import {Button, View, Text} from "react-native";
import menuStyles from "./menuStyles";
import Tabs from "../../enums/Tabs";
// We can access navigation object via context

const Menu = (navigation) => {
  return (
    <View style={menuStyles.container}>
      { Tabs.map((tab) => {
        return (
            <Button
              key={tab.id}
              title={tab.id}
              onPress={() => { navigation.navigate(tab.id)}}
            />
          );
        })
      }
    </View>
  );
};

export default Menu;