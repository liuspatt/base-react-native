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
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />

                <Text>Tab1</Text>


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
