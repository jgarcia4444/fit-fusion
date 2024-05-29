import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const BackgroundGradient = ({children, customStyle}) => {

    return (
        <LinearGradient 
            colors={["#aaa", "#ddd", "#aaa"]}
            style={[styles.container, customStyle]}
        >
            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default BackgroundGradient