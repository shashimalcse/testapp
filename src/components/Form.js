import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Form extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputbox}
                    placeholder="Email"
                    placeholderTextColor="rgba(136, 14, 79, 0.7)" 
                    />
                <TextInput style={styles.inputbox}
                    placeholder="Password"
                    placeholderTextColor="rgba(136, 14, 79, 0.7)" 
                    secureTextEntry={true}
                    />


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        );

    }
}



const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    inputbox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,

    },
    button: {
        width: 300,
        backgroundColor: 'rgba(136, 14, 79, 0.7)',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 16,

    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'

    }
});