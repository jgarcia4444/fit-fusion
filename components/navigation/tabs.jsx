import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Tabs = () => {

    return (
        <View style={[styles.tabContainer]}>
            <Text style={styles.tabText}>Hola</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    tabContainer: {
        width: '100%',
        backgroundColor: "#444",
        color: "#fff",
        paddingVertical: 12,
    },
    tabText: {
        color: "#fff",
        fontSize: 20,
    }
})

export default Tabs;