import React from "react";
import {
      SafeAreaView,
      TouchableOpacity,
      StatusBar,
      StyleSheet,
      Text,
      Image,
      View,
} from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import { Home, Courses, Xd, VideoPage } from "../screens";
import { COLORS, SIZES, icons } from "../constants";
//import Tabs from "../navigation/Tabs";

const theme = {
      ...DefaultTheme,
      colors: {
            ...DefaultTheme.colors,
            border: "transparent",
      },
};

const Stack = createStackNavigator();

function Routes() {
      return (
            <NavigationContainer theme={theme}>
                  <Stack.Navigator initialRouteName={Home}>
                        <Stack.Screen
                              name="Home"
                              component={Home}
                              options={{ headerShown: false }}
                              // options={{
                              //       title: null,
                              //       headerStyle: {
                              //             backgroundColor: COLORS.white,
                              //       },
                              //       headerLeft: null,
                              //       headerRight: () => (
                              //             <TouchableOpacity
                              //                   style={{
                              //                         marginRight:
                              //                               SIZES.padding,
                              //                   }}
                              //                   onPress={() =>
                              //                         console.log("Pressed")
                              //                   }
                              //             >
                              //                   <Image
                              //                         source={icons.barMenu}
                              //                         resizeMode="contain"
                              //                         style={{
                              //                               width: 25,
                              //                               height: 25,
                              //                         }}
                              //                   />
                              //             </TouchableOpacity>
                              //       ),
                              // }}
                        />
                        <Stack.Screen
                              name="Courses"
                              component={Courses}
                              options={{ headerShown: false }}
                        />

                        <Stack.Screen
                              name="VideoPage"
                              component={VideoPage}
                              options={{ headerShown: false }}
                        />
                  </Stack.Navigator>
            </NavigationContainer>
      );
}

export default Routes;
