import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import { TouchableOpacity } from 'react-native-gesture-handler';

export  class Signup extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form type="Signup" />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an accountt?</Text>
                    <Text style={styles.signupButton} onPress={() => this.props.navigation.navigate('Login')}>Sign In</Text>
                    
                </View>
            </View>
        );

    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FDD835',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row',
    },
    signupText: {
        color: 'rgba(136, 14, 79,0.8)',
        fontSize: 16,
    },
    signupButton: {
        color: 'rgba(136, 14, 79,1)',
        fontSize: 16,
        fontWeight: '500'
    }
});

