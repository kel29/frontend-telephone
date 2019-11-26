import React, { PureComponent } from 'react'
import { View, Button } from 'react-native'
import SentenceInput from '../components/SentenceInput'
import NextPlayerButton from '../components/NextPlayerButton' // TODO: Link up next player button
import GameContext from '../context/GameContext'

class StartGameScreen extends PureComponent {
  static contextType = GameContext

  state = {
    sentence: ''
  }

  config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user_id: this.context.userId
    })
  }

  handleTyping = (sentence) => {
    this.setState({ sentence })
  }

  startNewGame = () => {
    this.createGame()
  }

  createGame = () => {
    return fetch('http://localhost:3000/games', this.config)
    .then(resp => resp.json())
    .then(newGame => {
      this.navigateToSketch({game_id: newGame.id})
    })
  }

  navigateToSketch = (game) => {
    this.props.navigation.navigate('Sketch', { game_rounds: [{...this.state, ...game}], id: game.game_id })
  }

  render () {
    return (
      <View>
        <SentenceInput handleTyping={this.handleTyping} />
        <Button title='Submit' onPress={this.startNewGame} />
        <Button title='Cancel' onPress={() => this.props.navigation.goBack()} />
      </View>
    )
  }
}

StartGameScreen.navigationOptions = {
  title: 'Begin a New Game'
}

export default StartGameScreen
