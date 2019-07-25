import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class logo extends Component {
    render() {
        return (
            <View style={styles.container}> 
                {/* <Image
                    style={{ width: 150, height: 150 }}
                    source={require('../images/logo.jpg')}
                /> */}

                <Text style={styles.logotext}>Foood</Text>

            </View>

        );

    }
}

const styles =StyleSheet.create({
    container:{
        flexGrow:1,
        alignItems: 'center',
        justifyContent: 'flex-end'
        },
    logotext:{
        margin: 15,
        fontSize: 50,
        color:'rgba(136, 14, 79, 1)',
        fontFamily: 'lucida grande'
    }    

});