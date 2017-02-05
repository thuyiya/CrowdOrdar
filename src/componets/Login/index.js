import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Image, 
    Text,
    KeyboardAvoidingView,
    TouchableOpacity
    
} from "react-native";

import LoginForm from './LoginForm';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            name : 'Login'
        }
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../img/co_logo.png')}/>
                    <Text style={styles.title}>What ever you wish...</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={(this.onLogin.bind(this))} style={styles.buttonContainer}>
                        <View style={styles.buttonImage}>
                            <Image 
                            style={styles.btnImage}
                            source={require('../img/Crowdbutton.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </KeyboardAvoidingView>
        );
    }

    onLogin(){
        
    }

    home(){
        
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#3498db',
        flex : 1
    },

    formContainer : {
        
    },

    logoContainer : {
        alignItems : 'center',
        flexGrow : 1,
        justifyContent : 'center'
        // padding : 120
    },

    button : {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom : 30
    },

    buttonContainer: {
        // backgroundColor : '#2980b9',
        padding : 10,
        paddingVertical : 15
    },

    buttonText : {
        textAlign : 'center',
        color : '#FFFFFF',
        fontWeight : '700'
    },

    buttonImage : {
        alignItems : 'center',
        flexGrow : 1,
        justifyContent : 'center'
    },

    btnImage : {
        width : 60,
        height : 60
    },

    logo : {
         width : 240,
         height : 112
    },

    title : {
        color : '#ecf0f1',
        marginTop : 30,
        width : 160,
        textAlign : 'center',
        opacity : 0.9
    }

})