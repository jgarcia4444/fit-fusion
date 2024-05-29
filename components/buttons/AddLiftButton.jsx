import { Feather } from '@expo/vector-icons';
import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const AddLiftButton = () => {

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonTouchContainer}>
                <Feather style={{zIndex: 10}} name='plus' size={32} color={'#fff'} />
            </TouchableOpacity>
        </View>
    )
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        top: height * 0.8,
        right: '4%',
        alignItems: 'center',
        zIndex: 10,
    },
    buttonTouchContainer: {
        width: 52,
        height: 52,
        borderRadius: '100%',
        backgroundColor: "#000",
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
})

export default AddLiftButton;