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

// Wellcome
import WellcomePage from './controllers/wellcome/wellcome';
import ExplanationPage from './controllers/wellcome/explanation';

// Pages
import HomePage from './controllers/home';
import AboutPage from './controllers/about';

//
import LoadImagesPage from './controllers/load_images/load_images';
import EndProcessPage from './controllers/load_images/end_process';

import Tab1Page from './controllers/tabs/tab1';
import Tab2Page from './controllers/tabs/tab2';
import Tab3Page from './controllers/tabs/tab3';

import DashBoard from './controllers/drawer/dashboard';


/*   */
//
const LoadImages = createStackNavigator(
    // Routes
    {
        LoadImages: {
            screen: LoadImagesPage,
        },
        EndProcess: {
            screen: EndProcessPage,
        },
    },
    // Config
    {

        initialRouteName: 'LoadImages',
        headerMode: 'float',
    }
);

const WellcomeStack = createStackNavigator(
    // Routes
    {
        Wellcome: {
            screen: WellcomePage,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        Explanation: {
            screen: ExplanationPage,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        }
    },
    // Config
    {

        initialRouteName: 'Wellcome',
        headerMode: 'none',
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
        Tab1: Tab1Page,
        Tab2: Tab2Page,
        Tab3: Tab3Page,
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
        DashBoard: DashBoard,
    },
    // Config
    {
        initialRouteName: 'DashBoard',
        headerMode: 'float',

    }
);


const DrawerStack = createDrawerNavigator(
    // Routes
    {
        Drawer: {
            screen: StackNavigatorDrawer,
        },
        'Load Images': {
            screen: LoadImages,
        },
        'Tab Version': {
            screen: TabNavigator,
        },
        'Clear All': {
            screen: TabNavigator,
        },
        About: {
            screen: AboutPage
        }
    },
    // Config
    {
        drawerPosition:"right",
        // navigationOptions: {
        //     header: HeaderCustom,
        // },
        contentComponent: DrawerCustom,
        initialRouteName: 'Drawer',
    }
);


const Switch = createSwitchNavigator(
    // List of switch
    {
        LoadImages: LoadImages,
        Tab: TabNavigator,
        Drawer: DrawerStack,
        Wellcome: WellcomeStack
    },
    {
        headerMode: 'none',
        initialRouteName: 'LoadImages',
    }
);
export default createAppContainer(Switch);