import React, { Component } from 'react';
import { 
    View,
    AsyncStorage,
    Button,
    ImageBackground,
    Text
} from 'react-native';

import ApplicationStyles from '../constants/Styles';

export default class SignInScreen extends Component {
    static navigationOptions = {
        title: 'Please sign in',
    }
    
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <ImageBackground source={pic} style={{width: '100%', height: '100%'}}>
            <Text>Inside</Text>
            </ImageBackground>
        );
    }
    
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}
