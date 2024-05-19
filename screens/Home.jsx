import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

import { Styles } from '../constants/Styles';

import Greeting from '../components/home/greeting';

const Home = () => {

    const {sharedLayout} = Styles;

    return (
        <SafeAreaView style={styles.homeScreenContainer}>
            <View style={[sharedLayout,]}>
                <Greeting />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    homeScreenContainer: {
        width: '100%',
        height: '100%',
    }
})

export default Home;