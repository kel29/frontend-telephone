import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import HomeNavigator from './HomeNavigator'
import AuthNavigator from './AuthNavigator'
import GameNavigator from './GameNavigator'

export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthNavigator,
    Home: HomeNavigator,
    Game: GameNavigator
  },
  {
    initialRouteName: 'Auth'
  })
)
