import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Styles } from '../../constants/Styles';
import HomeSectionText from '../text/HomeSectionText';

const MonthlyWorkouts = () => {

    const {homeDetailsContainer} = Styles;

    return (
        <View style={[homeDetailsContainer,]}>
            <HomeSectionText content={"X amount of workouts this month."} />
        </View>
    )
};

const styles = StyleSheet.create({

})

export default MonthlyWorkouts