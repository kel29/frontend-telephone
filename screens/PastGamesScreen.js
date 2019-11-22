import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

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
