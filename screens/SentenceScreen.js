import React from 'react'
import { View } from 'react-native'
import SentenceInput from '../components/SentenceInput'
import SketchDisplay from '../components/SketchDisplay'

const SentenceScreen = () => {
  return (
    <View>
      <SentenceInput />
      <SketchDisplay />
    </View>
  )
}

export default SentenceScreen
