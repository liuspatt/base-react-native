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
                <Text style={styles.m20}>We have 3 sections</Text>
                <Text style={styles.m10}>- Well come </Text>
                <Text style={styles.m10}>- Drawer ( dashboard ) </Text>
                <Text style={styles.m10}>- Button load with redirect ( list of api )  </Text>
                <Text style={styles.m10}>- Button load with redirect ( list of api )  </Text>


                <Button style={styles.m20}
                    title="Next"
                    onPress={() => this.props.next_page()}
                />
            </View>

        );
    }
}


