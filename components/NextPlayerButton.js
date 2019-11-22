import React from 'react'
import { Button, View, Text } from 'react-native'

const NextPlayerButton = (props) => {
  const nextPlayer = () => {
    this.props.navigation.navigate(props.screen)
  }

  return (
    <View>
      <Text>{props.screen}</Text>
      <Button title='Submit' onPress={nextPlayer} />
    </View>
  )
}

export default NextPlayerButton
