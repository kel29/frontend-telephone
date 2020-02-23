import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { Container } from 'native-base'
import Styles from '../constants/Style'

const SketchDisplay = (props) => {
  return (
    <Container style={styles.sketchDisplay}>
      <Image style={styles.sketch} source={{ uri: props.drawing }} />
    </Container>
  )
}

export default SketchDisplay

const styles = StyleSheet.create({
  sketch: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').width
  },
  sketchDisplay: {
    ...Styles.sketchContainer,
    height: Dimensions.get('window').width + 20,
    justifyContent: 'center',
    alignContent: 'center',
  }
})
