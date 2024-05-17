import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import AddLiftButton from '../components/buttons/AddLiftButton';

const Home = () => {

    return (
        <SafeAreaView>
            <Text>Home Screen</Text>
            <AddLiftButton />
        </SafeAreaView>
    )
};

export default Home;