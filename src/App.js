import React, { useState } from 'react'
import { Platform, StatusBar } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import AppNavigator from './navigation/AppNavigator'

const store = createStore(reducer)

const App = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => setLoadingComplete(true)}
      />
    )
  } else {
    return (
      <Provider store={store}>
        {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
        <AppNavigator />
      </Provider>
    )
  }
}

export default App

async function loadResourcesAsync () {
  await Promise.all([
    Font.loadAsync({
      'covered-by-your-grace': require('./assets/fonts/CoveredByYourGrace-Regular.ttf'),
      'patrick-hand-sc': require('./assets/fonts/PatrickHandSC-Regular.ttf')
    })
  ])
}

function handleLoadingError (error) {
  console.warn(error)
}
