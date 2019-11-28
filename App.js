import React, { useState } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

import AppNavigator from './navigation/AppNavigator'
import GameProvider from './context/GameProvider'

export default function App (props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  // if (!isLoadingComplete && !props.skipLoadingScreen) {
  //   return (
  //     <AppLoading
  //       startAsync={loadResourcesAsync}
  //       onError={handleLoadingError}
  //       onFinish={() => handleFinishLoading(setLoadingComplete)}
  //     />
  //   )
  // } else {
    return (
      <GameProvider>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          <AppNavigator />
        </View>
      </GameProvider>
    )
  // }
}

function handleLoadingError (error) {
  console.warn(error)
}

function handleFinishLoading (setLoadingComplete) {
  setLoadingComplete(true)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
