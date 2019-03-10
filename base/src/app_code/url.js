import React from 'react';
import {View, Text} from "react-native";
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator,
    createDrawerNavigator,
    NavigationActions,
    DrawerItems
} from 'react-navigation'
import {Icon} from 'react-native-elements'
import DrawerCustom from './components/navigator/drawer_custom'
import HeaderCustom from './components/navigator/header_custom'


// Pages
import HomePage from './controllers/home';
import AboutPage from './controllers/about';

import Tab1 from './controllers/tabs/tab1';
import Tab2 from './controllers/tabs/tab2';
import Tab3 from './controllers/tabs/tab3';

import Drawer1 from './controllers/drawer/drawer1';
import Drawer2 from './controllers/drawer/drawer2';
import Drawer3 from './controllers/drawer/drawer3';

/*   */
//
const StackNavigator = createStackNavigator(
    // Routes
    {
        Home: {
            screen: HomePage,
            headerStyle: {backgroundColor: '#4C3E54'},
            headerTintColor: 'white',
        },
        About: {
            screen: AboutPage
        }
    },
    // Config
    {

        initialRouteName: 'Home',
        headerMode: 'float',
        headerStyle: { backgroundColor: '#4C3E54' },

        navigationOptions: ({navigation}) => ({
            headerStyle: {backgroundColor: '#4C3E54'},
            headerTintColor: 'white',
        })
    }
);

const TabNavigator = createBottomTabNavigator(
    // Routes
    {
        Tab1: Tab1,
        Tab2: Tab2,
        Tab3: Tab3,
    },
    // Config
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                if (routeName === 'Tab1') {
                    iconName = `bars`;
                } else if (routeName === 'Tab2') {
                    iconName = `user`;
                } else if (routeName === 'Tab3') {
                    iconName = `glass`;
                }

                // You can return any component that you like here!
                return <Icon
                    name={iconName}
                    type='font-awesome'
                    color='#00aced'/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);


const StackNavigatorDrawer = createStackNavigator(
    // Routes
    {
        Drawer1: Drawer1,
        Drawer2: Drawer2,
        Drawer3: Drawer3,
    },
    // Config
    {
        initialRouteName: 'Drawer1',
        headerMode: 'float',
        navigationOptions: ({navigation}) => ({
            headerStyle: {backgroundColor: '#4C3E54'},
            title: 'Welcome!',
            headerTintColor: 'white',
        })

    }
);


const DrawerStack = createDrawerNavigator(
    // Routes
    {
        Drawer1: {
            path: '/',
            screen: StackNavigatorDrawer,
        },
        Drawer2: Drawer2,
        Drawer3: Drawer3,
    },
    // Config
    {

        // navigationOptions: {
        //     header: HeaderCustom,
        // },
        contentComponent: DrawerCustom,
        initialRouteName: 'Drawer1',
    }
);


const Switch = createSwitchNavigator(
    // List of switch
    {
        Stack: StackNavigator,
        Tab: TabNavigator,
        Drawer: DrawerStack,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Stack',
    }
);
export default createAppContainer(Switch);