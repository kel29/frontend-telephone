import React from 'react'
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
        <Label>Enter a descriptive sentence:</Label>
        <Input
          onChangeText={sentence => props.handleTyping(sentence)}
        />
      </Item>
    </Form>
  )
}

export default SentenceInput
