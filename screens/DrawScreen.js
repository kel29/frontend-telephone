import React from 'react'
import { View } from 'react-native'
import SentenceDisplay from '../components/SentenceDisplay'
import SketchInput from '../components/SketchInput'
import EndGameButton from '../components/EndGameButton'
import NextPlayerButton from '../components/NextPlayerButton'

const DrawScreen = () => {
  return (
    <View>
      <SentenceDisplay />
      <SketchInput />
      <EndGameButton />
      <NextPlayerButton />
    </View>
  )
}

export default DrawScreen
