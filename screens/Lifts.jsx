import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';

import { Styles } from '../constants/Styles';

const Lifts = () => {

    const {sharedLayout} = Styles;

    return (
        <SafeAreaView>
            <View style={[sharedLayout]}>
                <Text>Lifts Screen</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    liftScreenContainer: {
    }
})

export default Lifts;