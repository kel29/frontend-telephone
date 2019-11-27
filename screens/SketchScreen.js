import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  Button,
  Text,
  Container,
  Footer,
  FooterTab,
  Icon,
  Card,
  Body,
  CardItem,
  Header
} from 'native-base'
import SentenceDisplay from '../components/SentenceDisplay'
import { Sketch } from 'expo-pixi'
// TODO: Refractor to incorporate:
// import EndGameButton from '../components/EndGameButton'
// import NextPlayerButton from '../components/NextPlayerButton'

class SketchScreen extends PureComponent {
  state = {
    sketch: null,
    strokeColor: '#000',
    strokeWidth: 14
  }

  gameRounds = this.props.navigation.getParam('game_rounds')
  id = this.props.navigation.getParam('id')

  draw = async () => {
    const { uri } = await this.sketch.takeSnapshotAsync()

    this.setState({
      sketch: { uri },
      strokeWidth: 14,
      strokeColor: '#000'
    })
  }

  navigateToSentence = () => {
    this.gameRounds.push({drawing: this.state.sketch.uri, game_id: this.id})
    this.props.navigation.navigate('Sentence', { id: this.id, game_rounds: this.gameRounds })
  }

  endGame = () => {
    this.gameRounds.push({drawing: this.state.sketch.uri, game_id: this.id})
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

  render () {
    return (
      <Container style={styles.container}>
        <Header />
        <Container style={styles.sentenceDisplay}>
          <SentenceDisplay sentence={this.gameRounds[this.gameRounds.length - 1].sentence} />
        </Container>
        <Sketch
          ref={ref => (this.sketch = ref)}
          style={styles.sketch}
          strokeColor={this.state.strokeColor}
          strokeWidth={this.state.strokeWidth}
          strokeAlpha={1}
          onChange={this.draw}
        />
        <Footer>
          <FooterTab>
            <Button onPress={this.endGame}>
              <Icon name='ios-done-all' />
              <Text>End Game</Text> 
            </Button>
            <Button onPress={this.navigateToSentence}>
              <Icon name='ios-checkbox-outline' />
              <Text>Submit Sketch</Text> 
            </Button>
            <Button onPress={() => this.sketch.undo()}>
              <Icon name='ios-undo' />
              <Text>Undo</Text> 
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default SketchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  sketch: {
    flex: 3,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'steelblue',
    padding: 10,
    margin: 10
  },
  sentenceDisplay: {
    padding: 10,
    flex: 1,
    alignContent: 'center',
    // justifyContent: 'center'
  }
})
