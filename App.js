import React  from "react";
import {View, Text,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/login';
import Signup from './Screens/signup';
const App = () => {
  return (
    <NavigationContainer>
      <ScreenStack.Navigator>
        <ScreenStack.Screen name = "Login" component = {Login}/>
        <ScreenStack.Screen name = "Sign Up" component = {Signup}  />
      </ScreenStack.Navigator>
    </NavigationContainer>
  )
}

export default App;
