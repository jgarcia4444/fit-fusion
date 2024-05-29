import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Styles } from '../../constants/Styles';
import HomeSectionText from '../text/HomeSectionText';
import BackgroundGradient from '../../shared/background/BackgroundGradient';

const MonthlyWorkouts = () => {

    const {homeDetailsContainer} = Styles;

    return (
        <View style={[homeDetailsContainer, styles.motivationContainer]}>
            <HomeSectionText content={"X amount of workouts this month."} />
        </View>
    )
};

const styles = StyleSheet.create({
    motivationContainer: {
    }
})

export default MonthlyWorkouts