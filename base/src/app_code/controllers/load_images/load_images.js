import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Icon} from 'react-native-elements'
import m_api from '../../models/my_app';
import {Store} from '../../hooks/main_store';
import styles from '../../../static_files/styles/style'

function Controller(props) {
    const {state, dispatch} = React.useContext(Store);
    const { navigate } = props.navigation;

    state.msg = "Loading images!";
    React.useEffect(() => {
        state.list_cats.length === 0 && m_api.updateDataAction(dispatch);
        console.log(state.list_cats);
        // is loaded
       
    }, [state]);

    props.list_cats = state.list_cats;
    props.state = {state, dispatch};
    // constructor(props) {
    //     super(props);
    //
    // }
    // componentDidMount() {
    //     console.log(this.state)
    // }
    if (state.list_cats.length>0){
        state.msg = "Loaded, redirect in 2 seconds!";
        setTimeout(()=>{
            navigate('Drawer');
        },2000);
        
    }    
    return (
        
        <View style={styles.container}>
            <Text>{state.msg}</Text>
        </View>

    );
}

export default Controller;