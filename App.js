import React ,{ Component } from 'react';
import { StyleSheet, View, Text ,StatusBar } from 'react-native';


import Login from './src/pages/Login';
import Logo from './src/components/Logo';
import Form from './src/components/Form';

export default class App extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='rgba(136, 14, 79, 0.9)'
                    barStyle = 'light-content'
                />
                <Logo/>
                <Form/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet? Signup</Text>
                </View>
            </View>
        );
        
    }
}

const styles =StyleSheet.create({
    container:{
        backgroundColor:'#FDD835',
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center'
        },
        signupTextCont:{
            flexGrow:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 16,
        },
        signupText:{
            color:'rgba(136, 14, 79,1)',
            fontSize: 16,
        }
});




