import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Rajdhani_600SemiBold} from "@expo-google-fonts/rajdhani"
import *as Font from "expo-font"
import LogInScreen from './screens/logIn';
import BottomTabNavigator from './components/bottomTabnavigater';
export default class App extends Component {
  constructor(){
    super()
this.state={fontLoaded:false}

  }
componentDidMount(){
  this.loadFonts()
}
async loadFonts(){
  await Font.loadAsync({
    Rajdhani_600SemiBold:Rajdhani_600SemiBold


  })
  this.setState({fontLoaded:true})
}
  render(){
    const {fontLoaded}=this.state
    if(fontLoaded){

    
  return (
<AppContainer/>
     );
  }
  return null
  }
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    BottomTab: {
      screen: BottomTabNavigator
    }
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
