import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

import { Styles } from '../../../constants/Styles';
import HomeSectionText from '../../text/HomeSectionText';
import LastWorkoutOverview from './LastWorkoutOverview';

const LatestWorkout = () => {

    const {homeDetailsContainer} = Styles;

    return (
        <View style={[homeDetailsContainer]}>
            <HomeSectionText content={"Last Workout"} />
            <LastWorkoutOverview />
        </View>
    )
}

export default LatestWorkout;