import React from 'react'
import { Button, View } from 'react-native'

const EndGameButton = (props) => {
  return (
    <View>
      <Button title='End Game' onPress={() => this.alert('you want to end the game')} />
    </View>
  )
}

export default EndGameButton
