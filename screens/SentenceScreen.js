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
      <Container>
        <Header />
        <Container>
          <SentenceInput handleTyping={this.handleTyping} />
        </Container>
        <SketchDisplay drawing={this.gameRounds[this.gameRounds.length - 1].drawing}/>
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

export default SentenceScreen

const styles = StyleSheet.create({
  sentenceInput: {
    justifyContent: 'center'
  }
})
