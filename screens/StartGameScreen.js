import React from 'react'
import { View, Button } from 'react-native'
import SentenceInput from '../components/SentenceInput'
import NextPlayerButton from '../components/NextPlayerButton'

const StartGameScreen = (props) => {
  return (
    <View>
      <SentenceInput />
      <Button title='Submit' onPress={() => props.navigation.navigate('Sketch')} />
      <Button title='Cancel' onPress={() => props.navigation.goBack()} />
    </View>
  )
}

StartGameScreen.navigationOptions = {
  title: 'Begin a New Game'
}

export default StartGameScreen
