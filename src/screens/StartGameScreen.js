import React, { PureComponent } from 'react'
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import {
  Button,
  Container,
  Footer,
  FooterTab,
  Icon,
  Text
} from 'native-base'
import { API_ROOT, POST_HEADERS } from '../services/api'
import { connect } from 'react-redux'
import { setGameId, addRound, clearCurrentGame } from '../actions/CurrentGameActions'
import SentenceInput from '../components/SentenceInput'
import Styles from '../constants/Style'

class StartGameScreen extends PureComponent {
  state = {
    sentence: ''
  }

  handleTyping = (sentence) => {
    this.setState({ sentence })
  }

  startNewGame = () => {
    if (this.state.sentence.trim().length < 10) {
      alert('Come on, I said a descriptive sentence. Could you give me a little more than that?')
    } else {
      this.createGame()
      .then(this.navToInBetween)
    }
  }

  createGame = () => {
    return fetch(`${API_ROOT}games`, {
      ...POST_HEADERS,
      body: JSON.stringify({ user_id: this.props.userId })
    })
    .then(resp => resp.json())
    .then(newGame => {
      this.props.clearCurrentGame()
      this.props.setGameId(newGame.game_id)
      this.postFirstRound(newGame.game_id)
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={Styles.backgroundColor}>
          <Container style={styles.container}>
            <SentenceInput handleTyping={this.handleTyping} />
          </Container>
        </TouchableWithoutFeedback>
        <Footer style={Styles.marginStyle}>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.goBack()}>
              <Icon style={Styles.dangerBtn} name='ios-close-circle-outline'/>
              <Text style={Styles.dangerBtn}>Cancel</Text>
            </Button>
            <Button vertical onPress={this.startNewGame}>
              <Icon style={Styles.successBtn} name='ios-checkbox-outline'/>
              <Text style={Styles.successBtn}>Start Game</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

StartGameScreen.navigationOptions = {
  title: 'Begin a New Game',
  headerTitleStyle: { ...Styles.headerTitleStyle },
  headerStyle: { ...Styles.marginStyle }
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
  container: {
    backgroundColor: '#F0F5F5',
    alignContent: 'center',
    flex: 1
  }
})
