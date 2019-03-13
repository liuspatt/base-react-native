import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Icon} from 'react-native-elements'
import styles from '../../../static_files/styles/style'

export default class App extends React.Component {
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
                    onPress={() => this.props.next_page()}
                />
            </View>
        );
    }
}


