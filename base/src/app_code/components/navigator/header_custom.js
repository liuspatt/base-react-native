
import React from 'react'
import { View } from 'react-native'
import style from '../../../static_files/styles/style';


function Header(props) {
    return (
        <View style={s.headerDash}>
            HEADER
            {props.children}
        </View>
    )
}
export default Header;
