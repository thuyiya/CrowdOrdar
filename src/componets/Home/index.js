import React, { Component } from 'react';
import { 
    StyleSheet, 
    View,
    Text,
} from "react-native";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hi, Welcome to the Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#3498db',
        flex : 1,
    },

    title : {
        color : 'black',
        justifyContent : 'center',
        marginTop : 180,
        textAlign : 'center',
    }

})