import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

const PastGamesScreen = () => {
  return (
    <ScrollView>
      <Text>
        Hi I'll be all the past games.
      </Text>
    </ScrollView>
  )
}

PastGamesScreen.navigationOptions = {
  title: 'Past Games'
}

export default PastGamesScreen
