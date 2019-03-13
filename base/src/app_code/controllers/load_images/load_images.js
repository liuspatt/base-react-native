import React, {useContext,useEffect,useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Icon} from 'react-native-elements'
import m_api from '../../models/my_app';
import {Store} from '../../hooks/main_store';
import styles from '../../../static_files/styles/style'

function Controller(props) {
    const {state, dispatch} = useContext(Store);
    const [msg, setMsg] = useState("Loading images!");
    const { navigate } = props.navigation;

    useEffect(() => {
        if(state.list_cats.length === 0) {
            m_api.updateDataAction(dispatch);
            console.log(state.list_cats);
            setMsg("Loaded, redirect in 2 seconds!");
        }
    }, [state]);

    props.list_cats = state.list_cats;
    props.state = {state, dispatch};
    
    if (state.list_cats.length>0){
        
        setTimeout(()=>{            
            setMsg("Loaded, redirect in 1 seconds!");
            setTimeout(()=>{
                navigate('Drawer');
            },1000);
        },1000);
        
    }    
    return (
        
        <View style={styles.container}>
            <Text>{msg}</Text>
        </View>

    );
}

export default Controller;