import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import HomeNavigator from './HomeNavigator'
import AuthNavigator from './AuthNavigator'

export default createAppContainer(
  createSwitchNavigator({
    Auth: AuthNavigator,
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Home: HomeNavigator
  })
)
