import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import { Container } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/reducer'

import AppNavigator from './navigation/AppNavigator'
import GameProvider from './context/GameProvider'

const store = createStore(reducer)

export default function App (props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    )
  } else {
    return (
      <Provider store={store}>
        <GameProvider>
          <Container>
            <AppNavigator />
          </Container>
        </GameProvider>
      </Provider>
    )
  }
}

async function loadResourcesAsync () {
  await Promise.all([
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font
    })
  ])
}

function handleLoadingError (error) {
  console.warn(error)
}

function handleFinishLoading (setLoadingComplete) {
  setLoadingComplete(true)
}
