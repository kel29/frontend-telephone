import React, { PureComponent } from 'react'
import { View, Button } from 'react-native'
import SentenceInput from '../components/SentenceInput'
import NextPlayerButton from '../components/NextPlayerButton' // TODO: Link up next player button

class StartGameScreen extends PureComponent {
  state = {
    sentence: '',
    gameId: 0
  }

  config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  handleTyping = (sentence) => {
    this.setState({ sentence })
  }

  startNewGame = () => {
    this.createGame()
    .then(this.props.navigation.navigate('Sketch', this.state))
  }

  createGame = () => {
    return fetch('http://localhost:3000/games',
      { ...this.config,
        body: JSON.stringify({
          user_id: this.props.navigation.getParam('userId')
        })
      }
    ).then(resp => resp.json())
    .then(newGame => {
      this.setState({gameId: newGame.id})
      this.createGameRound(newGame.id)
    })
  }

  createGameRound = (gameId) => {
    fetch('http://localhost:3000/game_rounds',
      { ...this.config,
        body: JSON.stringify({
          game_id: gameId,
          sentence: this.state.sentence
        })
      }
    )
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
