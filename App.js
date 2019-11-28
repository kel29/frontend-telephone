import React, { useState } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

import AppNavigator from './navigation/AppNavigator'
import GameProvider from './context/GameProvider'

import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';


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
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <SketchCanvas
            style={{ flex: 1 }}
            strokeColor={'red'}
            strokeWidth={7}
          />
        </View>
          {/*
      <GameProvider>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          <AppNavigator />
        </View>
      </GameProvider>
        */}

      </View>
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
