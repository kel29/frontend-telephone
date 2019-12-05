import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, Content } from 'native-base'

const SentenceDisplay = (props) => {
  return (
    <Content style={styles.content}>
      <Text style={styles.text}>
        {props.sentence}
      </Text>
    </Content>
  )
}

export default SentenceDisplay

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#F0F5F5'
  },
  text: {
    fontSize: 22,
    fontFamily: 'covered-by-your-grace',
    textAlign: 'center',
    padding: 10

  }
})
