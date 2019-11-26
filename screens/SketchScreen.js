import React, { PureComponent } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import SentenceDisplay from '../components/SentenceDisplay'
import { Sketch } from 'expo-pixi'
// TODO: Refractor to incorporate:
// import EndGameButton from '../components/EndGameButton'
// import NextPlayerButton from '../components/NextPlayerButton'

class SketchScreen extends PureComponent {
  state = {
    sketch: null,
    strokeColor: '#000',
    strokeWidth: 14
  }

  gameRounds = this.props.navigation.getParam('game_rounds')
  id = this.props.navigation.getParam('id')

  draw = async () => {
    const { uri } = await this.sketch.takeSnapshotAsync()

    this.setState({
      sketch: { uri },
      strokeWidth: 14,
      strokeColor: '#000'
    })
  }

  navigateToSentence = () => {
    this.gameRounds.push({drawing: this.state.sketch.uri, game_id: this.id})
    this.props.navigation.navigate('Sentence', { id: this.id, game_rounds: this.gameRounds })
  }

  endGame = () => {
    this.gameRounds.push({drawing: this.state.sketch.uri, game_id: this.id})
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        game_round: this.gameRounds
      })
    }

    fetch('http://localhost:3000/game_rounds', config)
    .then(this.props.navigation.navigate('Display', { id: this.id, game_rounds: this.gameRounds }))
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.sentenceDisplay}>
          <SentenceDisplay sentence={this.gameRounds[this.gameRounds.length - 1].sentence} />
        </View>
        <View style={styles.container}>
          <Sketch
            ref={ref => (this.sketch = ref)}
            style={styles.sketch}
            strokeColor={this.state.strokeColor}
            strokeWidth={this.state.strokeWidth}
            strokeAlpha={1}
            onChange={this.draw}
          />
        </View>
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
  },
  sketch: {
    flex: 1
  },
  sentenceDisplay: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
})
