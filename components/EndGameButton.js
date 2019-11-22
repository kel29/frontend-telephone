import React from 'react'
import { Button, View } from 'react-native'

const EndGameButton = () => {
  const endGame = () => {
    this.alert('you want to end the game')
  }

  return (
    <View>
      <Button title='End Game' onPress={endGame} />
    </View>
  )
}

export default EndGameButton
