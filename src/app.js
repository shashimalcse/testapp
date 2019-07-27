import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import {Login} from './pages/Login';
import {Signup} from './pages/Signup';


const AppNavigator = createStackNavigator(
    {
        Login:Login,
        Signup:Signup
    },{
        initialRouteName:'Login',
        headerMode: 'none',
    }
    
);
export default createAppContainer(AppNavigator);