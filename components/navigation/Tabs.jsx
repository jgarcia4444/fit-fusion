import React from 'react';
import {TouchableHighlight, View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../../screens/Home';
import Lifts from '../../screens/Lifts';

const Tabs = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#ccc",
                tabBarActiveBackgroundColor: "#000",
                tabBarInactiveBackgroundColor: "#333",
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({size, focused, color}) => (<Feather name="home" size={28} color={color} />),
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen 
                name="Lifts" 
                component={Lifts}
                options={{
                    tabBarIcon: ({size, focused, color}) => <Feather color={color} size={28} name="user" />
                }}
            />
        </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    addLiftNavContainer: {

    }
})

export default Tabs;