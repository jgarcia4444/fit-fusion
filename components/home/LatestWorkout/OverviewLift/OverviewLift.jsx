import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native';

const OverviewLift = ({info}) => {

    const {liftName, sets} = info;

    const dynamicBackgroundColor = (index) => {
        var bgColor = 'transparent';
        if (index % 2 !== 0) { 
            bgColor = 'rgba(255,255,255,0.25)';
        }
        return {
            backgroundColor: bgColor,
        };
    }

    const renderSets = () => {
        return sets.map((info, i) => {
            const {suppossedReps, repsCompleted, weight} = info;
            return (
                <View style={[styles.setRow, dynamicBackgroundColor(i)]} key={`${i}-${info.weight}`}>
                    <View style={styles.setCol}>
                        <Text style={styles.detailsLabel}>Reps Predicted</Text>
                        <Text>{suppossedReps}</Text>
                    </View>
                    <View style={styles.setCol}>
                        <Text style={styles.detailsLabel}>Reps Completed</Text>
                        <Text>{repsCompleted}</Text>
                    </View>
                    <View style={styles.setCol}>
                        <Text style={styles.detailsLabel}>Weight</Text>
                        <Text>{weight}</Text>
                    </View>
                </View>
            )
        })
    }



    return (
        <View style={styles.overviewLiftContainer}>
            <View>
                <Text style={styles.liftName}>{liftName}</Text>
            </View>
            <View>
                <Text>{sets.length} set{sets.length > 1 ? "s" : ""}</Text>
            </View>
            <ScrollView style={{height: 80}}>
                {renderSets()}
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    detailsLabel: {
        fontWeight: 'bold',
        color: '#777',
        fontSize: 10,
        marginEnd: 4,
    },
    liftName: {
        fontWeight: "bold",
    },
    overviewLiftContainer: {
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 2,
        width: 275,
        height: 150,
        paddingHorizontal: 10,
        margin: 10,
    },
    setCol: {

    },
    setRow: {
        flexDirection: 'row',
        marginBottom: 5,
        borderRadius: 5,
        padding: 2,
    }
})

export default OverviewLift;