import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Icon} from 'react-native-elements'
import styles from '../../../static_files/styles/style'
export default class App extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {backgroundColor: '#4C3E54'},
        headerTintColor: 'white',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Icon
                    name='user'
                    type='font-awesome'
                    color='#00aced'/>
                <Icon
                    name='bars'
                    type='font-awesome'
                    color='#00aced'/>

                <Button
                    title="Go to Drawer"
                    onPress={() => this.props.navigation.navigate('Drawer')}
                />

                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('About')}
                />

                <Button
                    title="Go to tabs"
                    onPress={() => this.props.navigation.navigate('Tab1')}
                />
            </View>

        );
    }
}


