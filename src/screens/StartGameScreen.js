import React, { PureComponent } from 'react'
import { 
  StyleSheet
} from 'react-native'
import {
  Button,
  Text,
  Container,
  Footer,
  FooterTab,
  Icon
} from 'native-base'
import SentenceInput from '../components/SentenceInput'
// import NextPlayerButton from '../components/NextPlayerButton' // TODO: Link up next player button
import GameContext from '../context/GameContext'
import { fetchAddress } from '../constants/Variables'

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
    return fetch(`${fetchAddress}games`, this.config)
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
      <Container>
        <Container style={styles.input}>
          <SentenceInput handleTyping={this.handleTyping} />
        </Container>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.goBack()}>
              <Icon name='ios-close-circle-outline'/>
              <Text>Cancel</Text>
            </Button>
            <Button vertical onPress={this.startNewGame}>
              <Icon name='ios-checkbox-outline'/>
              <Text>Start Game</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

StartGameScreen.navigationOptions = {
  title: 'Begin a New Game'
}

export default StartGameScreen

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center'
  }
})
