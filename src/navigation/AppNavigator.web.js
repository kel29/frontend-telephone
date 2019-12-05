import { createBrowserApp } from '@react-navigation/web'
import { createSwitchNavigator } from 'react-navigation'

import HomeNavigator from './HomeNavigator'
import AuthNavigator from './AuthNavigator'
import GameNavigator from './GameNavigator'

const switchNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Home: HomeNavigator,
  Game: GameNavigator
})

export default createBrowserApp(switchNavigator, { history: 'hash' })
