import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Form,
  Item,
  Input,
  Label
} from 'native-base'
import Styles from '../constants/Style'

const SentenceInput = (props) => {
  return (
    <Form>
      <Item floatingLabel>
        <Label style={Styles.buttonText}>
          Enter a descriptive sentence:
        </Label>
        <Input
          multiline
          maxLength={200}
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
    fontSize: 22,
    marginTop: 20,
    fontFamily: 'covered-by-your-grace'
  }
})
