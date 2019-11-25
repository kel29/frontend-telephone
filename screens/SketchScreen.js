import React from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import SentenceDisplay from '../components/SentenceDisplay'
import SketchInput from '../components/SketchInput' // TODO: hook up drawing canvas
// TODO: Refractor to incorporate:
// import EndGameButton from '../components/EndGameButton'
// import NextPlayerButton from '../components/NextPlayerButton'

const SketchScreen = (props) => {
  const gameRounds = props.navigation.getParam('game_rounds')
  const id = props.navigation.getParam('id')

  const navigateToSentence = () => {
    // TODO: edit gameRounds to push in the newly created image before navigating
    props.navigation.navigate('Sentence', { id: id, game_rounds: gameRounds })
  }

  const endGame = () => {
    // TODO: edit gameRounds to push in the newly created image before navigating
    // TODO: post the rounds to the database
    props.navigation.navigate('Display', { id: id, game_rounds: gameRounds })
  }

  return (
    <View style={styles.container}>
      <SentenceDisplay sentence={gameRounds[gameRounds.length - 1].sentence} />
      <SketchInput />
      <Button title='End Game' onPress={endGame} />
      <Button title='Submit' onPress={navigateToSentence} />
    </View>
  )
}

export default SketchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 30
  }
})
