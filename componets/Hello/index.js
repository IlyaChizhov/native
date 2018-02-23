import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import setName from '../../actions/setName';

const Hello = ({ name, dispatch }) => (
    <View style={styles.container}>
        <Text>Hello, my dear { name }</Text>
        <TextInput
            placeholder={'Say hi'}
            style={{height: 40, width: '90%', borderColor: '#eee', borderWidth: 1, padding: 10}}
            onChangeText={value => dispatch(setName(value))}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default connect(() => state => ({ name: state.name }))(Hello);