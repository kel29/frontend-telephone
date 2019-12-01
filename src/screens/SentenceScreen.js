import React, { PureComponent } from 'react'
import {
  StyleSheet,
  Dimensions
} from 'react-native'
import {
  Button,
  Text,
  Container,
  Footer,
  FooterTab,
  Icon,
  Header
} from 'native-base'
import SentenceInput from '../components/SentenceInput'
import SketchDisplay from '../components/SketchDisplay'
import { fetchAddress } from '../constants/Variables'
import { clearCurrentGame, addRound } from '../actions/CurrentGameRoundsActions'

// TODO: Refractor to incorporate:
// import EndGameButton from '../components/EndGameButton'
// import NextPlayerButton from '../components/NextPlayerButton'

class SentenceScreen extends PureComponent {
  state = {
    sentence: ''
  }

  handleTyping = (sentence) => {
    this.setState({ sentence })
  }

  endGame = () => {
    // TODO: move this to end game component
    addRound({
      sentence: this.state.sentence,
      game_id: this.props.gameId
    })

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        game_round: this.props.gameRounds
      })
    }

    fetch(`${fetchAddress}game_rounds`, config)
    .then(
      this.props.navigation.navigate('Display', {
        id: this.props.id,
        game_rounds: this.props.gameRounds
      })
    )
    .then(clearCurrentGame)
  }

  navigateToSketch = () => {
    addRound({
      sentence: this.state.sentence,
      game_id: this.props.gameId
    })
    this.props.navigation.navigate('Sketch')
  }

  render () {
    return (
      <Container>
        <Header />
        <Container>
          <SentenceInput handleTyping={this.handleTyping} />
        </Container>
        <SketchDisplay drawing={this.props.gameRounds[this.props.gameRounds.length - 1].drawing}/>
        <Footer>
          <FooterTab>
            <Button onPress={this.endGame}>
              <Icon name='ios-done-all' />
              <Text>End Game</Text>
            </Button>
            <Button onPress={this.navigateToSketch}>
              <Icon name='ios-checkbox-outline' />
              <Text>Submit Sentence</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameId: state.gameId,
    gameRounds: state.gameRounds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRound: round => dispatch(addRound(round)),
    clearCurrentGame: () => dispatch(clearCurrentGame)
  }
}

export default SentenceScreen

const styles = StyleSheet.create({
  sentenceInput: {
    justifyContent: 'center'
  }
})
