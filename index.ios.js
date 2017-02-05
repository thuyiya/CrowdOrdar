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

var NavigatorBarRouteMapper = {
  LeftButton: (route, navigator, index) => {
    return (
      <TouchableOpacity onPress={() => {
          if(index > 0){
            navigator.pop();
          }
        }}>  
        <Text style={styles.navButtonText}>Back</Text>
      </TouchableOpacity>
    )
  },

  RightButton: (route, navigator, index) => {
    return null;
  },

  Title : (route, navigator, index) => {
    return (
      <Text style={styles.title} > { route.name } </Text>
    )
  } 
}

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

        navigationBar = {
          <Navigator.NavigationBar
            routeMapper = {NavigatorBarRouteMapper}/>
        }
        />
    );
  }
}

const styles = StyleSheet.create({
  navButtonText : {
    marginTop : 10,
    marginLeft : 20,
    color : '#007AFF'
  },
  title : {
    marginTop : 10,
    color : '#007AFF'
  }
});

AppRegistry.registerComponent('testpage', () => testpage);
