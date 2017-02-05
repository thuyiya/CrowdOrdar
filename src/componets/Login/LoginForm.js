import React, {Component} from 'react';

import { 
    StyleSheet, 
    View, 
    TextInput, 
    TouchableOpacity, 
    Text, 
    StatusBar,
    Alert
} from "react-native"

export default class LoginForm extends Component {
    render() {
        return ( 
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <View style={styles.buttonContainer}>
                    <TextInput 
                        placeholder="Username or Email"
                        placeholderTextColor = "rgba(255,255,255,0.5)"
                        returnKeyType="next"
                        style={styles.input}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        /> 
                    <View style={styles.inputUnFocus}></View>
                </View>
                <View style={styles.buttonContainer}>
                    <TextInput 
                        placeholder="Passowrd"
                        placeholderTextColor = "rgba(255,255,255,0.5)"
                        secureTextEntry
                        returnKeyType="go"
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}
                        /> 
                    <View style={styles.inputUnFocus}></View>
                </View>
            </View>
        );
    }

    onLogin(){
        // Alert.alert('Button has been pressed!');
    }
}

const styles = StyleSheet.create({
    container : {
        padding : 20
    },

    input : {
        height : 40,
        marginBottom : 5,
        color: '#FFF',
        paddingHorizontal : 10
    },

    buttonContainer: {
    
    },

    inputUnFocus : {
        backgroundColor : 'rgba(255,255,255,0.2)',
        height: 2
    }

});