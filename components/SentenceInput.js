import React, { PureComponent } from 'react'
import { View, Text, TextInput } from 'react-native'

const SentenceInput = (props) => {
  return (
    <View>
      <Text>
          Enter a sentence:
      </Text>
      <TextInput
        placeholder='The cow jumped over the spoon'
        onChangeText={sentence => props.handleTyping(sentence)}
      />
    </View>
  )
}

export default SentenceInput
