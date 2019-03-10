import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Icon} from 'react-native-elements'

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Tab2',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab2</Text>

                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />


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
