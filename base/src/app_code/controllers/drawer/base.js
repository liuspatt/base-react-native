import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Icon} from 'react-native-elements'

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Tab1',
    };

    render() {
        return (
            <View style={styles.container}>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
