import React from 'react'
import { ScrollView, Text, Button } from 'react-native'
import SentenceDisplay from '../components/SentenceDisplay'
import SketchDisplay from '../components/SketchDisplay'

const GameDisplayScreen = (props) => {
  const displayRounds = () => {
    const gameRounds = props.navigation.getParam('game_rounds')
    return gameRounds.map(round => {
      if (round.sentence) {
        return <SentenceDisplay sentence={round.sentence} key={round.id} />
      } else {
        return <SketchDisplay drawing={round.drawing} key={round.id} />
      }
    })
  }

  return (
    <ScrollView>
      {displayRounds()}
      <Button title='Home' onPress={() => props.navigation.navigate('Home')} />
    </ScrollView>
  )
}

GameDisplayScreen.navigationOptions = {
  headers: null
}

export default GameDisplayScreen
