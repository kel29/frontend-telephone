import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import SentenceDisplay from '../components/SentenceDisplay'
import SketchInput from '../components/SketchInput'
import EndGameButton from '../components/EndGameButton'
import NextPlayerButton from '../components/NextPlayerButton'

const SketchScreen = (props) => {
  return (
    <View style={styles.container}>
      <SentenceDisplay />
      <SketchInput />
      <EndGameButton />
      <Button title='Submit' onPress={() => props.navigation.navigate('Sentence')} />
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
