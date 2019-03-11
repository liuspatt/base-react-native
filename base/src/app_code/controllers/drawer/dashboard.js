import React from 'react';
import {StyleSheet, Text, View, Button,SafeAreaView,TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements'
import styles from '../../../static_files/styles/style'
export default class App extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            headerStyle: {backgroundColor: '#4C3E54'},
            headerTintColor: 'white',
            title: "Dashboard",
            headerLeft: (
                <TouchableOpacity
                    style={styles.menubar}
                    onPress={() => navigation.openDrawer()}
                >
                        <Icon
                            name='bars'
                            type='font-awesome'
                            color='#ffffff'/>

                </TouchableOpacity>
            ),
        };
    };

    render() {
        return (
            <SafeAreaView  style={styles.container}>


                <Text>List of images not loaded yet</Text>
                <Text>Go to drawer menu and click in load images </Text>




            </SafeAreaView >

        );
    }
}
