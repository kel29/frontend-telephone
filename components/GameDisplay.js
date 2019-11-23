import React from 'react'
import { View, Button } from 'react-native'

const GameList = (props) => {
  return (
    <View>
      <Button title={props.game.game_rounds[0].sentence} onPress={() => props.handleViewGame(props.game)} />
    </View>
  )
}

export default GameList
