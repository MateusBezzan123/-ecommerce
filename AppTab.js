5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
39;
40;
41;
42;
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppList from "./AppList";
import AppForm from "./AppForm";

const { Navigator, Screen } = createBottomTabNavigator();

function AppTab() {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: 64,
          },
          tabStyle: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
          labelStyle: {
            fontSize: 13,
            marginLeft: 16,
          },
          inactiveBackgroundColor: "#fafafc",
          activeBackgroundColor: "#ebebf5",
          inactiveTintColor: "#c1bccc",
          activeTintColor: "#32264d",
        }}
      >
        <Screen name="AppList" component={AppList} />
        <Screen name="AppForm" component={AppForm} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppTab;
