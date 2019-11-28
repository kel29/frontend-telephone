import React from 'react'
import { Button, Icon, Text } from 'native-base'

const EndGameButton = (props) => {
  return (
    <Button onPress={this.endGame}>
      <Icon name='ios-done-all' />
      <Text>End Game</Text>
    </Button>
  )
}

export default EndGameButton
