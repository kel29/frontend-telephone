import React from 'react'
import { ScrollView, Text } from 'react-native'
import SentenceDisplay from '../components/SentenceDisplay'
import SketchDisplay from '../components/SketchDisplay'

const GameDisplayScreen = (props) => {
  const displayRounds = () => {
    const gameRounds = props.navigation.getParam('game_rounds')
    return gameRounds.map(round => {
      if (round.sentence) {
        return <SentenceDisplay sentence={round.sentence} key={round.id} />
      } else {
        return <SketchDisplay sketch={round.drawing} key={round.id} />
      }
    })
  }

  return (
    <ScrollView>
      <Text>Look! You're viewing a single game</Text>
      {displayRounds()}
    </ScrollView>
  )
}

GameDisplayScreen.navigationOptions = {
  headers: null
}

export default GameDisplayScreen
