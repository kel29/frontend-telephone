import React, { PureComponent } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import SentenceInput from '../components/SentenceInput'
import SketchDisplay from '../components/SketchDisplay' // TODO: connect SketchDisplay
// TODO: Refractor to incorporate:
// import EndGameButton from '../components/EndGameButton'
// import NextPlayerButton from '../components/NextPlayerButton'

class SentenceScreen extends PureComponent {
  state = {
    sentence: ''
  }

  gameRounds = this.props.navigation.getParam('game_rounds')
  id = this.props.navigation.getParam('id')

  handleTyping = (sentence) => {
    this.setState({ sentence })
  }

  endGame = () => {
    // TODO: move this to end game component
    this.gameRounds.push({sentence: this.state.sentence, game_id: this.id})

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

  navigateToSketch = () => {
    this.gameRounds.push({sentence: this.state.sentence, game_id: this.id})
    this.props.navigation.navigate('Sketch', { id: this.id, game_rounds: this.gameRounds })
  }

  render () {
    return (
      <View style={styles.container}>
        <SentenceInput handleTyping={this.handleTyping} />
        <SketchDisplay />
        <Button title='End Game' onPress={this.endGame} />
        <Button title='Submit' onPress={this.navigateToSketch} />
      </View>
    )
  }
}

export default SentenceScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 30
  }
})
