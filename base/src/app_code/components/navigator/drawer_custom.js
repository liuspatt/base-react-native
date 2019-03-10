import React from 'react';
import {  Text, View,SafeAreaView, ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation';


const DrawerContent = (props) => (
    <View>
        <View
            style={{
                backgroundColor: '#f50057',
                height: 140,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text style={{ color: 'white', fontSize: 30 }}>
                Header
            </Text>
        </View>
        <DrawerItems {...props} />
    </View>
)

export default DrawerContent