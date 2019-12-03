import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import StartGameScreen from '../screens/StartGameScreen'
import SketchScreen from '../screens/SketchScreen'
import InBetweenScreen from '../screens/InBetweenScreen'
import SentenceScreen from '../screens/SentenceScreen'
import GameDisplayScreen from '../screens/GameDisplayScreen'

const GameStack = createSwitchNavigator(
  {
    StartGame: StartGameScreen,
    Sketch: SketchScreen,
    InBetween: InBetweenScreen,
    Sentence: SentenceScreen,
    Display: GameDisplayScreen
  }
)

export default GameStack
