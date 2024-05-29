import React, {useRef, useState} from 'react'
import { View, StyleSheet, Text, Animated, TouchableOpacity, ScrollView } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

import OverviewSection from './overviewSection/overviewSection';
import OverviewLift from './OverviewLift/OverviewLift';

const LastWorkoutOverview = () => {

    const rotateChevron = useState(new Animated.Value(0))[0];
    const [showDetails, setShowDetails] = useState(false);

    const overviewValues = [
        {sectionLabel: "Name", sectionValue: "Chest & Tri's"},
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

    const renderLifts = () => {
        const lifts = [
            {liftName: "Bench Press (barbell)", sets: [
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
            ]},
            {liftName: "Bench Press (barbell)", sets: [
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
            ]},
            {liftName: "Bench Press (barbell)", sets: [
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
            ]},
            {liftName: "Bench Press (barbell)", sets: [
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
            ]},
            {liftName: "Bench Press (barbell)", sets: [
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
            ]},
            {liftName: "Bench Press (barbell)", sets: [
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
                {suppossedReps: 12, repsCompleted: 12, weight: 135},
            ]},
        ]
        return lifts.map((info, i) => <OverviewLift index={i} key={`${i}-${info.liftName}`} info={info} />)
    }

    const displayLastWorkout = () => {
        return showDetails === true && (
            <ScrollView style={styles.liftScrollView} horizontal={true}>
                {renderLifts()}
            </ScrollView>
        )
    }

    return (
        <View>
            <View style={[styles.overviewRow]}>
                {renderOverviewSections()}
                <Animated.View style={{transform: [{rotate: chevronRotateDegree}]}}>
                    <TouchableOpacity onPress={handlePress}>
                        <Feather name="chevron-down" size={28} color={'black'} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
            {displayLastWorkout()}
        </View>
    )
}

const styles = StyleSheet.create({
    liftScrollView: {
        marginVertical: 20,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'transparent',
    },
    overviewRow: {
        flexDirection: 'row',
        gap: 20,
    }
});

export default LastWorkoutOverview;