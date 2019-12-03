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
import { API_ROOT, POST_HEADERS } from '../services/api'
import { connect } from 'react-redux'
import { setGameId, addRound, clearCurrentGame } from '../actions/CurrentGameActions'

class StartGameScreen extends PureComponent {
  state = {
    sentence: ''
  }

  handleTyping = (sentence) => {
    this.setState({ sentence })
  }

  startNewGame = () => {
    this.createGame()
    .then(this.navToInBetween)
  }

  createGame = () => {
    return fetch(`${API_ROOT}games`, {
      ...POST_HEADERS,
      body: JSON.stringify({ user_id: this.props.userId })
    })
    .then(resp => resp.json())
    .then(newGame => {

      this.props.clearCurrentGame()
      this.props.setGameId(newGame.id)
      this.postFirstRound(newGame.id)
    })
    .catch(console.log)
  }

  postFirstRound = (gameId) => {
    return fetch(`${API_ROOT}game_rounds`, {
      ...POST_HEADERS,
      body: JSON.stringify({
        sentence: this.state.sentence,
        game_id: gameId
      })
    })
    .then(resp => resp.json())
    .then(round => this.props.addRound(round))
    .catch(console.log)
  }

  navToInBetween = () => {
    this.props.navigation.navigate('InBetween', {screen: 'Sketch'})
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

const mapStateToProps = state => {
  return {
    userId: state.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setGameId: gameId => dispatch(setGameId(gameId)),
    addRound: round => dispatch(addRound(round)),
    clearCurrentGame: () => dispatch(clearCurrentGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartGameScreen)

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center'
  }
})
