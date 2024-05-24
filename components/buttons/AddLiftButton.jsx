import { Feather } from '@expo/vector-icons';
import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const AddLiftButton = () => {

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonTouchContainer}>
                <Feather style={{zIndex: 10}} name='plus-circle' size={32} color={'black'} />
            </TouchableOpacity>
        </View>
    )
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        top: height * 0.88,
        left: (width / 2) - 24,
        alignItems: 'center',
        zIndex: 10,
    },
    buttonTouchContainer: {
        width: 48,
        height: 48,
        borderRadius: '100%',
        backgroundColor: "#fff",
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0,
        zIndex: 10,
        shadowOpacity: 0,
    },
})

export default AddLiftButton;