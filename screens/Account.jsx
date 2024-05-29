import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import PageHeader from '../components/text/PageHeader';

const Account = () => {
    
    return (
        <View style={styles.accountScreen}>
            <PageHeader header={"Account"} />
        </View>
    )
};

const styles = StyleSheet.create({
    accountScreen: {
        flex: 1,
    }
})

export default Account