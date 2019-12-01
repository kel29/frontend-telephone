import React from 'react'
import { Button } from 'react-native'
import {
  ListItem,
  Left,
  Right,
  Icon
} from 'native-base'

const GameList = (props) => {
  return (
    <ListItem>
      <Left>
        <Button title={props.game.game_rounds[0].sentence} onPress={() => props.handleViewGame(props.game)} />
      </Left>
      <Right>
        <Icon name='ios-arrow-forward' />
      </Right>
    </ListItem>
  )
}

export default GameList
