import React from 'react'
import { View, Text } from 'react-native'

const SentenceDisplay = (props) => {
  return (
    <View>
      <Text>
        {props.sentence}
      </Text>
    </View>
  )
}

export default SentenceDisplay
