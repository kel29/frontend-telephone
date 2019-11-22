import React from 'react'
import { View, Text, TextInput } from 'react-native'

const StartGameScreen = () => {
  return (
    <View>
      <Text>
        Enter a sentence:
      </Text>
      <TextInput
        placeholder='The cow jumped over the spoon'
      />
    </View>
  )
}

export default StartGameScreen
