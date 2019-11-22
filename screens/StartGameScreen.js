import React from 'react'
import { View } from 'react-native'
import SentenceInput from '../components/SentenceInput'
import NextPlayerButton from '../components/NextPlayerButton'

const StartGameScreen = () => {
  return (
    <View>
      <SentenceInput />
      <NextPlayerButton />
    </View>
  )
}

export default StartGameScreen
