import { Feather } from '@expo/vector-icons';
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const AddLiftButton = () => {

    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonTouchContainer}>
                <Feather name='plus-circle' size={28} color={'black'} />
            </TouchableOpacity>
        </View>
    )
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    buttonContainer: {
        width: width,
        position: 'absolute',
        top: height * 0.88,
        left: 0,
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
        justifyContent: 'center'
    },
})

export default AddLiftButton;