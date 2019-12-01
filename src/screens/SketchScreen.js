import React, { PureComponent } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import {
  Button,
  Container,
  Footer,
  FooterTab,
  Header,
  Icon,
  Text
} from 'native-base'
import SentenceDisplay from '../components/SentenceDisplay'
import { Sketch } from 'expo-pixi'
import { fetchAddress } from '../constants/Variables'
import { connect } from 'react-redux'
import { addRound } from '../actions/CurrentGameRoundsActions'

// TODO: Refractor to incorporate:
// import EndGameButton from '../components/EndGameButton'
// import NextPlayerButton from '../components/NextPlayerButton'

class SketchScreen extends PureComponent {
  state = {
    sketch: null,
    strokeColor: '#000',
    strokeWidth: 14
  }

  draw = async () => { // TODO switch to only take a snapshot at the end of the round
    const { uri } = await this.sketch.takeSnapshotAsync()

    this.setState({
      sketch: { uri },
      strokeWidth: 14,
      strokeColor: '#000'
    })
  }

  navigateToSentence = () => {
    this.updateRounds()
    this.props.navigation.navigate('Sentence')
  }

  updateRounds = () => {
    this.props.addRound({
      drawing: this.state.sketch.uri,
      game_id: this.props.gameId
    })
  }

  endGame = () => {
    // TODO: figure out why the last round is not posting
    // console.log('before updateRounds', this.props.gameRounds)
    this.updateRounds()
    // console.log('before post', this.props.gameRounds)

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
    .then(() => {
      // console.log('after post', this.props.gameRounds)
      this.props.navigation.navigate('Display', {
        id: this.props.id,
        game_rounds: this.props.gameRounds
      })
    })
  }

  render () {
    return (
      <Container>
        <Header />
        <Container style={styles.sentenceDisplay}>
          <SentenceDisplay sentence={this.props.gameRounds[this.props.gameRounds.length - 1].sentence} />
        </Container>
        <Sketch
          ref={ref => (this.sketch = ref)}
          style={styles.sketchInput}
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

const mapStateToProps = state => {
  return {
    gameId: state.gameId,
    gameRounds: state.gameRounds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRound: round => dispatch(addRound(round))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SketchScreen)

const styles = StyleSheet.create({
  sketchInput: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'steelblue',
    margin: 10,
    padding: 10
  },
  sentenceDisplay: {
    padding: 10,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
})
