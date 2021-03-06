import React from 'react';
import {View, Text,TouchableOpacity,Platform} from "react-native";
import styles from './../static_files/styles/style'
import { fromLeft,fromRight } from 'react-navigation-transitions';
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


import Tab1Page from './controllers/tabs/tab1';
import Tab2Page from './controllers/tabs/tab2';
import Tab3Page from './controllers/tabs/tab3';

import DashBoard from './controllers/drawer/dashboard';


/* Structure */
/* We create this structure of process like 
    Auth: stackNavigator ( without header )        
    Name_Stack Auth
    - Page 1: Email
        - Name: AuthEmail
        -
    - Page 2: Register
        - Name: AuthRegister
        -
Create all pages in groups and defined components 
At end create a SwitchNavigator to group all components

*/


/* Stack : Wellcome */
/* Pages : 
        WellcomeLoading
        WellcomeExplanation 
*/
const WellcomeStack = createStackNavigator(
    // Routes
    {
        WellcomeLoading: {
            screen: WellcomePage,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        },
        WellcomeExplanation: {
            screen: ExplanationPage,
            navigationOptions: ({ navigation }) => ({
                header: null
            })
        }
    },
    // Config
    {

        initialRouteName: 'WellcomeLoading',
        headerMode: 'none',
        headerStyle: { backgroundColor: '#4C3E54' },
        mode: 'card',
        animationEnabled: true,
        defaultNavigationOptions: {
            headerStyle: {backgroundColor: '#4C3E54'},
            headerTintColor: 'white',
        }, 
        transitionConfig: () => fromRight(300),
    }
);

/* Component End */


/* Stack : Auth */
/* Pages : 
        AuthLoading
        AuthExplanation 
*/
// const AuthStack = createStackNavigator(
//     // Routes
//     {
//         AuthLoading: {
//             screen: AuthPage,
//             navigationOptions: ({ navigation }) => ({
//                 header: null
//             })
//         },
//         AuthExplanation: {
//             screen: ExplanationPage,
//             navigationOptions: ({ navigation }) => ({
//                 header: null
//             })
//         }
//     },
//     // Config
//     {

//         initialRouteName: 'AuthLoading',
//         headerMode: 'none',
//         headerStyle: { backgroundColor: '#4C3E54' },
//         mode: 'card',
//         animationEnabled: true,
//         defaultNavigationOptions: {
//             headerStyle: {backgroundColor: '#4C3E54'},
//             headerTintColor: 'white',
//         }, 
//         transitionConfig: () => fromRight(300),
//     }
// );

/* Component End */

/* Component : Wellcome */
/* Pages : 
        WellcomeLoading 
*/
const LoadImages = createStackNavigator(
    // Routes
    {
        LoadImages: {
            screen: LoadImagesPage,
            navigationOptions: {
                title: "Load images",
            }, 
        }
       
    },
    // Config
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {backgroundColor: '#4C3E54'},
            headerTintColor: 'white',
        }),          
        initialRouteName: 'LoadImages',
        headerMode: 'float',
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
        DashBoard: 
        {   screen:DashBoard,
            navigationOptions: ({navigation}) => ({
                headerStyle: {backgroundColor: '#4C3E54'},
                headerTintColor: 'white',
                title: "Dashboard",
                headerLeft: (
                    <TouchableOpacity
                        style={styles.menubar}
                        onPress={() => navigation.openDrawer()}
                    >
                            <Icon
                                name='bars'
                                type='font-awesome'
                                color='#ffffff'/>
    
                    </TouchableOpacity>
                ),
            }),
        }
        ,
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
        // initialRouteName: 'LoadImages',
        initialRouteName: 'Wellcome',
    }
);
export default createAppContainer(Switch);