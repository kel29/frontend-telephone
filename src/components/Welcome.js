import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'native-base'

const Welcome = () => {
  return (
    <Text style={styles.welcomeText}>
      Welcome to Telephone!
    </Text>
  )
}

export default Welcome

const styles = StyleSheet.create({
  welcomeText: {
    fontFamily: 'covered-by-your-grace',
    fontSize: 70,
    lineHeight: 75,
    margin: 10,
    textAlign: 'center',
    textShadowColor: 'white',
    textShadowRadius: 10
  }
})
