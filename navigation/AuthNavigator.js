import React from 'react'
import { createStackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen'

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen
  }
)

export default AuthStack
