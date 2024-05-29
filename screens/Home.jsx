import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import { Styles } from '../constants/Styles';

import Greeting from '../components/home/greeting';
import MonthlyWorkouts from '../components/home/MonthlyWorkouts';
import LatestWorkout from '../components/home/LatestWorkout/LatestWorkout';
import AccountButton from '../components/buttons/AccountButton.jsx';
import BackgroundGradient from '../shared/background/BackgroundGradient.jsx';

const Home = () => {

    const {sharedLayout} = Styles;

    return (
        <SafeAreaView style={styles.homeScreenContainer}>
            <BackgroundGradient>
                <ScrollView contentContainerStyle={[sharedLayout, styles.innerContainer]}>
                    <AccountButton />
                    <Greeting />
                    <MonthlyWorkouts />
                    <LatestWorkout />
                </ScrollView>
            </BackgroundGradient>
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