import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const AccountButton = () => {

    return (
        <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Feather name="user" color={'white'} size={24} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
        backgroundColor: "#000",
        borderRadius: '50%',
    },
    buttonRow: {
        alignItems: 'flex-end',
        width: '100%',
        backgroundColor: "#fff",
        paddingTop: '2%',
        paddingEnd: "2%"
    }
});

export default AccountButton;