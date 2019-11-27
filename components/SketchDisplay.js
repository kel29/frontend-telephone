import React from 'react'
import {
  StyleSheet,
  Image,
  Dimensions
} from 'react-native'

const SketchDisplay = (props) => {
  return (
    <Image style={styles.sketch} source={{ uri: props.drawing }} />
  )
}

export default SketchDisplay

const styles = StyleSheet.create({
  sketch: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').width,
    flex: 1
  }
})
