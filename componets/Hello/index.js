import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import setName from '../../actions/setName';

const Hello = ({ name, dispatch, navigation }) => (
    <View style={styles.container}>
        <View style={{height: 30}}>
        {
            name.length > 2 ?
                <Text>Hello, my dear { name }</Text>
                :
                null
        }
        </View>
        <TextInput
            placeholder={'Say hi'}
            style={{height: 40, width: '90%', borderColor: '#eee', borderWidth: 1, padding: 10}}
            onChangeText={value => dispatch(setName(value))}
        />
        <Button
            title   = 'Press Me to whatching your images'
            onPress = {() => navigation.navigate('Loadable', { title: 'Loadable Component'})}
        />
    </View>
)

Hello.navigationOptions = {
    title: 'Greeting'
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#fff',
        alignItems: 'center'
    }
});

export default connect(() => state => ({ name: state.name }))(Hello);