import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native';

const OverviewLift = ({info}) => {

    const {liftName, sets} = info;

    const renderSets = () => {
        return sets.map((info, i) => {
            const {suppossedReps, repsCompleted, weight} = info;
            return (
                <View style={styles.setRow} key={`${i}-${info.weight}`}>
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
        backgroundColor: "#fff",
        borderRadius: 8,
        width: 250,
        padding: 10,
        margin: 10,
        shadowColor: "#000",
        shadowRadius: 6,
        shadowOffset: {
            height: 3, 
            width: 0
        },
        shadowOpacity: 0.75
    },
    setCol: {

    },
    setRow: {
        flexDirection: 'row',
        marginBottom: 10,
    }
})

export default OverviewLift;