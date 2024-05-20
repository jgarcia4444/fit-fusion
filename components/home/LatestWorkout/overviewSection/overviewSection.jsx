import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

import { Styles } from '../../../../constants/Styles';

const OverviewSection = ({info}) => {

    const {sectionLabel, sectionValue} = info;

    const {overviewLabel, overviewText} = Styles;

    return (
        <View style={[styles.overviewSection]}>
            <Text style={overviewLabel}>{sectionLabel}</Text>
            <Text style={overviewText}>{sectionValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    overviewSection: {

    },
})

export default OverviewSection;