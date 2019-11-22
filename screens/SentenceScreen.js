import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import SentenceInput from '../components/SentenceInput'
import SketchDisplay from '../components/SketchDisplay'
import EndGameButton from '../components/EndGameButton'
import NextPlayerButton from '../components/NextPlayerButton'

const SentenceScreen = (props) => {
  return (
    <View style={styles.container}>
      <SentenceInput />
      <SketchDisplay />
      <EndGameButton />
      <Button title='Submit' onPress={() => props.navigation.navigate('Sketch')} />
    </View>
  )
}

export default SentenceScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 30
  }
})
