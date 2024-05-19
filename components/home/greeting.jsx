import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';

const Greeting = () => {

    const dynamicGreeting = () => {
        return "Good Afternoon"
    }

    return (
        <View style={styles.greetingContainer}>
            <Text>{dynamicGreeting()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    greetingContainer: {
    }
});

export default Greeting;