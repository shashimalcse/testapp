import React ,{ Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Login extends Component{
    render(){
        return(
           <View style={styles.container}>
               <Text>hi</Text>
           </View>
        );
        
    }
}



const styles =StyleSheet.create({
    container:{
        backgroundColor:'rgba(136, 14, 79, 1)',
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'center'
        }
});