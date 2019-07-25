import React ,{ Component } from 'react';
import { StyleSheet, View, Text ,StatusBar } from 'react-native';


import Login from './src/pages/Login';
import Signup from './src/pages/Signup';



export default class App extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='rgba(136, 14, 79, 0.9)'
                    barStyle = 'light-content'
                />
                <Signup/>
            </View>
        );
        
    }
}

const styles =StyleSheet.create({
    container:{
        backgroundColor:'#FDD835',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
        }
       
});




