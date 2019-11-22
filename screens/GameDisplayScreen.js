import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

const GameDisplayScreen = (props) => {
  return (
    <ScrollView>
      <Text>Look! You're viewing a single game</Text>
    </ScrollView>
  )
}

GameDisplayScreen.navigationOptions = {
  headers: null
}

export default GameDisplayScreen
