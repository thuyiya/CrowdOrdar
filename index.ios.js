import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';

import Splash from './Splash';
import Login from './src/componets/Login';
import Home from './src/componets/Home';

export default class testpage extends Component {

  renderScene(route, navigator){
    switch(route.name){
      case 'Login': 
        return (
          <Login navigator={navigator} route={route}></Login>
        )
      case 'Home' : 
        return (
          <Home navigator={navigator} route={route}></Home>
        )
    }
  }

  render() {
    return (
      <Navigator 
        initialRoute={{name : 'Login'}}
        renderScene={this.renderScene}
        configureScene={(route) =>{
          if(route.sceneConfig){
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight
        }}
        />
    );
  }
}

const styles = StyleSheet.create({
  navButtonText : {
    marginTop : 10,
    marginLeft : 20,
    fontWeight: '300',
    color : '#ffffff'
  },
  title : {
    marginTop : 10,
    color : '#007AFF'
  }
});

AppRegistry.registerComponent('testpage', () => testpage);
