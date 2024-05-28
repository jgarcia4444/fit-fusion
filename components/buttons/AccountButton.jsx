import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const AccountButton = ({route}) => {

    const navigation = useNavigation();
    // const route = useRoute();

    const dynamicStyle = () => {
        console.log(route)
        // if (route.name === "Account") {
        //     return {
        //         display: 'none'
        //     }
        // }
    }

    return (
        <View style={[styles.buttonRow, dynamicStyle()]}>
            <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.buttonContainer}>
                <Feather name="user" color={'white'} size={24} />
            </TouchableOpacity>
        </View>
    )
} 

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
        backgroundColor: "#000",
        borderRadius: '100%',
        shadowRadius: 4,
        shadowOpacity: 0.75,
        shadowOffset: {
            height: 3,
            width: 0,
        },
    },
    buttonRow: {
        alignItems: 'flex-end',
        width: '100%',
        backgroundColor: "#fff",
        paddingVertical: '2%',
        paddingEnd: "2%"
    }
});

export default AccountButton;