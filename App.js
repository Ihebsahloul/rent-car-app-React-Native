import React from "react";
import {
    Image,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider } from "./Context/CarContext";

// screens
import { Onboarding, CarDetail,SignInScreen,AddCar } from "./Screens/";
// extra screens
import Tabs from "./navigation/tabs";

import { icons, COLORS, SIZES } from './constants';
import { useFonts } from 'expo-font';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black" : require('./assets/fonts/gilroy_black.ttf'),
        "Roboto-Bold" : require('./assets/fonts/GilroyBold.ttf'),
        "Roboto-Medium" : require('./assets/fonts/GilroyMedium.ttf'),
        "Roboto-Regular" : require('./assets/fonts/gilroy_regular.ttf'),

    })
    
    if(!loaded){
    return null;
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                initialRouteName={'Onboarding'}
                screenOptions={{
    headerShown: false
  }}
            >
                {/* Screens */}
                <Stack.Screen
                    name="Onboarding"
                    headerShown = {false}
                    component={Onboarding}
                    
                />

                <Stack.Screen
                    name="DestinationDetail"
                    component={CarDetail}
                    
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="SignInScreen"
                    component={SignInScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AddCar"
                    component={AddCar}
                    options={{ headerShown: false }}
                />
                

                {/* Tabs */}
                < Stack.Screen
                    name="Home"
                    component={Tabs}
                    options={{ headerShown: false }}
                    
                />


            </Stack.Navigator>
        </NavigationContainer >
    );
};
export default () => {
    return <Provider>
      <App/>
    </Provider>
  } ;
