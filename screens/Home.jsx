import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import { Styles } from '../constants/Styles';

import Greeting from '../components/home/greeting';
import MonthlyWorkouts from '../components/home/MonthlyWorkouts';
import LatestWorkout from '../components/home/LatestWorkout/LatestWorkout';
import AddLiftButton from '../components/buttons/AddLiftButton.jsx'
import AccountButton from '../components/buttons/AccountButton.jsx';

const Home = () => {

    const {sharedLayout} = Styles;

    return (
        <SafeAreaView style={styles.homeScreenContainer}>
            <View style={[sharedLayout, styles.innerContainer]}>
                <AccountButton />
                <Greeting />
                <MonthlyWorkouts />
                <LatestWorkout />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    homeScreenContainer: {
        width: '100%',
        height: '100%',
    },
    innerContainer: {
        gap: 40,
    }
})

export default Home;