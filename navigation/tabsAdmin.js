import React from "react";
import { Image, View,Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import  HomeAdmin  from '../Screens/HomeAdmin';

import { icons, COLORS } from "../constants";
import AddCar from "../Screens/AddCar";

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: true,
    style: {
        height: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },
};

const Tabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case "Listing":
                            return (
                                (
                                    <View Style = {{ width: 50,
                                        height: 50,flexDirection: 'row',}}>
                                    <Image
                                        source={icons.home}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            marginTop :10,
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                    
                                    </View>
                                
                                )
                            );
                            
                        
                        case "Add":
                            return (
                                <View Style = {{ width: '100%',
                                    height: 50,flexDirection: 'row',}}>
                                <Image
                                    source={icons.bookmark}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        marginTop :10,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                                
                                </View>
                            
                            );
                        case "Account":
                            return (
                                <View Style = {{ width: 50,
                                    height: 50,flexDirection: 'row',marginBottom :10}}>
                                
                                <Image
                                    source={icons.user}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        marginTop :10,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                                
                                </View>
                            
                            
                            );
                    }
                }
            })}
        >
            <Tab.Screen
                name="Listing"
                options={{ headerShown: false }}
                component={HomeAdmin}
            />
          
            <Tab.Screen
                name="Add"
                options={{ headerShown: false }}
                component={AddCar}
            />
            <Tab.Screen
                name="Account"
                options={{ headerShown: false }}
                component={HomeAdmin}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
