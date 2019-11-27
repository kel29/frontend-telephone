import React from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Container,
  Form,
  Item,
  Input,
  Label
} from 'native-base'

const SentenceInput = (props) => {
  return (
    <Container style={styles.container}>
      <Form>
        <Item floatingLabel>
          <Label>Enter a descriptive sentence:</Label>
          <Input
            onChangeText={sentence => props.handleTyping(sentence)}
          />
        </Item>
      </Form>
    </Container>
  )
}

export default SentenceInput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
