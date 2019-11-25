import Expo from 'expo'
import React, { PureComponent } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import * as ExpoPixi from 'expo-pixi'


class SketchInput extends PureComponent {
  state = {
    image: null,
    strokeColor: Math.random() * 0xffffff,
    strokeWidth: 14
  }

  onChangeAsync = async () => {
    const { uri } = await this.sketch.takeSnapshotAsync()

    this.setState({
      image: { uri },
      strokeWidth: 14,
      strokeColor: Math.random() * 0xffffff,
    });
  };

  onReady = () => {
    console.log('ready!');
  };

  render () {
    return (
      <View style={styles.container}>
        <ExpoPixi.Sketch
          ref={ref => (this.sketch = ref)}
          style={styles.sketch}
          strokeColor={this.state.strokeColor}
          strokeWidth={this.state.strokeWidth}
          strokeAlpha={1}
          onChange={this.onChangeAsync}
          onReady={this.onReady}
        />
      </View>
    )
  }
}

export default SketchInput

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sketch: {
    flex: 1
  }
})
