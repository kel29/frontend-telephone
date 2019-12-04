import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Button,
  Icon,
  Left,
  ListItem,
  Right,
  Text
} from 'native-base'

const GameList = (props) => {
  return (
    <ListItem>
      <Left>
        <Button transparent onPress={() => props.handleViewGame(props.game)}>
          <Text style={styles.button}>
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

const styles = StyleSheet.create({
  button: {
    fontFamily: 'patrick-hand-sc',
    fontSize: 24
  }
})
