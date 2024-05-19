import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';

const Greeting = () => {

    const dynamicTimeGreeting = () => {
        let today = new Date();
        let hour = today.getHours();
        let timeGreeting;
        if (hour < 12) {
            timeGreeting = "Good Morning";
        } else if (hour > 11 && hour < 16) {
            timeGreeting = "Good Afternoon";
        } else {
            timeGreeting = "Good Evening";
        }
        return timeGreeting;
    };

    const motivationText = () => {
        let texts = ["Get after it!", "Kill your workout!", "Lift those weights!"];
        let randomIndex = Math.floor(Math.random() * texts.length);
        return texts[randomIndex];
    }

    return (
        <View style={styles.greetingContainer}>
            <Text>{dynamicTimeGreeting()}</Text>
            <Text>{motivationText()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    greetingContainer: {
    }
});

export default Greeting;