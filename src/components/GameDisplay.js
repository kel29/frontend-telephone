import React from 'react'
import {
  Button,
  Icon,
  Left,
  ListItem,
  Right,
  Text
} from 'native-base'
import Styles from '../constants/Style'

const GameList = (props) => {
  return (
    <ListItem>
      <Left>
        <Button transparent onPress={() => props.handleViewGame(props.game)}>
          <Text style={Styles.buttonText}>
            {props.game.game_rounds[0].sentence}
          </Text>
        </Button>
      </Left>
      <Right>
        <Icon name='ios-arrow-forward' />
      </Right>
    </ListItem>
  )
}

export default GameList
