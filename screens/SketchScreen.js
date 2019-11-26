import React, { PureComponent } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import SentenceDisplay from '../components/SentenceDisplay'
import { captureRef as takeSnapshotAsync } from 'react-native-view-shot'
import { Sketch } from 'expo-pixi'
// TODO: Refractor to incorporate:
// import EndGameButton from '../components/EndGameButton'
// import NextPlayerButton from '../components/NextPlayerButton'

class SketchScreen extends PureComponent {
  state = {
    image: null,
    strokeColor: '#000',
    strokeWidth: 14
  }

  gameRounds = this.props.navigation.getParam('game_rounds')
  id = this.props.navigation.getParam('id')

  draw = async () => {
    const { uri } = await this.sketch.takeSnapshotAsync()
    console.log({ uri })

    this.setState({
      image: { uri },
      strokeWidth: 14,
      strokeColor: '#000'
    })
  }

  navigateToSentence = () => {
    // TODO: edit gameRounds to push in the newly created image before navigating
    this.props.navigation.navigate('Sentence', { id: this.id, game_rounds: this.gameRounds })
  }

  endGame = () => {
    // TODO: edit gameRounds to push in the newly created image before navigating
    // TODO: post the rounds to the database
    this.props.navigation.navigate('Display', { id: this.id, game_rounds: this.gameRounds })
  }

  render () {
    return (
      <View style={styles.container}>
        <SentenceDisplay sentence={this.gameRounds[this.gameRounds.length - 1].sentence} />
        <Sketch
          ref={ref => (this.sketch = ref)}
          style={styles.sketch}
          strokeColor={this.state.strokeColor}
          strokeWidth={this.state.strokeWidth}
          strokeAlpha={1}
          onChange={this.draw}
        />
        <Button title='Undo' onPress={() => this.sketch.undo()} />
        <Button title='End Game' onPress={this.endGame} />
        <Button title='Submit' onPress={this.navigateToSentence} />
      </View>
    )
  }
}

export default SketchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 30
  },sketch: {
    flex: 1
  }
})
