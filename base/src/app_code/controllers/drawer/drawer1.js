import React from 'react';
import {StyleSheet, Text, View, Button,SafeAreaView,TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements'

export default class App extends React.Component {


    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            headerStyle: {backgroundColor: '#4C3E54'},
            headerTintColor: 'white',
            title: "Home",
            headerLeft: (
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{flexDirection:"row"}}
                >
                        <Icon
                            name='bars'
                            type='font-awesome'
                            color='#00aced'/>

                </TouchableOpacity>
            ),
        };
    };



    render() {
        return (
            <SafeAreaView  style={styles.container}>
                <Button
                    title="Open Drawer"
                    onPress={() => this.props.navigation.openDrawer()}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />

                <Text>Tab1</Text>


            </SafeAreaView >

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
