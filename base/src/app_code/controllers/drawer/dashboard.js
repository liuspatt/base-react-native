import React from 'react';
import {StyleSheet, Text, View, Button,SafeAreaView,TouchableOpacity,Image } from 'react-native';
import {Icon} from 'react-native-elements'
import styles from '../../../static_files/styles/style'
import {Store} from '../../hooks/main_store';


export default function Controller(props) {
    const {state, dispatch} = React.useContext(Store);
    const { navigate } = props.navigation;
    list_cats=state.list_cats
    console.log(list_cats);


    return (
        <SafeAreaView  style={styles.container}>


            <Text>List of images not loaded yet</Text>
            <Text>Go to drawer menu and click in load images </Text>

            {
                    list_cats.map((item, i) => {
                        return (                           
                            <Image 
                                style={{width: 150, height: 150}}
                                source={{uri: item.url}}
                            ></Image>
                        )
                    })
            }

        </SafeAreaView >

    )    
}
