import React from 'react'
import { Button, View } from 'react-native'

const NextPlayerButton = () => {
  const nextPlayer = () => {
    this.alert('you want to go to the next player')
  }

  return (
    <View>
      <Button title='Done' onPress={nextPlayer} />
    </View>
  )
}

export default NextPlayerButton
