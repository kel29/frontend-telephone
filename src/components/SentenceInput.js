import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Form,
  Item,
  Input,
  Label
} from 'native-base'

const SentenceInput = (props) => {
  return (
    <Form>
      <Item floatingLabel>
        <Label style={styles.label}>
          Enter a descriptive sentence:
        </Label>
        <Input
          style={styles.input}
          onChangeText={sentence => props.handleTyping(sentence)}
        />
      </Item>
    </Form>
  )
}

export default SentenceInput

const styles = StyleSheet.create({
  input: {
    fontSize: 36,
    marginTop: 20,
    fontFamily: 'covered-by-your-grace'
  },
  label: {
    fontFamily: 'patrick-hand-sc'
  }
})
