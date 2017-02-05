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
    
    constructor (props) {
        super(props);
        this.state = {
            emailInput : 'rgba(255,255,255,0.2)',
            passInput : 'rgba(255,255,255,0.2)'
        };
    }

    render() {
        return ( 
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <View style={styles.buttonContainer}>
                    <TextInput
                        onFocus={ () => this.onFocus(true) }
                        onBlur={ () => this.onBlur(true) }
                        placeholder="Email"
                        placeholderTextColor = "rgba(255,255,255,0.5)"
                        returnKeyType="next"
                        style={styles.input}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        /> 
                    <View style={{backgroundColor : this.state.emailInput , height: 2}}></View>
                </View>
                <View style={styles.buttonContainer}>
                    <TextInput
                        onFocus={ () => this.onFocus(false) }
                        onBlur={ () => this.onBlur(false) }
                        placeholder="Passowrd"
                        placeholderTextColor = "rgba(255,255,255,0.5)"
                        secureTextEntry
                        returnKeyType="go"
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}
                        /> 
                    <View style={{backgroundColor : this.state.passInput , height: 2}}></View>
                </View>
            </View>
        );
    }

    onFocus(input) {
        if(input){
            this.setState({
                emailInput : 'rgba(255,255,255,0.8)'
            })
        }else{
            this.setState({
                passInput : 'rgba(255,255,255,0.8)'
            })
        }
        
    }

    onBlur(input) {
        if(input){
            this.setState({
                emailInput : 'rgba(255,255,255,0.2)'
            })
        }else{
            this.setState({
                passInput : 'rgba(255,255,255,0.2)'
            })
        }
            
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
        paddingLeft : 20,
        paddingRight: 20
    },

    inputUnFocus : {
        backgroundColor : 'rgba(255,255,255,0.2)'
    },

    inputFocus : {
        backgroundColor : 'rgba(255,255,255,0.8)'
    }

});