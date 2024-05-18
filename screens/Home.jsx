import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import Greeting from '../components/home/greeting';

const Home = () => {

    return (
        <SafeAreaView>
            <Greeting />
        </SafeAreaView>
    )
};

export default Home;