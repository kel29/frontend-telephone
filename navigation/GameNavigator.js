import React from 'react'
import { createStackNavigator } from 'react-navigation'
import StartGameScreen from '../screens/StartGameScreen'

const GameStack = createStackNavigator(
  {
    StartGame: StartGameScreen
    // TODO: make a switch navigator to go between game stages
  }
)

export default GameStack
