import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Icon} from 'react-native-elements'
import m_api from '../../models/my_app';
import {Store} from '../../hooks/main_store';
import styles from '../../../static_files/styles/style'
export default class App extends React.Component {

    static navigationOptions = {
        title: 'Load Images',
        headerStyle: {backgroundColor: '#4C3E54'},
        headerTintColor: 'white',
    };
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        console.log(this.state)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading images!</Text>
            </View>

        );
    }
}


