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
                <Icon
                    name='picture-o'
                    type='font-awesome'
                    color='#00aced'/>

                <Text style={styles.m20}>This is base for apps!</Text>


                <Button
                    title="Next"
                    onPress={() => this.props.navigation.navigate('Explanation')}
                />
            </View>

        );
    }
}


