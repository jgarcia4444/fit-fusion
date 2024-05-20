import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import OverviewSection from './overviewSection/overviewSection';

const LastWorkoutOverview = () => {

    const overviewValues = [
        {sectionLabel: "# of Lifts", sectionValue: "6"},
        {sectionLabel: "Reps Completed", sectionValue: "216"},
    ];

    const renderOverviewSections = () => {
        return overviewValues.map((info, i) => <OverviewSection info={info} key={`${i}-${info.sectionLabel}`} /> )
    }

    return (
        <View style={[styles.overviewRow]}>
            {renderOverviewSections()}

        </View>
    )
}

const styles = StyleSheet.create({
    overviewRow: {
        flexDirection: 'row',
        gap: 40,
    }
});

export default LastWorkoutOverview;