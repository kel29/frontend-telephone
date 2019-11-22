import React from 'react'
import { View } from 'react-native'
import SentenceDisplay from '../components/SentenceDisplay'
import SketchInput from '../components/SketchInput'

const DrawScreen = () => {
  return (
    <View>
      <SentenceDisplay />
      <SketchInput />
    </View>
  )
}

export default DrawScreen
