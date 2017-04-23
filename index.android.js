/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Login from './app/components/login';

export default class OpenInvent extends Component {
  render() {
    return (
      <Navigator initialRoute = {{id:'Login'}}
      renderScene = {this.navigatorRenderScene} />
     
    );
  }
  navigatorRenderScene(route, navigator){


    _navigator= navigator;
    switch(route.id){
       case 'Login':
        return(<Login navigator = {navigator} />);
     
    }
    

  }
}



AppRegistry.registerComponent('OpenInvent', () => OpenInvent);
