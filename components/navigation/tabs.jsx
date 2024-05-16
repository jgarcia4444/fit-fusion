import React from 'react';
import {StyleSheet, View, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/Home';
import Lifts from '../../screens/Lifts';

const Tabs = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Lifts" component={Lifts}/>
        </Tab.Navigator>
    )
};

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    tabContainer: {
        width: '100%',
        color: "#fff",
        marginBottom: height * 0.05
    },
    tabText: {
        color: "#fff",
        fontSize: 20,
    }
})

export default Tabs;