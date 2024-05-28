import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';

import { Styles } from '../constants/Styles';
import AccountButton from '../components/buttons/AccountButton';

const Lifts = () => {

    const {sharedLayout} = Styles;

    return (
        <SafeAreaView style={styles.liftScreenContainer}>
            <View style={[sharedLayout]}>
                <AccountButton />
                <Text>Lifts Screen</Text>
            </View>
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