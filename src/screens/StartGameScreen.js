import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import {
  Button,
  Container,
  Footer,
  FooterTab,
  Icon,
  Text
} from 'native-base'
import SentenceInput from '../components/SentenceInput'
// import NextPlayerButton from '../components/NextPlayerButton' // TODO: Link up next player button
import GameContext from '../context/GameContext'
import { fetchAddress } from '../constants/Variables'
import { connect } from 'react-redux'
import { setGameId, addRound, clearCurrentGame } from '../actions/CurrentGameRoundsActions'

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
    .then(this.navigateToSketch)
  }

  createGame = () => {
    return fetch(`${fetchAddress}games`, this.config)
    .then(resp => resp.json())
    .then(newGame => {
      this.props.clearCurrentGame()
      this.props.setGameId(newGame.id)
      this.props.addRound({
        sentence: this.state.sentence,
        game_id: newGame.id
      })
    })
  }

  navigateToSketch = () => {
    this.props.navigation.navigate('Sketch')
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

const mapDispatchToProps = dispatch => {
  return {
    setGameId: gameId => dispatch(setGameId(gameId)),
    addRound: round => dispatch(addRound(round)),
    clearCurrentGame: () => dispatch(clearCurrentGame())
  }
}

export default connect(null, mapDispatchToProps)(StartGameScreen)

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center'
  }
})
