import { captureRef as takeSnapshotAsync } from 'react-native-view-shot'
import React, { PureComponent } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { Sketch } from 'expo-pixi'


class SketchInput extends PureComponent {
  state = {
    image: null,
    strokeColor: '#000',
    strokeWidth: 14
  }

  draw = async () => {
    const { uri } = await this.sketch.takeSnapshotAsync()
    console.log({ uri })

    this.setState({
      image: { uri },
      strokeWidth: 14,
      strokeColor: '#000',
    });
  };

  render () {
    return (
      <View style={styles.container}>
        <Sketch
          ref={ref => (this.sketch = ref)}
          style={styles.sketch}
          strokeColor={this.state.strokeColor}
          strokeWidth={this.state.strokeWidth}
          strokeAlpha={1}
          onChange={this.draw}
        />
        <Button title='Undo' onPress={() => this.sketch.undo()} />
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
