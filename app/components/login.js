import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
        <View style={styles.container}> 
          <Image source={require('../img/background.jpg')} style={styles.imgBackground}>
            <View style={styles.content}>
              <Text style={styles.logo}> Your App Name</Text>
            </View>
          </Image>
        </View>
     
    );
  }
}
const styles= StyleSheet.create({

  container:{
    flex:1,
  },
  imgBackground:{
    flex:1,
    alignSelf: 'stretch',
    width: null,
    justifyContent: 'center',

  }, 
  content:{

    alignItems: 'center',

  },
  logo:{
    color: 'white',
    fontSize: 40,
    fontStyle: 'italic',
    textShadowColor: '#252525',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius: 15,
    marginBottom:20,
  }

});