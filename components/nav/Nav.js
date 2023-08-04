import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Tabs from "../../enums/Tabs";

const Stack = createNativeStackNavigator();

const Nav = (props) => {
  return (
    <Stack.Navigator>
        { Tabs.map((tab) => {
            return (
              <Stack.Screen
                key={tab.id}
                name={tab.id}
                component={tab.component}
              ></Stack.Screen>
            );
          })
        }
    </Stack.Navigator>
    );
};

export default Nav;