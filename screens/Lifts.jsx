import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';

import { Styles } from '../constants/Styles';
import AccountButton from '../components/buttons/AccountButton';
import BackgroundGradient from '../shared/background/BackgroundGradient';

const Lifts = () => {

    const {sharedLayout} = Styles;

    return (
        <SafeAreaView style={styles.liftScreenContainer}>
            <BackgroundGradient>
                <View style={[sharedLayout]}>
                    <AccountButton />
                    <Text>Lifts Screen</Text>
                </View>
            </BackgroundGradient>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    liftScreenContainer: {
        height: '100%',
        width: "100%",
    }
})

export default Lifts;