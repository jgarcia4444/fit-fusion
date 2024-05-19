import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';

import { Styles } from '../../constants/Styles';
import HomeSectionText from '../text/HomeSectionText';

const Greeting = () => {

    const {homeDetailsContainer} = Styles;

    const dynamicTimeGreeting = () => {
        let today = new Date();
        let hour = today.getHours();
        let timeGreeting;
        if (hour < 12) {
            timeGreeting = "Good Morning";
        } else if (hour > 11 && hour < 17) {
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
        <View style={[homeDetailsContainer, styles.greetingContainer]}>
            <HomeSectionText content={dynamicTimeGreeting()} customStyles={styles.greetingText} />
            <Text style={styles.motivationText}>{motivationText()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    greetingContainer: {
        alignItems: 'center',
        textAlign: 'left',
    },
    greetingText: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        borderBottomEndRadius: 3,
        borderBottomStartRadius: 3,       
    },
    motivationText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default Greeting;