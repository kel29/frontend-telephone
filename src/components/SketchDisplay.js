import React from 'react'
import {
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'
import { Container } from 'native-base'

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
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width + 20,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1AE0D3',
    margin: 10,
    padding: 10
  }
})
