import React from 'react'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import RulesScreen from '../screens/RulesScreen'
import PastGamesScreen from '../screens/PastGamesScreen'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Rules: RulesScreen,
    PastGames: PastGamesScreen
  }
)

export default HomeStack
