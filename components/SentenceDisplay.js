import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Text
} from 'native-base'

const SentenceDisplay = (props) => {
  return (
    <Container style={styles.container}>
      <Text style={styles.text}>
        {props.sentence}
      </Text>
    </Container>
  )
}

export default SentenceDisplay

const styles = StyleSheet.create({
  container: {
    alignContent: 'center'
  },
  text: {
    fontSize: 24
  }
})
