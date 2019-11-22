import { createBrowserApp } from '@react-navigation/web'
import { createSwitchNavigator } from 'react-navigation'

import HomeNavigator from './HomeNavigator'
import AuthNavigator from './AuthNavigator'

const switchNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Home: HomeNavigator
})
switchNavigator.path = ''

export default createBrowserApp(switchNavigator, { history: 'hash' })
