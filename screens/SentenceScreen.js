import React from 'react'
import { View } from 'react-native'
import SentenceInput from '../components/SentenceInput'
import SketchDisplay from '../components/SketchDisplay'
import EndGameButton from '../components/EndGameButton'
import NextPlayerButton from '../components/NextPlayerButton'

const SentenceScreen = () => {
  return (
    <View>
      <SentenceInput />
      <SketchDisplay />
      <EndGameButton />
      <NextPlayerButton />
    </View>
  )
}

export default SentenceScreen
