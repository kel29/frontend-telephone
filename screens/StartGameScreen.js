import React, { PureComponent } from 'react'
import { View, Button } from 'react-native'
import SentenceInput from '../components/SentenceInput'
import NextPlayerButton from '../components/NextPlayerButton'

class StartGameScreen extends PureComponent {
  state = {
    sentence: ''
  }

  handleTyping = (sentence) => {
    this.setState({ sentence })
  }

  startNewGame = () => {
    () => this.props.navigation.navigate('Sketch', this.state)
    // TODO: create a new game in the database, do a post to both the game and game_rounds
    // pass the sentence through sketch
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
