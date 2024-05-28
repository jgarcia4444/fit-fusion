import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PageHeader = ({header}) => {

    return (
        <View style={styles.pageHeaderRow}>
            <Text style={styles.text}>{header}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    pageHeaderRow: {
        width: '100%',
    },
    text: {
        fontWeight: 'bold'
    },
});

export default PageHeader;