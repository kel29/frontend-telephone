import React from 'react'
import { View, Image } from 'react-native'

const SketchDisplay = (props) => {
  return (
    <View>
      <Image style={{ width: 100, height: 100 }} source={{ uri: props.drawing }} />
    </View>
  )
}

export default SketchDisplay
