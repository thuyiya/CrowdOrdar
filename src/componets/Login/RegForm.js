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

export default class RegForm extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            inputLine : false,
            no : 0
        };
    }

    render() {
        return ( 
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <View style={styles.buttonContainer}>
                    <TextInput
                        onFocus={ () => this.onFocus(1) }
                        onBlur={ () => this.onBlur(1) }
                        placeholder="Your Email"
                        placeholderTextColor = "rgba(255,255,255,0.5)"
                        returnKeyType="next"
                        style={styles.input}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        /> 
                    <View style={this.state.inputLine && this.state.no == 1 ? styles.inputFocus : styles.inputUnFocus}></View>
                </View>
                <View style={styles.buttonContainer}>
                    <TextInput
                        onFocus={ () => this.onFocus(2) }
                        onBlur={ () => this.onBlur(2) }
                        placeholder="Your Passowrd"
                        placeholderTextColor = "rgba(255,255,255,0.5)"
                        secureTextEntry
                        onSubmitEditing={() => this.repasswordInput.focus()}
                        returnKeyType="next"
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}
                        /> 
                    <View style={this.state.inputLine && this.state.no == 2 ? styles.inputFocus : styles.inputUnFocus}></View>
                </View>
                <View style={styles.buttonContainer}>
                    <TextInput
                        onFocus={ () => this.onFocus(3) }
                        onBlur={ () => this.onBlur(3) }
                        placeholder="Repeat Passowrd"
                        placeholderTextColor = "rgba(255,255,255,0.5)"
                        secureTextEntry
                        returnKeyType="go"
                        style={styles.input}
                        ref={(input) => this.repasswordInput = input}
                        /> 
                    <View style={this.state.inputLine && this.state.no == 3 ? styles.inputFocus : styles.inputUnFocus}></View>
                </View>
            </View>
        );
    }

    onFocus(input) {
        this.setState({
            inputLine : !this.state.inputLine,
            no : input
        })
        
    }

    onBlur(input) {
        this.setState({
            inputLine : !this.state.inputLine,
            no : input
        })    
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
        backgroundColor : 'rgba(255,255,255,0.2)',
        height: 2
    },

    inputFocus : {
        backgroundColor : 'rgba(255,255,255,0.8)',
        height: 2
    }

});