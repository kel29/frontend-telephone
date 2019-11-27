import React from 'react'
import {
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'
import {
  Container
} from 'native-base'

const SketchDisplay = (props) => {
  return (
    <Container style={styles.container}>
      <Image style={styles.sketch} source={{ uri: props.drawing }} />
    </Container>
  )
}

export default SketchDisplay

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'steelblue',
    margin: 10,
    padding: 10
  },
  sketch: {
    width: Math.round(Dimensions.get('window').width) - 40,
    height: null,
    flex: 1
  }
})
