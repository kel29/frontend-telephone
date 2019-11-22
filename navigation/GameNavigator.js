import React from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import StartGameScreen from '../screens/StartGameScreen'
import SketchScreen from '../screens/SketchScreen'
import SentenceScreen from '../screens/SentenceScreen'
import GameDisplayScreen from '../screens/GameDisplayScreen'

const GameStack = createSwitchNavigator(
  {
    StartGame: StartGameScreen,
    Sketch: SketchScreen,
    Sentence: SentenceScreen,
    Display: GameDisplayScreen
  }
)

export default GameStack
