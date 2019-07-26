import React ,{ Component } from 'react';
import { StyleSheet, View, Text ,StatusBar } from 'react-native';


import Navigator from './src/app';
import Form from './src/components/Form'



export default class App extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='rgba(136, 14, 79, 0.9)'
                    barStyle = 'light-content'
                />
                
                <Navigator />
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




