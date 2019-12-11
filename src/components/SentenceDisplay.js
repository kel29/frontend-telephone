import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, Content } from 'native-base'
import Styles from '../constants/Style'

const SentenceDisplay = (props) => {
  return (
    <Content style={Styles.backgroundColor}>
      <Text style={styles.text}>
        {props.sentence}
      </Text>
    </Content>
  )
}

export default SentenceDisplay

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontFamily: 'covered-by-your-grace',
    textAlign: 'center',
    padding: 10
  }
})
