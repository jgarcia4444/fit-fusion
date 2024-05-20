import React, {useRef, useState} from 'react'
import { View, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import OverviewSection from './overviewSection/overviewSection';

const LastWorkoutOverview = () => {

    const rotateChevron = useState(new Animated.Value(0))[0];
    const [showDetails, setShowDetails] = useState(false);

    const overviewValues = [
        {sectionLabel: "# of Lifts", sectionValue: "6"},
        {sectionLabel: "Reps Completed", sectionValue: "216"},
    ];

    const renderOverviewSections = () => {
        return overviewValues.map((info, i) => <OverviewSection info={info} key={`${i}-${info.sectionLabel}`} /> )
    }

    const chevronRotateDegree = rotateChevron.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const openAnimation = () => {
        setShowDetails(true);
        Animated.spring(rotateChevron, {
            useNativeDriver: true,
            toValue: 1,
            duration: 400,
        }).start();
    };

    const closeAnimation = () => {
        setShowDetails(false);
        Animated.spring(rotateChevron, {
            useNativeDriver: true,
            toValue: 0,
            duration: 400,
        }).start()
    }

    const handlePress = () => {
        if (showDetails === true) {
            closeAnimation();
        } else {            
            openAnimation();
        }
    }

    return (
        <View style={[styles.overviewRow]}>
            {renderOverviewSections()}
            <Animated.View style={{transform: [{rotate: chevronRotateDegree}]}}>
                <TouchableOpacity onPress={handlePress}>
                    <Feather name="chevron-down" size={28} color={'black'} />
                </TouchableOpacity>
            </Animated.View>
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