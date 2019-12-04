import React, { useState } from 'react'
import { AppLoading } from 'expo'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducer'
import AppNavigator from './navigation/AppNavigator'
import * as Font from 'expo-font'

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
        <AppNavigator />
      </Provider>
    )
  }
}

export default App

async function loadResourcesAsync () {
  await Promise.all([
    Font.loadAsync({
      'covered-by-your-grace': require('./assets/fonts/CoveredByYourGrace-Regular.ttf')
    })
  ])
}

function handleLoadingError (error) {
  console.warn(error)
}
