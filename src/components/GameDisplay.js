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
  const showGameTitle = () => {
    const title = props.game.game_rounds[0].sentence.trim()
    if (title.length > 40) {
      return `${title.slice(0, 40).trim()}...`
    } else {
      return title
    }
  }

  return (
    <ListItem>
      <Left>
        <Button transparent onPress={() => props.handleViewGame(props.game)}>
          <Text style={Styles.buttonText}>
            {showGameTitle()}
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
