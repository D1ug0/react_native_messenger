import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

const Splash = () => (
    <View style={styles.container}>
        <Text>Loading...</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default Splash